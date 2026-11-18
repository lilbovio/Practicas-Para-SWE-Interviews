import { describe, expect, it } from "vitest";
import { binarySearch, firstIndexAtLeast } from "./binarySearch.js";

describe("binarySearch", () => {
  it("finds a value in the middle", () => {
    expect(binarySearch([1, 3, 5, 7], 5)).toBe(2);
  });

  it("finds the first and last elements", () => {
    expect(binarySearch([1, 3, 5, 7], 1)).toBe(0);
    expect(binarySearch([1, 3, 5, 7], 7)).toBe(3);
  });

  it("returns the first index when the value repeats", () => {
    expect(binarySearch([1, 2, 2, 2, 3], 2)).toBe(1);
  });

  it("returns -1 when the value is absent", () => {
    expect(binarySearch([1, 3, 5, 7], 4)).toBe(-1);
    expect(binarySearch([1, 3, 5, 7], 0)).toBe(-1);
    expect(binarySearch([1, 3, 5, 7], 8)).toBe(-1);
  });

  it("handles empty and single-element arrays", () => {
    expect(binarySearch([], 1)).toBe(-1);
    expect(binarySearch([4], 4)).toBe(0);
    expect(binarySearch([4], 5)).toBe(-1);
  });
});

describe("firstIndexAtLeast", () => {
  it("returns the first of several duplicate values", () => {
    expect(firstIndexAtLeast([1, 2, 2, 2, 3], 2)).toBe(1);
  });

  it("returns the insertion point for a missing value", () => {
    expect(firstIndexAtLeast([1, 2, 3], 4)).toBe(3);
    expect(firstIndexAtLeast([1, 2, 3], 0)).toBe(0);
    expect(firstIndexAtLeast([1, 3], 2)).toBe(1);
  });

  it("returns 0 for an empty array", () => {
    expect(firstIndexAtLeast([], 1)).toBe(0);
  });
});
