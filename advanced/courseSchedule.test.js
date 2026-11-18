import { describe, expect, it } from "vitest";
import { canFinish } from "./courseSchedule.js";

describe("canFinish", () => {
  it("accepts a single prerequisite chain", () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
  });

  it("rejects two courses that require each other", () => {
    expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
  });

  it("rejects a course that requires itself", () => {
    expect(canFinish(1, [[0, 0]])).toBe(false);
  });

  it("accepts courses with no prerequisites", () => {
    expect(canFinish(3, [])).toBe(true);
  });

  it("detects a cycle that is separate from the rest of the graph", () => {
    expect(canFinish(4, [[1, 0], [3, 2], [2, 3]])).toBe(false);
  });

  it("handles duplicate prerequisite pairs", () => {
    expect(canFinish(3, [[1, 0], [1, 0], [2, 1]])).toBe(true);
  });

  it("accepts zero courses", () => {
    expect(canFinish(0, [])).toBe(true);
  });
});
