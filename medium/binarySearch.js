/**
 * Return the smallest index i where sorted[i] >= target, or sorted.length if none.
 * Keep the answer inside [low, high): when the middle value is too small, the
 * answer must be to its right; otherwise the middle itself may be the answer.
 * Time: O(log n); space: O(1).
 * @param {number[]} sorted sorted in non-decreasing order
 * @param {number} target
 * @returns {number}
 */
export function firstIndexAtLeast(sorted, target) {
    let low = 0;
    let high = sorted.length;
    while (low < high) {
        const middle = low + Math.floor((high - low) / 2);
        if (sorted[middle] < target) {
            low = middle + 1;
        } else {
            high = middle;
        }
    }
    return low;
}

/**
 * Return the index of target in a sorted array, or -1 when it is absent.
 * Time: O(log n); space: O(1).
 * @param {number[]} sorted
 * @param {number} target
 * @returns {number}
 */
export function binarySearch(sorted, target) {
    const index = firstIndexAtLeast(sorted, target);
    return index < sorted.length && sorted[index] === target ? index : -1;
}
