# Advanced

These challenges emphasize careful invariants, edge cases, and performance. Before coding, state what each pointer, interval, or data structure represents. Include complexity and mutation behavior in your explanation.

[Read the exercise explanations](EXPLANATIONS.md) for problem descriptions, approaches, complexity, and test ideas.

## Challenges

| Challenge | Practice goal |
| --- | --- |
| [Merge intervals](mergeIntervals.js) | Sorting and interval invariants |
| [Trapping rain water](trapRainWater.js) | Two pointers and running maxima |
| [LRU cache](LRUCache.js) | Data structure design and stateful behavior |
| [Number of islands](numberOfIslands.js) | Grid traversal with BFS or DFS and connectivity rules |
| [Course schedule](courseSchedule.js) | Topological sort and cycle detection |
| [Median from a data stream](medianFromStream.js) | Two heaps and invariants under insertion |
| [Minimum window substring](minWindowSubstring.js) | Sliding window with counts |
| [Coin change](coinChange.js) | Bottom-up dynamic programming and unreachable states |
| [Token-bucket rate limiter](rateLimiter.js) | Stateful logic with an injected clock, ideal for controlled-time tests |

## QA practice

Test boundary-heavy and stateful behavior: touching intervals, monotonic heights, updates to existing cache entries, and eviction order. Then create a risk-based checkout test plan using the [QA practice guide](../QA-PRACTICE.md).
