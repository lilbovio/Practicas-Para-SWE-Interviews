import { describe, expect, it } from "vitest";
import { MedianFinder } from "./medianFromStream.js";

/** Reference median computed by sorting the whole list. */
function bruteForceMedian(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 1
    ? sorted[middle]
    : (sorted[middle - 1] + sorted[middle]) / 2;
}

describe("MedianFinder", () => {
  it("returns null before any number is added", () => {
    expect(new MedianFinder().findMedian()).toBe(null);
  });

  it("returns the single value after one addition", () => {
    const finder = new MedianFinder();
    finder.addNum(7);
    expect(finder.findMedian()).toBe(7);
  });

  it("averages the two middle values for an even count", () => {
    const finder = new MedianFinder();
    finder.addNum(1);
    finder.addNum(2);
    expect(finder.findMedian()).toBe(1.5);
  });

  it("returns the middle value for an odd count", () => {
    const finder = new MedianFinder();
    [1, 2, 3].forEach((n) => finder.addNum(n));
    expect(finder.findMedian()).toBe(2);
  });

  it("handles duplicate values", () => {
    const finder = new MedianFinder();
    [5, 5, 5, 5].forEach((n) => finder.addNum(n));
    expect(finder.findMedian()).toBe(5);
  });

  it("handles negative values", () => {
    const finder = new MedianFinder();
    [-1, -2, -3].forEach((n) => finder.addNum(n));
    expect(finder.findMedian()).toBe(-2);
  });

  it("matches a sorted reference after every insertion", () => {
    const values = [9, 3, 7, 1, 8, 2, 2, 6, -4, 0, 5];
    const finder = new MedianFinder();
    const seen = [];
    for (const value of values) {
      finder.addNum(value);
      seen.push(value);
      expect(finder.findMedian()).toBe(bruteForceMedian(seen));
    }
  });
});
