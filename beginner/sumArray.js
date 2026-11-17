/**
 * Return the sum of all numbers in an array.
 * The empty array has a sum of zero.
 * Time: O(n); space: O(1).
 * @param {number[]} numbers
 * @returns {number}
 */
export function sumArray(numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}
