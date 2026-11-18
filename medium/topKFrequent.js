/**
 * Return the k most frequent values. The order of the result is not guaranteed,
 * and ties between equally frequent values may be returned in any order.
 * Bucket sort: index i holds the values that appear exactly i times.
 * Time: O(n); space: O(n).
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
export function topKFrequent(nums, k) {
    if (k <= 0) {
        return [];
    }

    const counts = new Map();
    for (const number of nums) {
        counts.set(number, (counts.get(number) || 0) + 1);
    }

    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    for (const [number, count] of counts) {
        buckets[count].push(number);
    }

    const result = [];
    for (let count = buckets.length - 1; count >= 1 && result.length < k; count--) {
        for (const number of buckets[count]) {
            if (result.length < k) {
                result.push(number);
            }
        }
    }
    return result;
}
