import { describe, expect, it } from "vitest";
import { sumArray } from "./sumArray.js";

describe("sumArray", () => {
  it("sums positive and negative numbers", () => {
    expect(sumArray([3, -2, 8])).toBe(9);
  });

  it("returns zero for an empty array", () => {
    expect(sumArray([])).toBe(0);
  });

  it("handles a single zero", () => {
    expect(sumArray([0])).toBe(0);
  });
});
