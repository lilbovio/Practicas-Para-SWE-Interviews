# Beginner

Start here if you are learning JavaScript problem solving or writing unit tests. Focus on tracing each loop, describing edge cases, and writing small, readable assertions.

[Read the exercise explanations](EXPLANATIONS.md) for problem descriptions, approaches, complexity, and test ideas.

## Challenges

| Challenge | Practice goal |
| --- | --- |
| [Sum an array](sumArray.js) | Accumulators and empty input |
| [Palindrome check](isPalindrome.js) | String normalization and two pointers |
| [Count vowels](countVowels.js) | Iteration and case-insensitive matching |
| [Count even numbers](countEven.js) | Loops, modulo, and boundary cases |
| [Contains duplicate](containsDuplicate.js) | Compare a brute-force approach with a [Set](containsDuplicateSet.js) |
| [Reverse a string](reverseString.js) | Two pointers and immutable strings |
| [First duplicate](firstDuplicate.js) | Tracking values already visited |
| [First unique character](firstUniqueChar.js) | Frequency maps |
| [First non-repeating character](firstNonRepeatingChar.js) | A second frequency-map implementation |
| [Age validation](edad.js) | Input validation and boundary testing |
| [Palindrome (Spanish)](palindromo.js) | Normalization and validation |

The duplicate-check exercises include both a nested-loop implementation and a faster `Set` implementation so you can compare their complexity. Some original exercises and tests are in Spanish.

Each implementation has a matching `.test.js` file. Before reading a solution, write down expected results for empty, smallest, and ordinary inputs.

## QA practice

For each function, identify its input domain, one boundary case, and one case likely to reveal a faulty implementation. Use the [QA practice guide](../QA-PRACTICE.md) to practice test design for a sign-up form.
