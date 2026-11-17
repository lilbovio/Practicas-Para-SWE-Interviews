/**
 * Least-recently-used cache with O(1) get and set operations.
 * Map iteration order tracks recency: the first key is evicted next.
 */
export class LRUCache {
  /**
   * @param {number} capacity Must be a positive integer.
   */
  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity < 1) {
      throw new RangeError("capacity must be a positive integer");
    }
    this.capacity = capacity;
    this.entries = new Map();
  }

  /**
   * Return a value and mark its key as recently used, or -1 if missing.
   * @param {number} key
   * @returns {number}
   */
  get(key) {
    if (!this.entries.has(key)) {
      return -1;
    }
    const value = this.entries.get(key);
    this.entries.delete(key);
    this.entries.set(key, value);
    return value;
  }

  /**
   * Insert or update a key, evicting the least-recently-used key if needed.
   * @param {number} key
   * @param {number} value
   */
  set(key, value) {
    this.entries.delete(key);
    this.entries.set(key, value);
    if (this.entries.size > this.capacity) {
      const leastRecentlyUsedKey = this.entries.keys().next().value;
      this.entries.delete(leastRecentlyUsedKey);
    }
  }
}
