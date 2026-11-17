/**
 * Remove adjacent upper/lowercase versions of the same ASCII letter.
 * Return the length of the reduced string.
 * Time: O(n); space: O(n).
 * @param {string} s
 * @returns {number}
 */
export function makeStringGood(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (stack.length > 0 && Math.abs(stack[stack.length - 1].charCodeAt(0) - char.charCodeAt(0)) === 32) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length;
}