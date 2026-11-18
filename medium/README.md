# Medium

These challenges introduce data structures and strategies that reduce repeated work. Explain why the chosen structure fits the problem and compare its complexity with a simple brute-force approach.

[Read the exercise explanations](EXPLANATIONS.md) for problem descriptions, approaches, complexity, and test ideas.

## Challenges

| Challenge | Practice goal |
| --- | --- |
| [Two sum](twoSum.js) | Hash maps and one-pass lookup |
| [Add up numbers](addUpNumbers.js) | A second two-sum implementation with a `null` no-match result |
| [Valid brackets](validParentheses.js) | Stack and matching pairs |
| [Longest unique substring](longestUniqueSubstring.js) | Sliding window |
| [K-difference pairs](k-diffInPairs.js) | Counting unique pairs with a frequency map |
| [Make string good](makeStringGood.js) | Stack-based cancellation of adjacent characters |
| [Binary search](binarySearch.js) | Off-by-one invariants and the "first index at least" variant |
| [Top K frequent](topKFrequent.js) | Frequency maps and bucket sort |
| [Product except self](productExceptSelf.js) | Prefix and suffix passes without division |
| [Subarray sum equals K](subarraySumK.js) | Prefix sums with a map, including negative values |
| [Min stack](minStack.js) | Stack design with O(1) minimum tracking |
| [Reverse a linked list and detect a cycle](reverseLinkedList.js) | Pointer manipulation and Floyd's fast/slow pointers |
| [Debounce](debounce.js) | Timers in JavaScript, tested with fake timers |

## QA practice

For each implementation, test duplicates, empty input, and input that fails early or late. Then practice the paginated API test-plan activity in the [QA practice guide](../QA-PRACTICE.md).
