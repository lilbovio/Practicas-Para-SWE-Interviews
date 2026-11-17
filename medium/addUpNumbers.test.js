import { describe, expect, it } from "vitest";
import { addUpNumbers } from "./addUpNumbers.js";

describe("addUpNumbers", () => {
  it("returns indices of a pair that reaches the target", () => {
    expect(addUpNumbers([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("uses separate indices for equal values", () => {
    expect(addUpNumbers([3, 3], 6)).toEqual([0, 1]);
  });

  it("returns null when no pair exists", () => {
    expect(addUpNumbers([1, 2, 3], 10)).toBeNull();
    expect(addUpNumbers([], 0)).toBeNull();
  });
});
