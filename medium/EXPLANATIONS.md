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

## [Binary search](binarySearch.js)

Find a value in a sorted array, or the first position where a value could be inserted. Keep the answer inside a half-open range `[low, high)`. If the middle value is too small, the answer lies to its right; otherwise the middle may be the answer, so keep it inside the range. The helper `firstIndexAtLeast` is the reusable form, and `binarySearch` checks whether that position holds the target.

- **Complexity:** O(log n) time and O(1) extra space.
- **Invariant:** every index below `low` is too small; `high` is either the answer or past it.
- **Test ideas:** target at the first and last positions, absent below, inside, and above the range, duplicates, empty array, and one element.

## [Top K frequent](topKFrequent.js)

Return the k values that appear most often. Count frequencies, then place each value in a bucket indexed by its count. Read the buckets from highest count down until you have k values.

- **Complexity:** O(n) time and O(n) space.
- **Contract:** the order of the result and the choice among tied values are not specified, so tests should sort the output before comparing.
- **Test ideas:** k larger than the number of unique values, k = 0, negative values, a single value, and empty input. For ties, any choice of the tied values is correct, so check the membership of the result rather than its exact order.

## [Product of array except self](productExceptSelf.js)

Return, for each position, the product of all other values, without using division. A forward pass stores the product of everything to the left; a backward pass multiplies in everything to the right.

- **Complexity:** O(n) time and O(1) extra space, not counting the output array.
- **Why no division:** dividing fails when a value is zero.
- **Test ideas:** one zero, two zeros, negative numbers, a single value, empty input, and checking that the input is unchanged.
- **Gotcha:** multiplying a negative number by zero gives `-0`, which `toEqual` treats as different from `0`. The test normalizes the sign for this reason.

## [Subarray sum equals K](subarraySumK.js)

Count contiguous subarrays whose sum is `k`. A subarray from index i+1 to j sums to `k` when the prefix sum at j minus `k` was already seen. A map counts how often each prefix sum has appeared, starting with `0` once.

- **Complexity:** O(n) time and O(n) space.
- **Why not a sliding window:** negative numbers can shrink a window's sum, so the window cannot grow and shrink predictably.
- **Test ideas:** overlapping matches, negative values, zero-sum subarrays, no match, a single element, and empty input.

## [Min stack](minStack.js)

A stack where `getMin` runs in O(1). Each stored entry keeps the value and the smallest value at or below it, so popping restores the previous minimum without scanning.

- **Complexity:** O(1) for every operation; O(n) space.
- **Contract:** `pop`, `top`, and `getMin` throw a `RangeError` on an empty stack.
- **Test ideas:** popping the minimum, a repeated minimum, negative values, reading `top` without removing it, and reading from an empty stack.

## [Reverse a linked list and detect a cycle](reverseLinkedList.js)

Reverse a singly linked list by repointing each node at the previous one. Detect a cycle with two pointers: a fast pointer moves two nodes for every one node of a slow pointer. If the list loops, the pointers eventually meet.

- **Complexity:** O(n) time and O(1) extra space for both operations.
- **Test ideas:** empty list, one node, several nodes, a cycle back to the head, a cycle to a middle node, and a node that points to itself.
- **Testing note:** build cyclic lists in the test by hand. Printing a cyclic list will never finish, so the helper stops after a limit.

## [Debounce](debounce.js)

Delay a function until calls stop for `waitMs`. Each new call cancels the pending timer and schedules a new one with the latest arguments. The returned function also has `cancel()`.

- **Complexity:** O(1) per call.
- **Testing technique:** use `vi.useFakeTimers()` and `vi.advanceTimersByTime()` to move time without waiting. Restore real timers after each test.
- **Test ideas:** calls within the window collapse into one, the function fires exactly at `waitMs`, a call after the window fires again, `cancel` drops a pending call, and cancel with nothing pending is safe.

## A testing routine for this level

Compare each optimized approach with a straightforward alternative. Test cases that move the algorithm's window or stack boundary, then describe why the result remains correct after each iteration. For API-shaped problems, also define the no-result contract explicitly.
