import { describe, expect, it } from "vitest";
import { mergeIntervals } from "./mergeIntervals.js";

describe("mergeIntervals", () => {
  it("merges overlapping intervals and sorts the result", () => {
    expect(mergeIntervals([[8, 10], [1, 3], [2, 6]])).toEqual([[1, 6], [8, 10]]);
  });

  it("merges intervals that share an endpoint", () => {
    expect(mergeIntervals([[1, 3], [3, 5]])).toEqual([[1, 5]]);
  });

  it("preserves disjoint and single intervals", () => {
    expect(mergeIntervals([[1, 2], [4, 5]])).toEqual([[1, 2], [4, 5]]);
    expect(mergeIntervals([[2, 7]])).toEqual([[2, 7]]);
  });

  it("returns an empty result for empty input", () => {
    expect(mergeIntervals([])).toEqual([]);
  });

  it("does not modify the input intervals", () => {
    const intervals = [[5, 7], [1, 3]];
    mergeIntervals(intervals);
    expect(intervals).toEqual([[5, 7], [1, 3]]);
  });
});
