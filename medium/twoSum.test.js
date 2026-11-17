import { describe, expect, it } from "vitest";
import { twoSum } from "./twoSum.js";

describe("twoSum", () => {
  it("returns the indices of a matching pair", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("uses two distinct positions when values repeat", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("supports negative numbers", () => {
    expect(twoSum([-4, 6, 1], -3)).toEqual([0, 2]);
  });

  it("returns an empty array when no pair exists", () => {
    expect(twoSum([1, 2, 3], 10)).toEqual([]);
    expect(twoSum([], 0)).toEqual([]);
  });

  it("does not mutate the input", () => {
    const numbers = [4, 1, 5];
    twoSum(numbers, 6);
    expect(numbers).toEqual([4, 1, 5]);
  });
});
