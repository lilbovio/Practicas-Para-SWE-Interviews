/**
 * Remove adjacent duplicates from a sorted array in place.
 * Return the number of unique values; the first k slots hold them in order.
 * Slots after index k-1 keep leftover values and must be ignored.
 * Time: O(n); space: O(1).
 * @param {number[]} nums sorted in non-decreasing order
 * @returns {number}
 */
export function removeDuplicates(nums) {
    let write = 0;
    for (let read = 0; read < nums.length; read++) {
        // Keep a value if it is the first one, or differs from the last kept value.
        if (write === 0 || nums[read] !== nums[write - 1]) {
            nums[write] = nums[read];
            write++;
        }
    }
    return write;
}
