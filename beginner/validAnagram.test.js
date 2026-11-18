import { describe, expect, it } from "vitest";
import { isAnagram } from "./validAnagram.js";

describe("isAnagram", () => {
  it("accepts rearranged letters", () => {
    expect(isAnagram("listen", "silent")).toBe(true);
  });

  it("rejects different letters", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });

  it("rejects the same letters with different counts", () => {
    expect(isAnagram("aab", "abb")).toBe(false);
  });

  it("treats two empty strings as anagrams", () => {
    expect(isAnagram("", "")).toBe(true);
  });

  it("rejects strings of different lengths", () => {
    expect(isAnagram("abc", "ab")).toBe(false);
  });

  it("is case-sensitive by design", () => {
    expect(isAnagram("a", "A")).toBe(false);
  });

  it("matches accented characters only when they use the same code points", () => {
    expect(isAnagram("café", "facé")).toBe(true);
    expect(isAnagram("é", "é")).toBe(false);
  });
});
