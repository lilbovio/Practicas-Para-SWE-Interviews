import { describe, expect, it } from "vitest";
import { subarraySumEqualsK } from "./subarraySumK.js";

describe("subarraySumEqualsK", () => {
  it("counts overlapping subarrays", () => {
    expect(subarraySumEqualsK([1, 1, 1], 2)).toBe(2);
  });

  it("counts subarrays with a mix of values", () => {
    expect(subarraySumEqualsK([1, 2, 3], 3)).toBe(2);
  });

  it("handles negative values and zero-sum subarrays", () => {
    // [1, -1], [0], and [1, -1, 0] all sum to zero.
    expect(subarraySumEqualsK([1, -1, 0], 0)).toBe(3);
  });

  it("returns zero when no subarray matches", () => {
    expect(subarraySumEqualsK([1, 2], -1)).toBe(0);
  });

  it("matches a single element", () => {
    expect(subarraySumEqualsK([3], 3)).toBe(1);
  });

  it("returns zero for empty input", () => {
    expect(subarraySumEqualsK([], 0)).toBe(0);
  });
});
