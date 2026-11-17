/**
 * Return the indices of two values that add up to target, or null if none exist.
 * This is a one-pass hash-map solution; the input is not modified.
 * Time: O(n); space: O(n).
 * @param {number[]} numbers
 * @param {number} target
 * @returns {[number, number] | null}
 */
export function addUpNumbers(numbers, target) {
    const seen = new Map();

    for (let i = 0; i < numbers.length; i++) {
        let complement = target - numbers[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(numbers[i], i);
    }
    return null;
}