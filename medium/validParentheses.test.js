import { describe, expect, it } from "vitest";
import { validParentheses } from "./validParentheses.js";

describe("validParentheses", () => {
  it("accepts correctly nested bracket types", () => {
    expect(validParentheses("()[]{}")).toBe(true);
    expect(validParentheses("{[]}")).toBe(true);
  });

  it("rejects mismatched and incorrectly ordered brackets", () => {
    expect(validParentheses("(]")).toBe(false);
    expect(validParentheses("([)]")).toBe(false);
  });

  it("rejects unclosed and extra closing brackets", () => {
    expect(validParentheses("(")).toBe(false);
    expect(validParentheses(")")).toBe(false);
  });

  it("rejects non-bracket characters", () => {
    expect(validParentheses("a()")).toBe(false);
  });

  it("accepts an empty string", () => {
    expect(validParentheses("")).toBe(true);
  });
});
