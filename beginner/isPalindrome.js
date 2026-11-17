/**
 * Check whether text reads the same forward and backward.
 * Ignore letter case and non-alphanumeric characters.
 * Time: O(n); space: O(n) for the normalized text.
 * @param {string} text
 * @returns {boolean}
 */
export function isPalindrome(text) {
  const normalized = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = normalized.length - 1;

  while (left < right) {
    if (normalized[left] !== normalized[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
