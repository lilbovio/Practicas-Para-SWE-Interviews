# QA Practice Guide

Use these activities alongside the coding challenges. Practice explaining not only what you tested, but why those cases matter.

## Test design checklist

For any feature, consider:

- **Happy path:** Does a valid, typical input work?
- **Boundaries:** What happens at minimum, maximum, empty, or single-item values?
- **Equivalence classes:** Which inputs should behave the same way?
- **Invalid input:** Is it rejected clearly, or handled according to the contract?
- **State and sequence:** Does behavior depend on earlier actions?
- **Regression:** Could a fix break a previously working behavior?

## Beginner exercise: sign-up form

Design test cases for a form with name, email, password, and a submit button. Decide what should happen for blank fields, malformed email, short passwords, leading/trailing whitespace, and successful submission. For each case, write setup, action, expected result, and priority.

## Medium exercise: paginated search API

Test a search endpoint that accepts `query`, `page`, and `pageSize`. Cover no results, many results, invalid pagination, special characters, repeated requests, and a failure from the backing service. Include checks for response status, schema, ordering, and whether the returned page has the expected records.

## Advanced exercise: checkout workflow

Build a risk-based test plan for a checkout flow with inventory, discounts, payment, and order confirmation. Include retries, duplicate submissions, price changes, unavailable inventory, payment failure, and recovery after a partial failure. Identify which cases belong at unit, API/integration, and end-to-end levels.

## Mutation check: why did the tests miss it?

Start with `medium/makeStringGood.js`. Its tests pass, yet the function also cancels pairs such as `0P` and ` @`, because it compares char codes that differ by 32 rather than checking for letters. Write the input and expected result that would expose the bug, then add it as a test. Explain which assumption the original test cases shared and why they did not cover it. Then describe a general habit that prevents this kind of gap, such as listing the input domain before writing any tests.

## Flaky test diagnosis

A test waits 100 ms with `setTimeout` for a notification to appear, then asserts it exists. It passes on your laptop and fails in CI about one run in five. Describe the most likely cause, the evidence you would collect (timings, logs, CI machine load), and two ways to fix it. Good answers replace the fixed delay with a condition that is polled or awaited, or inject a fake clock, and never simply increase the delay.

## Hermetic UI test exercise

The repository's Playwright tests visit a live website, so they fail offline or when that site changes. Design a test for a small sign-up form served from a local HTML fixture, so the test controls its own data. Cover a valid submission, a blank required field, and a malformed email. Write each test's setup, action, and expected result before you write the code, and explain which parts of the test would still depend on the environment.

## Exploratory testing charter

Plan a 30-minute session for the sign-up form above. Write a charter with the mission, the area to explore, the data you will try, and the risks you are looking for. Record what you observed during the session, including anything surprising that is not yet a bug. If you find a defect, write it with the bug report template below.

## Bug report template

```text
Title:
Environment/build:
Preconditions:
Steps to reproduce:
Expected result:
Actual result:
Frequency:
Severity / impact:
Evidence (logs, screenshot, request ID):
```

Keep reports reproducible and factual. Separate severity (impact) from priority (when it should be fixed).

## Interview prompts

- How would you test a function that returns the first duplicate in a list?
- When would you prefer a few API tests over many end-to-end UI tests?
- How do you choose test data for a boundary-heavy feature?
- What information makes a bug report actionable?
- A test passes locally but fails in CI. What would you investigate?
