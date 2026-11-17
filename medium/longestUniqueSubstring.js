/**
 * Return the length of the longest substring with no repeated characters.
 * Iterate Unicode code points so supplementary characters count as one.
 * Time: O(n); space: O(min(n, character set size)).
 * @param {string} text
 * @returns {number}
 */
export function longestUniqueSubstring(text) {
  const characters = [...text];
  const lastSeenAt = new Map();
  let windowStart = 0;
  let longest = 0;

  for (let index = 0; index < characters.length; index++) {
    const previousIndex = lastSeenAt.get(characters[index]);
    if (previousIndex !== undefined && previousIndex >= windowStart) {
      windowStart = previousIndex + 1;
    }
    lastSeenAt.set(characters[index], index);
    longest = Math.max(longest, index - windowStart + 1);
  }
  return longest;
}
