/**
 * A singly linked list node.
 */
export class ListNode {
  /**
   * @param {number} value
   * @param {ListNode | null} next
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Reverse a singly linked list in place and return the new head.
 * Walk the list once, pointing each node back at the previous one.
 * Time: O(n); space: O(1).
 * @param {ListNode | null} head
 * @returns {ListNode | null}
 */
export function reverseList(head) {
  let previous = null;
  let current = head;
  while (current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}

/**
 * Detect a cycle with Floyd's algorithm: a fast pointer moves two steps for
 * every one step of a slow pointer. If there is a cycle, they must meet.
 * Time: O(n); space: O(1).
 * @param {ListNode | null} head
 * @returns {boolean}
 */
export function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
