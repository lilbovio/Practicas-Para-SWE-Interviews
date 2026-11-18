import { describe, expect, it } from "vitest";
import { ListNode, hasCycle, reverseList } from "./reverseLinkedList.js";

/** Build a linked list from an array of values. */
function fromArray(values) {
  let head = null;
  for (let i = values.length - 1; i >= 0; i--) {
    head = new ListNode(values[i], head);
  }
  return head;
}

/** Collect a linked list's values; stops after `limit` nodes to avoid cycles. */
function toArray(head, limit = 100) {
  const values = [];
  for (let node = head; node !== null && values.length < limit; node = node.next) {
    values.push(node.value);
  }
  return values;
}

describe("reverseList", () => {
  it("reverses several nodes", () => {
    expect(toArray(reverseList(fromArray([1, 2, 3])))).toEqual([3, 2, 1]);
  });

  it("returns null for an empty list", () => {
    expect(reverseList(null)).toBe(null);
  });

  it("leaves a single node unchanged", () => {
    expect(toArray(reverseList(fromArray([9])))).toEqual([9]);
  });
});

describe("hasCycle", () => {
  it("returns false for a list without a cycle", () => {
    expect(hasCycle(fromArray([1, 2, 3]))).toBe(false);
  });

  it("returns false for an empty list", () => {
    expect(hasCycle(null)).toBe(false);
  });

  it("detects a cycle that points back to the head", () => {
    const head = fromArray([1, 2, 3]);
    let tail = head;
    while (tail.next !== null) tail = tail.next;
    tail.next = head;
    expect(hasCycle(head)).toBe(true);
  });

  it("detects a cycle that points to a middle node", () => {
    const head = fromArray([1, 2, 3, 4]);
    const middle = head.next;
    let tail = head;
    while (tail.next !== null) tail = tail.next;
    tail.next = middle;
    expect(hasCycle(head)).toBe(true);
  });

  it("detects a single node that points to itself", () => {
    const node = new ListNode(1);
    node.next = node;
    expect(hasCycle(node)).toBe(true);
  });
});
