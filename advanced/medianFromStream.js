/**
 * Binary min-heap of numbers.
 */
class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  peek() {
    return this.items[0];
  }

  push(value) {
    const items = this.items;
    items.push(value);
    let index = items.length - 1;
    while (index > 0) {
      const parent = (index - 1) >> 1;
      if (items[parent] <= items[index]) break;
      [items[parent], items[index]] = [items[index], items[parent]];
      index = parent;
    }
  }

  pop() {
    const items = this.items;
    const top = items[0];
    const last = items.pop();
    if (items.length > 0) {
      items[0] = last;
      let index = 0;
      for (;;) {
        const left = 2 * index + 1;
        const right = left + 1;
        let smallest = index;
        if (left < items.length && items[left] < items[smallest]) smallest = left;
        if (right < items.length && items[right] < items[smallest]) smallest = right;
        if (smallest === index) break;
        [items[smallest], items[index]] = [items[index], items[smallest]];
        index = smallest;
      }
    }
    return top;
  }
}

/**
 * Track the median of a stream of numbers using two heaps.
 * `low` is a max-heap of the smaller half (stored as negatives in a min-heap);
 * `high` is a min-heap of the larger half. The low heap holds the same number
 * of values as the high heap, or one more.
 * addNum: O(log n); findMedian: O(1). Space: O(n).
 */
export class MedianFinder {
  constructor() {
    this.low = new MinHeap();
    this.high = new MinHeap();
  }

  /** @param {number} num */
  addNum(num) {
    this.low.push(-num);
    this.high.push(-this.low.pop());
    if (this.high.size() > this.low.size()) {
      this.low.push(-this.high.pop());
    }
  }

  /** @returns {number | null} the median, or null when no numbers were added */
  findMedian() {
    if (this.low.size() === 0) {
      return null;
    }
    if (this.low.size() > this.high.size()) {
      return -this.low.peek();
    }
    return (-this.low.peek() + this.high.peek()) / 2;
  }
}
