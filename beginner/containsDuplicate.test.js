import { describe, expect, it } from "vitest";
import { containsDuplicate } from "./containsDuplicate.js";

describe("containsDuplicate (nested-loop solution)", () => {
  it("detects repeated values", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate([5, 5])).toBe(true);
  });

  it("returns false for unique or empty arrays", () => {
    expect(containsDuplicate([1, 2, 3])).toBe(false);
    expect(containsDuplicate([])).toBe(false);
  });
});
