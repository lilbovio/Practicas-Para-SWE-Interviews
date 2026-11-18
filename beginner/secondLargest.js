/**
 * Return the second-largest distinct value, or null when none exists.
 * Duplicates of the largest value do not count as a second value: [2, 2, 1] gives 1.
 * Time: O(n); space: O(1).
 * @param {number[]} numbers
 * @returns {number | null}
 */
export function secondLargest(numbers) {
    let largest = null;
    let second = null;

    for (const number of numbers) {
        if (largest === null || number > largest) {
            if (number !== largest) {
                second = largest;
            }
            largest = number;
        } else if (number !== largest && (second === null || number > second)) {
            second = number;
        }
    }
    return second;
}
