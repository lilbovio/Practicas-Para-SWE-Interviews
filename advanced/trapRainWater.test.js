import { describe, expect, it } from "vitest";
import { trapRainWater } from "./trapRainWater.js";

describe("trapRainWater", () => {
  it("computes water for a valley with several bars", () => {
    expect(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });

  it("handles a simple basin", () => {
    expect(trapRainWater([4, 2, 0, 3, 2, 5])).toBe(9);
  });

  it("returns zero for monotonic or flat heights", () => {
    expect(trapRainWater([1, 2, 3, 4])).toBe(0);
    expect(trapRainWater([3, 3, 3])).toBe(0);
  });

  it("returns zero when fewer than three bars are given", () => {
    expect(trapRainWater([])).toBe(0);
    expect(trapRainWater([5, 1])).toBe(0);
  });
});
