# Beginner Exercise Explanations

These exercises practice basic loops, strings, arrays, maps, and input validation. For each one, try to solve the problem before reading the matching implementation. The tests show examples, but they are not a complete specification.

## [Sum an array](sumArray.js)

Return the total of all numbers. Keep a running total as you visit each number; starting at zero naturally handles an empty array.

- **Complexity:** O(n) time and O(1) extra space.
- **Test ideas:** empty array, one item, all zeroes, and a mix of positive and negative values.

## [Check a palindrome](isPalindrome.js) and [Spanish palindrome exercise](palindromo.js)

Determine whether text reads the same forward and backward. The exercises normalize case and ignore non-alphanumeric ASCII characters before comparing. The Spanish version also demonstrates explicit validation for non-string input.

- **Complexity:** O(n) time; the normalized text requires O(n) space.
- **Test ideas:** one character, punctuation-only text, mixed case, a phrase with spaces, a number inside the text, and non-string input for `esPalindromo`.
- **Compare:** `isPalindrome` uses two pointers; `esPalindromo` builds a reversed string.

## [Count vowels](countVowels.js)

Count occurrences of `a`, `e`, `i`, `o`, and `u`, regardless of case. The function requires a string and throws an error for other values.

- **Complexity:** O(n) time and O(1) extra space.
- **Test ideas:** empty string, uppercase vowels, text with no vowels, and invalid input such as `null`.

## [Count even numbers](countEven.js)

Count values divisible by two. The remainder operator works for negative even integers too, and zero is even.

- **Complexity:** O(n) time and O(1) extra space.
- **Test ideas:** empty array, only odd values, zero, and negative numbers.

## [Find duplicates with nested loops](containsDuplicate.js) and [with a Set](containsDuplicateSet.js)

Return whether any value occurs more than once. The nested-loop version compares each pair and is useful for understanding a direct solution. The `Set` version remembers values already seen and avoids repeatedly scanning the rest of the array.

- **Nested loops:** O(n²) time and O(1) extra space.
- **Set:** O(n) expected time and O(n) extra space.
- **Test ideas:** empty array, all unique, duplicate at the beginning, and duplicate at the end.
- **Compare:** both functions return the same answer; explain the time/space tradeoff.

## [Reverse a string](reverseString.js)

Reverse the characters with two pointers that swap the leftmost and rightmost items, then move toward the center. JavaScript strings cannot be changed in place, so the implementation first copies their Unicode code points into an array. `null` is passed through unchanged.

- **Complexity:** O(n) time and O(n) space.
- **Test ideas:** empty string, one character, even and odd lengths, punctuation, and an emoji.

## [Find the first duplicate](firstDuplicate.js)

Return the value whose second occurrence appears earliest while scanning from left to right. A `Set` tracks values that have already appeared.

- **Complexity:** O(n) expected time and O(n) space.
- **Test ideas:** no duplicates, empty array, repeated same value, and two different values that each repeat.

## [Find the first unique character](firstUniqueChar.js) and [first non-repeating character](firstNonRepeatingChar.js)

Return the earliest character that occurs exactly once, or `null` if there is none. Count character frequencies first, then scan the original text to preserve its order.

- **Complexity:** O(n) time and O(k) space, where k is the number of distinct characters.
- **Test ideas:** unique first character, unique character in the middle, all repeated, empty input, and repeated characters before the answer.
- **Compare:** these files are alternative implementations of the same idea.

## [Validate an age](edad.js)

Accept an integer age from 18 through 65, inclusive. Non-number values and `NaN` throw an error; decimals and out-of-range ages return `false`.

- **Complexity:** O(1) time and O(1) space.
- **Test ideas:** just below and above each boundary, both valid endpoints, decimal, negative, `null`, and `NaN`.
- **QA lesson:** explicitly distinguish invalid input from a valid value that fails the business rule.

## [FizzBuzz](fizzBuzz.js)

Print the numbers from 1 to n, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz". The order of the checks matters: test for multiples of 15 first, or every multiple of 15 will match the "Fizz" branch.

- **Complexity:** O(n) time and O(n) space for the result.
- **Test ideas:** n = 0, n = 5, a multiple of 15 specifically, and checking the total length of the output.
- **QA lesson:** the bug that ordering causes only appears at one kind of input, so a test must target it on purpose.

## [Valid anagram](validAnagram.js)

Decide whether two strings contain the same characters with the same counts. Count the first string's characters in a map, then subtract for each character of the second. The implementation compares Unicode code points without normalizing them, so a precomposed `é` and `e` followed by a combining accent are different characters. It is also case-sensitive by design.

- **Complexity:** O(n) time and O(k) space, where k is the number of distinct characters.
- **Test ideas:** rearranged letters, same letters with different counts, different lengths, empty strings, uppercase versus lowercase, and accented characters.
- **Decision to state out loud:** whether "Listen" and "silent" should count as anagrams. The contract decides, not the algorithm.

## [Remove duplicates from a sorted array](removeDuplicatesSorted.js)

Remove adjacent duplicates in place and return how many unique values remain. A read pointer scans every value, and a write pointer marks where the next kept value goes. Compare each value with the last kept value, not the previous input value.

- **Complexity:** O(n) time and O(1) extra space.
- **Contract:** only the first k slots matter after the call; later slots may still hold old values.
- **Test ideas:** no duplicates, all equal values, duplicates at both ends, empty input, and a single value.

## [Second largest](secondLargest.js)

Return the second-largest distinct value, or `null` when there isn't one. Track the largest and second-largest values in one pass. The tricky case is a repeated maximum: `[2, 2, 1]` returns `1`, not `2`.

- **Complexity:** O(n) time and O(1) extra space.
- **Test ideas:** repeated maximum, all values equal, one value, empty input, negative numbers, and a maximum at both ends.
- **QA lesson:** a single-pass solution is easy to test only if you write the expected answer for each tricky case first.

## A testing routine for this level

For each function, write down its input and output contract before coding. Add one normal case, one boundary case, and one case likely to expose an incorrect assumption. Then run the matching `.test.js` file and explain what each assertion protects.
