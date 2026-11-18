/**
 * Return true when both strings contain the same characters with the same counts.
 * Comparison is case-sensitive and counts Unicode code points. It does not normalize,
 * so a precomposed "é" (U+00E9) and "e" followed by a combining accent are different.
 * Time: O(n); space: O(k), where k is the number of distinct characters.
 * @param {string} first
 * @param {string} second
 * @returns {boolean}
 */
export function isAnagram(first, second) {
    const a = [...first];
    const b = [...second];
    if (a.length !== b.length) {
        return false;
    }

    const counts = new Map();
    for (const character of a) {
        counts.set(character, (counts.get(character) || 0) + 1);
    }
    for (const character of b) {
        const remaining = counts.get(character) || 0;
        if (remaining === 0) {
            return false;
        }
        counts.set(character, remaining - 1);
    }
    return true;
}
