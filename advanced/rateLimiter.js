/**
 * Token-bucket rate limiter.
 * The bucket holds up to `capacity` tokens and refills at `refillPerSecond`.
 * Each allowed request takes tokens; a request that needs more than are available is rejected
 * and takes nothing. The clock is injected so tests can control time.
 * tryConsume: O(1).
 */
export class TokenBucket {
  /**
   * @param {object} options
   * @param {number} options.capacity maximum tokens, a positive number
   * @param {number} options.refillPerSecond tokens added per second, a positive number
   * @param {() => number} [options.now] clock in milliseconds
   */
  constructor({ capacity, refillPerSecond, now = () => Date.now() }) {
    if (!(capacity > 0) || !(refillPerSecond > 0)) {
      throw new RangeError("capacity and refillPerSecond must be positive");
    }
    this.capacity = capacity;
    this.refillPerSecond = refillPerSecond;
    this.now = now;
    this.tokens = capacity;
    this.lastRefill = now();
  }

  /**
   * Try to take `count` tokens.
   * @param {number} [count=1] a positive integer
   * @returns {boolean} true if the request is allowed
   */
  tryConsume(count = 1) {
    if (!Number.isInteger(count) || count < 1) {
      throw new RangeError("count must be a positive integer");
    }
    this.#refill();
    if (this.tokens >= count) {
      this.tokens -= count;
      return true;
    }
    return false;
  }

  #refill() {
    const current = this.now();
    // A clock that moves backwards must not remove tokens, so elapsed time is clamped at zero.
    const elapsedSeconds = Math.max(0, current - this.lastRefill) / 1000;
    this.tokens = Math.min(this.capacity, this.tokens + elapsedSeconds * this.refillPerSecond);
    this.lastRefill = current;
  }
}
