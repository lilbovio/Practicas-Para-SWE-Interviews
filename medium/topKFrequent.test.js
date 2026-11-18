import { describe, expect, it } from "vitest";
import { topKFrequent } from "./topKFrequent.js";

describe("topKFrequent", () => {
  it("returns the most frequent values", () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2).sort()).toEqual([1, 2]);
  });

  it("returns the only value for a single-element input", () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });

  it("returns every unique value when k is larger than the number of unique values", () => {
    expect(topKFrequent([1, 2], 5).sort()).toEqual([1, 2]);
  });

  it("returns an empty array when k is zero", () => {
    expect(topKFrequent([1, 1, 2], 0)).toEqual([]);
  });

  it("supports negative values", () => {
    expect(topKFrequent([-1, -1, 4], 1)).toEqual([-1]);
  });

  it("returns an empty array for empty input", () => {
    expect(topKFrequent([], 3)).toEqual([]);
  });
});
