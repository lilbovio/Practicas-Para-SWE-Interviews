import { describe, expect, it } from "vitest";
import { LRUCache } from "./LRUCache.js";

describe("LRUCache", () => {
  it("returns stored values and -1 for missing keys", () => {
    const cache = new LRUCache(2);
    cache.set(1, 10);
    expect(cache.get(1)).toBe(10);
    expect(cache.get(2)).toBe(-1);
  });

  it("evicts the least recently used entry", () => {
    const cache = new LRUCache(2);
    cache.set(1, 10);
    cache.set(2, 20);
    cache.get(1);
    cache.set(3, 30);
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(1)).toBe(10);
    expect(cache.get(3)).toBe(30);
  });

  it("updates a value and makes the key most recently used", () => {
    const cache = new LRUCache(2);
    cache.set(1, 10);
    cache.set(2, 20);
    cache.set(1, 11);
    cache.set(3, 30);
    expect(cache.get(1)).toBe(11);
    expect(cache.get(2)).toBe(-1);
  });

  it("supports a capacity of one", () => {
    const cache = new LRUCache(1);
    cache.set(1, 10);
    cache.set(2, 20);
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(20);
  });

  it("rejects an invalid capacity", () => {
    expect(() => new LRUCache(0)).toThrow(RangeError);
    expect(() => new LRUCache(1.5)).toThrow(RangeError);
  });
});
