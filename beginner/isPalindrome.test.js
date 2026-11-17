import { describe, expect, it } from "vitest";
import { isPalindrome } from "./isPalindrome.js";

describe("isPalindrome", () => {
  it("recognizes a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("ignores case, spaces, and punctuation", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama!")).toBe(true);
  });

  it("rejects text that is not a palindrome", () => {
    expect(isPalindrome("interview")).toBe(false);
  });

  it("treats empty and punctuation-only text as a palindrome", () => {
    expect(isPalindrome("")).toBe(true);
    expect(isPalindrome("...")).toBe(true);
  });
});
