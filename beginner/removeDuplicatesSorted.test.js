import { describe, expect, it } from "vitest";
import { removeDuplicates } from "./removeDuplicatesSorted.js";

describe("removeDuplicates", () => {
  it("keeps one copy of each value and returns the unique count", () => {
    const nums = [1, 1, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 2]);
  });

  it("handles an array with no duplicates", () => {
    const nums = [1, 2, 3];
    const k = removeDuplicates(nums);
    expect(k).toBe(3);
    expect(nums.slice(0, k)).toEqual([1, 2, 3]);
  });

  it("collapses a run of equal values to one", () => {
    const nums = [5, 5, 5];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([5]);
  });

  it("returns zero for an empty array", () => {
    expect(removeDuplicates([])).toBe(0);
  });

  it("handles a single value", () => {
    expect(removeDuplicates([7])).toBe(1);
  });

  it("handles duplicates at both ends", () => {
    const nums = [0, 0, 1, 2, 2, 2, 9, 9];
    const k = removeDuplicates(nums);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 9]);
  });
});
