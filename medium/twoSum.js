/**
 * Return indices of two values whose sum equals target, or null if none exist.
 * Each input position may be used only once; the input array is not modified.
 * Time: O(n); space: O(n).
 * @param {number[]} numbers
 * @param {number} target
 * @returns {[number, number] | []}
 */
export function twoSum(numbers, target) {
  const indexByValue = new Map();

  for (let index = 0; index < numbers.length; index++) {
    const complement = target - numbers[index];
    if (indexByValue.has(complement)) {
      return [indexByValue.get(complement), index];
    }
    indexByValue.set(numbers[index], index);
  }
  return [];
}
