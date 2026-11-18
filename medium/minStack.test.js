import { describe, expect, it } from "vitest";
import { MinStack } from "./minStack.js";

describe("MinStack", () => {
  it("tracks the minimum as values are pushed", () => {
    const stack = new MinStack();
    stack.push(5);
    stack.push(2);
    stack.push(7);
    expect(stack.getMin()).toBe(2);
  });

  it("restores the previous minimum after popping the smallest value", () => {
    const stack = new MinStack();
    stack.push(5);
    stack.push(2);
    stack.push(7);
    expect(stack.pop()).toBe(7);
    expect(stack.pop()).toBe(2);
    expect(stack.getMin()).toBe(5);
  });

  it("keeps the minimum when a duplicate minimum is popped", () => {
    const stack = new MinStack();
    stack.push(1);
    stack.push(1);
    stack.push(3);
    stack.pop();
    expect(stack.getMin()).toBe(1);
    stack.pop();
    expect(stack.getMin()).toBe(1);
  });

  it("reports the top value without removing it", () => {
    const stack = new MinStack();
    stack.push(4);
    expect(stack.top()).toBe(4);
    expect(stack.top()).toBe(4);
  });

  it("handles negative values", () => {
    const stack = new MinStack();
    stack.push(0);
    stack.push(-3);
    expect(stack.getMin()).toBe(-3);
  });

  it("throws when reading from an empty stack", () => {
    const stack = new MinStack();
    expect(() => stack.pop()).toThrow(RangeError);
    expect(() => stack.top()).toThrow(RangeError);
    expect(() => stack.getMin()).toThrow(RangeError);
  });
});
