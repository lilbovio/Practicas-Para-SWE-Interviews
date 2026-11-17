import { describe, expect, it } from "vitest";
import { containsDuplicate } from "./containsDuplicateSet.js";

describe("containsDuplicate (Set solution)", () => {
  it("detects duplicates", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it("returns false when all values are unique", () => {
    expect(containsDuplicate([1, 2, 3])).toBe(false);
  });

  it("handles an empty array", () => {
    expect(containsDuplicate([])).toBe(false);
  });
});
