import { describe, expect, it } from "vitest";
import { longestUniqueSubstring } from "./longestUniqueSubstring.js";

describe("longestUniqueSubstring", () => {
  it("finds the longest window when repeats occur", () => {
    expect(longestUniqueSubstring("abcabcbb")).toBe(3);
    expect(longestUniqueSubstring("pwwkew")).toBe(3);
  });

  it("handles all-unique and all-identical strings", () => {
    expect(longestUniqueSubstring("interview")).toBe(6);
    expect(longestUniqueSubstring("bbbb")).toBe(1);
  });

  it("handles empty input", () => {
    expect(longestUniqueSubstring("")).toBe(0);
  });

  it("counts supplementary Unicode characters as one each", () => {
    expect(longestUniqueSubstring("😀😃😀")).toBe(2);
  });
});
