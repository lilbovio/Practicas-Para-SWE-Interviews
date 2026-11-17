import { describe, expect, it } from "vitest";
import { countEven } from "./countEven.js";

describe("countEven", () => {
  it("counts even values including zero and negatives", () => {
    expect(countEven([0, 1, 2, -4, -3])).toBe(3);
  });

  it("returns zero when no values are even", () => {
    expect(countEven([1, 3, 5])).toBe(0);
  });

  it("returns zero for an empty array", () => {
    expect(countEven([])).toBe(0);
  });
});
