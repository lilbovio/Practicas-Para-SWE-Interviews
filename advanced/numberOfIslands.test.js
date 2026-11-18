import { describe, expect, it } from "vitest";
import { numberOfIslands } from "./numberOfIslands.js";

describe("numberOfIslands", () => {
  it("counts one large island", () => {
    const grid = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    expect(numberOfIslands(grid)).toBe(1);
  });

  it("counts separate islands", () => {
    const grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    expect(numberOfIslands(grid)).toBe(3);
  });

  it("does not connect cells that only touch diagonally", () => {
    expect(numberOfIslands([["1", "0"], ["0", "1"]])).toBe(2);
  });

  it("handles a single land cell and a single water cell", () => {
    expect(numberOfIslands([["1"]])).toBe(1);
    expect(numberOfIslands([["0"]])).toBe(0);
  });

  it("returns zero for an empty grid", () => {
    expect(numberOfIslands([])).toBe(0);
  });

  it("does not mutate the input grid", () => {
    const grid = [["1", "1"]];
    numberOfIslands(grid);
    expect(grid).toEqual([["1", "1"]]);
  });
});
