import { describe, expect, it } from "vitest";
import { fizzBuzz } from "./fizzBuzz.js";

describe("fizzBuzz", () => {
  it("labels numbers divisible by 3 and 5", () => {
    expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  it("uses FizzBuzz for multiples of 15, not Fizz", () => {
    expect(fizzBuzz(15)[14]).toBe("FizzBuzz");
  });

  it("returns an empty array for zero", () => {
    expect(fizzBuzz(0)).toEqual([]);
  });

  it("returns one item for each number from 1 to n", () => {
    expect(fizzBuzz(20)).toHaveLength(20);
  });
});
