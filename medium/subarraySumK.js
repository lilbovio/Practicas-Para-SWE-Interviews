/**
 * Count contiguous subarrays whose values sum to k.
 * Use running prefix sums: a subarray (i, j] sums to k when prefix[j] - k was
 * already seen as a prefix sum before position j. A map counts those prefixes.
 * Negative values are allowed, so a sliding window does not work here.
 * Time: O(n); space: O(n).
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
export function subarraySumEqualsK(nums, k) {
    const prefixCounts = new Map([[0, 1]]);
    let sum = 0;
    let count = 0;

    for (const number of nums) {
        sum += number;
        count += prefixCounts.get(sum - k) || 0;
        prefixCounts.set(sum, (prefixCounts.get(sum) || 0) + 1);
    }
    return count;
}
