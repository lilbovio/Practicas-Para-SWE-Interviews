import { describe, expect, it } from "vitest";
import { productExceptSelf } from "./productExceptSelf.js";

describe("productExceptSelf", () => {
  it("multiplies every other value", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it("gives zero everywhere except the zero's position when there is one zero", () => {
    // Multiplying a negative number by zero yields -0, and toEqual treats -0 and 0
    // as different. Adding 0 normalizes the sign so the comparison checks the value.
    const result = productExceptSelf([-1, 1, 0, -3, 3]).map((value) => value + 0);
    expect(result).toEqual([0, 0, 9, 0, 0]);
  });

  it("gives zero everywhere when there are two zeros", () => {
    expect(productExceptSelf([0, 0])).toEqual([0, 0]);
  });

  it("returns 1 for a single value", () => {
    expect(productExceptSelf([2])).toEqual([1]);
  });

  it("returns an empty array for empty input", () => {
    expect(productExceptSelf([])).toEqual([]);
  });

  it("does not mutate the input", () => {
    const nums = [2, 3];
    productExceptSelf(nums);
    expect(nums).toEqual([2, 3]);
  });
});
