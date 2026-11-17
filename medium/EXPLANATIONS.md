# Medium Exercise Explanations

These exercises introduce maps, sets, stacks, and sliding windows. The common goal is to avoid repeating work. Try to state the invariant—the fact that must remain true—before implementing each algorithm.

## [Two sum](twoSum.js) and [add up numbers](addUpNumbers.js)

Find two distinct indices whose values add to a target. Scan once and store previously seen values in a map; for each number, look for the complement needed to reach the target.

- **Complexity:** O(n) expected time and O(n) space.
- **Important detail:** check for the complement before storing the current value, so one array position cannot be used twice.
- **Return convention:** `twoSum` returns `[]` when no pair exists; `addUpNumbers` returns `null`. Both return an index pair when successful.
- **Test ideas:** duplicate values, negative numbers, no solution, empty input, and confirming that the input array is unchanged.

## [Valid brackets](validParentheses.js)

Check whether every opening bracket is closed by the matching type in last-in, first-out order. A stack holds unmatched opening brackets; each closing bracket must match the top item.

- **Complexity:** O(n) time and O(n) space.
- **Test ideas:** nested types, wrong order, early closing bracket, leftover opening bracket, empty input, and unexpected characters.

## [Longest unique substring](longestUniqueSubstring.js)

Find the length of the longest contiguous substring with no repeated characters. A sliding window tracks the current valid range, while a map remembers the last position of each character.

- **Complexity:** O(n) time and O(k) space, where k is the number of distinct characters encountered.
- **Invariant:** the current window contains no duplicates.
- **Test ideas:** all unique, all identical, a repeat inside the window, a repeat before the window, empty input, and supplementary Unicode characters.

## [K-difference pairs](k-diffInPairs.js)

Count unique value pairs whose absolute difference is `k`. A frequency map avoids counting the same value pair multiple times. When `k` is zero, a pair exists only when a value occurs at least twice; negative `k` produces zero pairs.

- **Complexity:** O(n) expected time and O(n) space.
- **Test ideas:** duplicates with `k = 0`, no pairs, empty input, negative `k`, and multiple occurrences that should still count as one unique pair.

## [Make a string good](makeStringGood.js)

Repeatedly remove adjacent copies of the same ASCII letter in opposite cases, such as `aA` or `Bb`, and return the final length. A stack allows a newly exposed pair to be checked as soon as the previous character is removed.

- **Complexity:** O(n) time and O(n) space.
- **Test ideas:** no cancellation, a pair at the end, several cancellations that cascade, empty input, and characters that are not opposite-case versions of one another.

## A testing routine for this level

Compare each optimized approach with a straightforward alternative. Test cases that move the algorithm's window or stack boundary, then describe why the result remains correct after each iteration. For API-shaped problems, also define the no-result contract explicitly.
