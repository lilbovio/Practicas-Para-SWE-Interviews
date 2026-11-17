# SWE and QA Interview Practice

A JavaScript learning collection for software engineering and quality assurance interns. Work through the challenges in order, write your own tests, and compare your solution with the included examples.

## Learning paths

- [Beginner](beginner/README.md): loops, arrays, strings, and foundational test cases.
- [Medium](medium/README.md): hash maps, stacks, sliding windows, and stronger test design.
- [Advanced](advanced/README.md): interval processing, two-pointer optimization, and data structures.
- [QA practice guide](QA-PRACTICE.md): test planning, bug reports, risk analysis, and interview exercises.

Each level has problem descriptions, documented JavaScript implementations, and Vitest test files. Try each problem before reading its implementation. Use the test cases as examples, then add cases of your own.

## Run the tests

Requires Node.js and npm.

```sh
npm install
npm test
```

Run one level or one test file:

```sh
npx vitest run beginner
npx vitest run medium/twoSum.test.js
```

## Suggested practice routine

1. Restate the problem and clarify input/output expectations.
2. Write down normal, boundary, and invalid-input cases before coding.
3. Implement a straightforward solution, then consider time and space complexity.
4. Run the tests, add a case that could break your solution, and explain your tradeoffs.
5. Review the QA guide and practice explaining how you would test a real feature.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the exercise and test conventions.
