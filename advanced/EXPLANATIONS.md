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

## [Number of islands](numberOfIslands.js)

Count connected regions of land in a grid. When you find an unvisited land cell, start a new island and explore all land connected to it horizontally or vertically. Each cell is visited once. The implementation uses an explicit stack, so a large grid cannot overflow the call stack.

- **Complexity:** O(rows × cols) time and space.
- **Invariant:** each island is counted exactly once, because every cell in it is marked before the scan continues.
- **Test ideas:** one large island, several islands, diagonal-only contact, a single cell, an empty grid, and checking that the input grid is unchanged.

## [Course schedule](courseSchedule.js)

Decide whether all courses can be finished when some have prerequisites. Model prerequisites as a directed graph and repeatedly take courses with no unfinished prerequisites (Kahn's algorithm). If some courses never become available, they form a cycle.

- **Complexity:** O(V + E) time and space, where V is courses and E is prerequisite pairs.
- **Test ideas:** a simple chain, a two-course cycle, a self-prerequisite, no prerequisites, a cycle separated from the rest, and zero courses.
- **Direction check:** `[a, b]` means `b` must come before `a`. Reversing the direction gives the same answer for cycle detection but a different topological order.

## [Median from a data stream](medianFromStream.js)

Keep the median of the numbers added so far. Split them into two heaps: a max-heap for the smaller half and a min-heap for the larger half. Keep the smaller half the same size as the larger, or one bigger. The median is then the top of the smaller heap, or the average of both tops when the sizes are equal.

- **Complexity:** O(log n) per insertion and O(1) per median lookup; O(n) space.
- **Invariant:** every value in the smaller half is less than or equal to every value in the larger half, and the sizes differ by at most one.
- **Test ideas:** one value, two values, odd and even counts, duplicates, negatives, and a comparison against a sorted brute-force median after every insertion.

## [Minimum window substring](minWindowSubstring.js)

Find the shortest substring of `s` that contains every character of `t`, including repeated characters. Expand the right edge until the window is valid, then shrink the left edge while it remains valid, recording the best window seen. Track how many required characters are currently satisfied, so each step is O(1).

- **Complexity:** O(|s| + |t|) time and space.
- **Invariant:** the counts in the window match the need for every satisfied character.
- **Test ideas:** the classic example, a single character, repeated characters that are not present enough, an empty target, an empty source, and ties.

## [Coin change](coinChange.js)

Return the fewest coins that add up to an amount, or `-1` if no combination works. Build the answer for each smaller amount first: the best for `a` is one more than the best for `a - coin`, minimized over all coins.

- **Complexity:** O(amount × coins) time and O(amount) space.
- **Why not greedy:** taking the largest coin first fails for some sets. Test a set where greedy is not optimal.
- **Test ideas:** amount zero, no solution, reuse of a single coin, an empty coin list, and an optimal answer that is not greedy.

## [Token-bucket rate limiter](rateLimiter.js)

Allow a burst of requests up to `capacity`, then allow a steady rate of `refillPerSecond`. Each request takes tokens from the bucket; when there are not enough tokens, the request is rejected and takes nothing. The clock is passed in, so tests can move time forward instead of waiting.

- **Complexity:** O(1) per request.
- **Testing technique:** inject a clock object you can advance by hand. Avoid `Date.now()` in tests, because the results would depend on real time.
- **Test ideas:** an initial burst, a refill of exactly one token, a partial refill that is still too small, capacity limits after long idle time, a request larger than capacity, and invalid configuration.

## A testing routine for this level

Test both outcomes and state transitions. For stateful code, write down the state after every action in a sequence. For optimized pointer algorithms, include inputs that keep one pointer stationary for several iterations and explain why the invariant still holds.
