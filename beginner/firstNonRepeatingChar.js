/**
 * Return the first character in the string that occurs only once, or null.

firstUnique("swiss")   // "w"
firstUnique("aabb")    // null
firstUnique("level")   // "v"

Using a map to store the count of each character and then iterating through the string again to find the first character with a count of 1.
 * Time: O(n); space: O(k), where k is the number of unique characters.
 * @param {string} str
 * @returns {string | null}
 */
export function firstNonRepeatingChar(str) {
    const charCount = new Map();
    
    // Count each character before checking which one appears first exactly once.
    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    for (let char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    
    return null;
}