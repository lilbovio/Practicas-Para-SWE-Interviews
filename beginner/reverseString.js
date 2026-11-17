/**
 * Reverse a string with a two-pointer swap.
 * JavaScript strings are immutable, so the characters are copied to an array.
 * @param {string | null} s
 * @returns {string | null}
 */
export function reverseString(s) {
    if (s === null || s.length === 0) {
        return s;
    }

    const characters = [...s];
    let left = 0;
    let right = characters.length - 1;

    while (left < right) {
        const temp = characters[left];
        characters[left] = characters[right];
        characters[right] = temp;
        left++;
        right--;
    }
    return characters.join("");
}
