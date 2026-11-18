/**
 * Return an array where each position holds the product of all other values,
 * without using division. A prefix pass stores the product of everything to
 * the left; a suffix pass multiplies in everything to the right.
 * The input array is not modified.
 * Time: O(n); space: O(1) extra, excluding the returned array.
 * @param {number[]} nums
 * @returns {number[]}
 */
export function productExceptSelf(nums) {
    const result = new Array(nums.length);

    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    return result;
}
