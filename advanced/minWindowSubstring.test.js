import { describe, expect, it } from "vitest";
import { minWindow } from "./minWindowSubstring.js";

describe("minWindow", () => {
  it("finds the shortest window containing all required characters", () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
  });

  it("returns the whole string when it is the only window", () => {
    expect(minWindow("a", "a")).toBe("a");
  });

  it("respects repeated characters in the target", () => {
    expect(minWindow("a", "aa")).toBe("");
    expect(minWindow("aab", "aa")).toBe("aa");
  });

  it("returns a single matching character", () => {
    expect(minWindow("ab", "b")).toBe("b");
  });

  it("returns an empty string when the target is empty", () => {
    expect(minWindow("ADOBE", "")).toBe("");
  });

  it("returns an empty string when the source is empty", () => {
    expect(minWindow("", "a")).toBe("");
  });

  it("returns the leftmost window when two windows tie", () => {
    // "ab" at index 0 and "ba" at index 3 both have length 2.
    expect(minWindow("abxba", "ab")).toBe("ab");
  });

  it("treats an emoji as one character", () => {
    expect(minWindow("😀", "😀")).toBe("😀");
    expect(minWindow("a😀b", "😀")).toBe("😀");
  });
});
