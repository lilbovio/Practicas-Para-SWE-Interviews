import { describe, expect, it } from "vitest";
import { TokenBucket } from "./rateLimiter.js";

/** A clock the test moves forward by hand. */
function fakeClock(startMs = 0) {
  let current = startMs;
  return {
    now: () => current,
    advance: (ms) => {
      current += ms;
    },
  };
}

describe("TokenBucket", () => {
  it("allows a burst up to capacity, then rejects", () => {
    const clock = fakeClock();
    const bucket = new TokenBucket({ capacity: 2, refillPerSecond: 1, now: clock.now });
    expect(bucket.tryConsume()).toBe(true);
    expect(bucket.tryConsume()).toBe(true);
    expect(bucket.tryConsume()).toBe(false);
  });

  it("refills one token per second at the configured rate", () => {
    const clock = fakeClock();
    const bucket = new TokenBucket({ capacity: 2, refillPerSecond: 1, now: clock.now });
    bucket.tryConsume();
    bucket.tryConsume();
    clock.advance(1000);
    expect(bucket.tryConsume()).toBe(true);
    expect(bucket.tryConsume()).toBe(false);
  });

  it("does not allow a request before a full token has refilled", () => {
    const clock = fakeClock();
    const bucket = new TokenBucket({ capacity: 1, refillPerSecond: 1, now: clock.now });
    bucket.tryConsume();
    clock.advance(500);
    expect(bucket.tryConsume()).toBe(false);
    clock.advance(500);
    expect(bucket.tryConsume()).toBe(true);
  });

  it("never holds more than capacity, even after a long idle time", () => {
    const clock = fakeClock();
    const bucket = new TokenBucket({ capacity: 2, refillPerSecond: 1, now: clock.now });
    clock.advance(10000);
    expect(bucket.tryConsume()).toBe(true);
    expect(bucket.tryConsume()).toBe(true);
    expect(bucket.tryConsume()).toBe(false);
  });

  it("rejects a request larger than capacity and takes no tokens", () => {
    const clock = fakeClock();
    const bucket = new TokenBucket({ capacity: 2, refillPerSecond: 1, now: clock.now });
    expect(bucket.tryConsume(3)).toBe(false);
    expect(bucket.tryConsume(2)).toBe(true);
  });

  it("can take several tokens in one request", () => {
    const clock = fakeClock();
    const bucket = new TokenBucket({ capacity: 5, refillPerSecond: 1, now: clock.now });
    expect(bucket.tryConsume(4)).toBe(true);
    expect(bucket.tryConsume(2)).toBe(false);
  });

  it("rejects invalid configuration", () => {
    expect(() => new TokenBucket({ capacity: 0, refillPerSecond: 1 })).toThrow(RangeError);
    expect(() => new TokenBucket({ capacity: 1, refillPerSecond: 0 })).toThrow(RangeError);
  });

  it("rejects a non-positive or fractional token count", () => {
    const bucket = new TokenBucket({ capacity: 1, refillPerSecond: 1, now: fakeClock().now });
    expect(() => bucket.tryConsume(0)).toThrow(RangeError);
    expect(() => bucket.tryConsume(0.5)).toThrow(RangeError);
  });

  it("does not remove tokens when the clock moves backwards", () => {
    const clock = fakeClock(5000);
    const bucket = new TokenBucket({ capacity: 2, refillPerSecond: 1, now: clock.now });
    expect(bucket.tryConsume(2)).toBe(true);
    clock.advance(-10000);
    expect(bucket.tryConsume()).toBe(false);
    expect(bucket.tokens).toBe(0);
  });
});
