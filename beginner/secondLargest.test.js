import { describe, expect, it } from "vitest";
import { secondLargest } from "./secondLargest.js";

describe("secondLargest", () => {
  it("finds the second-largest value in an unordered array", () => {
    expect(secondLargest([3, 1, 4, 2])).toBe(3);
  });

  it("ignores duplicates of the largest value", () => {
    expect(secondLargest([2, 2, 1])).toBe(1);
  });

  it("returns null when all values are equal", () => {
    expect(secondLargest([5, 5])).toBe(null);
  });

  it("returns null for a single value or an empty array", () => {
    expect(secondLargest([4])).toBe(null);
    expect(secondLargest([])).toBe(null);
  });

  it("works with negative numbers", () => {
    expect(secondLargest([-5, -1, -3])).toBe(-3);
  });

  it("handles the largest value appearing first and last", () => {
    expect(secondLargest([9, 1, 2, 9])).toBe(2);
  });
});
