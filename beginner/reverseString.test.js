import { describe, expect, it } from "vitest";
import { reverseString } from "./reverseString.js";

describe("reverseString", () => {
  it("reverses an ordinary string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("handles single-character and empty strings", () => {
    expect(reverseString("a")).toBe("a");
    expect(reverseString("")).toBe("");
  });

  it("passes null through unchanged", () => {
    expect(reverseString(null)).toBeNull();
  });

  it("handles supplementary Unicode characters", () => {
    expect(reverseString("a😀b")).toBe("b😀a");
  });
});