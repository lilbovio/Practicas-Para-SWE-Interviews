# Advanced Exercise Explanations

These exercises focus on invariants, mutation, and state. Before coding, explain what each pointer or data structure represents and identify the edge cases that could invalidate the approach.

## [Merge intervals](mergeIntervals.js)

Combine all overlapping ranges and return them ordered by start. Sort a copy of the input, then compare each interval with the last merged interval. If they overlap—or touch at an endpoint—extend the last result; otherwise start a new result.

- **Complexity:** O(n log n) time for sorting and O(n) space for the sorted/returned intervals.
- **Mutation:** the input intervals are copied before sorting and merging.
- **Test ideas:** empty input, unsorted input, nested ranges, disjoint ranges, equal endpoints, and confirming the input remains unchanged.

## [Trapping rain water](trapRainWater.js)

Given non-negative bar heights, calculate how much water remains between the bars. Two pointers move inward while tracking the tallest bar seen from each side. The shorter side determines the water level that can be resolved next.

- **Complexity:** O(n) time and O(1) extra space.
- **Test ideas:** fewer than three bars, flat bars, increasing/decreasing heights, a single basin, and multiple basins.
- **Invariant:** water at a position is bounded by the shorter of its left and right maximum heights.

## [LRU cache](LRUCache.js)

Build a fixed-capacity cache that evicts the least recently used entry. JavaScript `Map` preserves insertion order: when a key is read or updated, delete and reinsert it to make it most recent. When capacity is exceeded, remove the first key.

- **Complexity:** O(1) average time for `get` and `set`; O(capacity) space.
- **Contract:** capacity must be a positive integer; missing keys return `-1`.
- **Test ideas:** missing keys, reading to update recency, updating an existing key, eviction order, capacity one, and invalid capacities.

## A testing routine for this level

Test both outcomes and state transitions. For stateful code, write down the state after every action in a sequence. For optimized pointer algorithms, include inputs that keep one pointer stationary for several iterations and explain why the invariant still holds.
