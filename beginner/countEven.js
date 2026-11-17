/**
 * Count how many integers in the array are even.
 * Zero and negative even numbers are included.
 * Time: O(n); space: O(1).
 * @param {number[]} numbers
 * @returns {number}
 */
export function countEven(numbers) {
    let count = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            count++;
        }
    }
    return count;
}