import { describe, expect, it } from "vitest";
import { firstUniqueChar } from "./firstUniqueChar.js";

describe("firstUniqueChar", () => {
  it("returns the earliest character that appears once", () => {
    expect(firstUniqueChar("swiss")).toBe("w");
  });

  it("returns null when every character repeats", () => {
    expect(firstUniqueChar("aabb")).toBeNull();
  });

  it("returns null for an empty string", () => {
    expect(firstUniqueChar("")).toBeNull();
  });
});
