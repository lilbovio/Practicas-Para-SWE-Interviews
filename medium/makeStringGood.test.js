import { describe, expect, it } from "vitest";
import { makeStringGood } from "./makeStringGood.js";

describe("makeStringGood", () => {
  it("cancels adjacent opposite-case copies of a letter", () => {
    expect(makeStringGood("leEeetcode")).toBe(8);
  });

  it("continues reducing after a cancellation", () => {
    expect(makeStringGood("abBAcC")).toBe(0);
  });

  it("leaves non-canceling and empty strings unchanged in length", () => {
    expect(makeStringGood("abc")).toBe(3);
    expect(makeStringGood("")).toBe(0);
  });
});
