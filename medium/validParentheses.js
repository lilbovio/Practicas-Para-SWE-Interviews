/**
 * Return true when every opening bracket is closed in the correct order.
 * Only (), [], and {} are accepted; any other character makes the input invalid.
 * Time: O(n); space: O(n).
 * @param {string} text
 * @returns {boolean}
 */
export function validParentheses(text) {
  const closingToOpening = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const openings = new Set(closingToOpening.values());
  const stack = [];

  for (const character of text) {
    if (openings.has(character)) {
      stack.push(character);
    } else if (closingToOpening.has(character)) {
      if (stack.pop() !== closingToOpening.get(character)) {
        return false;
      }
    } else {
      return false;
    }
  }
  return stack.length === 0;
}
