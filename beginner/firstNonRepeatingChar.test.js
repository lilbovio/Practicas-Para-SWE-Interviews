// first nonreating character. Write a function firstUnique(str) that returns the first character in the string that appears only once. If there is none, return null.

// firstUnique("swiss")   // "w"
// firstUnique("aabb")    // null
// firstUnique("level")   // "v"

import { describe, it, expect } from "vitest";
import { firstNonRepeatingChar } from "./firstNonRepeatingChar.js";

describe("firstNonRepeatingChar", () => {
    it("returns the first character that occurs once", () => {
        expect(firstNonRepeatingChar("swiss")).toBe("w");
        expect(firstNonRepeatingChar("level")).toBe("v");
    });
    it("returns null when every character repeats", () => {
        expect(firstNonRepeatingChar("aabb")).toBeNull();
    });

    it("returns null for an empty string", () => {
        expect(firstNonRepeatingChar("")).toBeNull();
    });
});
