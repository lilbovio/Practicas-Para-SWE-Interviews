/**
 * Count the English vowels (a, e, i, o, u), ignoring letter case.
 * Time: O(n); space: O(1).
 * @param {string} text
 * @returns {number}
 */
export function countVowels(text) {
  if (typeof text !== "string") {
    throw new Error("Input must be a string");
  }

  let count = 0;
  for (const character of text.toLowerCase()) {
    if ("aeiou".includes(character)) {
      count++;
    }
  }
  return count;
}
