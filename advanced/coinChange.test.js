import { describe, expect, it } from "vitest";
import { coinChange } from "./coinChange.js";

describe("coinChange", () => {
  it("uses the fewest coins for a mixed set of denominations", () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
  });

  it("returns -1 when the amount cannot be formed", () => {
    expect(coinChange([2], 3)).toBe(-1);
  });

  it("returns 0 for amount zero", () => {
    expect(coinChange([1], 0)).toBe(0);
  });

  it("reuses the same coin many times", () => {
    expect(coinChange([1], 2)).toBe(2);
  });

  it("beats greedy when the largest coin first is not optimal", () => {
    // Greedy takes 4, then 1 + 1: three coins. The optimum is 3 + 3: two coins.
    expect(coinChange([1, 3, 4], 6)).toBe(2);
  });

  it("rejects a negative amount", () => {
    expect(() => coinChange([1], -1)).toThrow(RangeError);
  });

  it("returns 4 for 27 with coins 1, 2, 5, 10", () => {
    expect(coinChange([2, 5, 10, 1], 27)).toBe(4);
  });

  it("returns -1 when there are no coins and the amount is positive", () => {
    expect(coinChange([], 5)).toBe(-1);
  });
});
