/**
 * Stack that returns its minimum value in O(1).
 * Each entry stores the value together with the minimum at or below it,
 * so popping an entry restores the previous minimum without rescanning.
 * `top`, `pop`, and `getMin` throw a RangeError on an empty stack.
 */
export class MinStack {
  constructor() {
    /** @type {{ value: number, min: number }[]} */
    this.entries = [];
  }

  /** @param {number} value */
  push(value) {
    const previousMin = this.entries.length === 0 ? value : this.getMin();
    this.entries.push({ value, min: Math.min(value, previousMin) });
  }

  /** @returns {number} the removed value */
  pop() {
    this.#requireNonEmpty();
    return this.entries.pop().value;
  }

  /** @returns {number} the top value without removing it */
  top() {
    this.#requireNonEmpty();
    return this.entries[this.entries.length - 1].value;
  }

  /** @returns {number} the smallest value currently in the stack */
  getMin() {
    this.#requireNonEmpty();
    return this.entries[this.entries.length - 1].min;
  }

  #requireNonEmpty() {
    if (this.entries.length === 0) {
      throw new RangeError("stack is empty");
    }
  }
}
