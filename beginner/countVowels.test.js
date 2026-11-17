import { describe, expect, it } from "vitest";
import { countVowels } from "./countVowels.js";

describe("countVowels", () => {
  it("counts vowels regardless of case", () => {
    expect(countVowels("Quality Assurance")).toBe(7);
  });

  it("returns zero when there are no vowels", () => {
    expect(countVowels("rhythm")).toBe(0);
  });

  it("returns zero for an empty string", () => {
    expect(countVowels("")).toBe(0);
  });

  it("rejects values that are not strings", () => {
    expect(() => countVowels(null)).toThrow("Input must be a string");
    expect(() => countVowels(42)).toThrow("Input must be a string");
  });
});
