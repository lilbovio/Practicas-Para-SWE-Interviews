/**
 * Return the numbers 1..n as strings, replacing multiples of 3 with "Fizz",
 * multiples of 5 with "Buzz", and multiples of both with "FizzBuzz".
 * The check for multiples of 15 must come first, or it is never reached.
 * Time: O(n); space: O(n) for the result.
 * @param {number} n
 * @returns {string[]}
 */
export function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(String(i));
        }
    }
    return result;
}
