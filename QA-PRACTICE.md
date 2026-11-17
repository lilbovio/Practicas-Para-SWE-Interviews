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
