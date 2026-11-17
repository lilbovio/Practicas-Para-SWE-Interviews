/**
 * Merge overlapping intervals and return a new array sorted by start.
 * Touching endpoints count as overlapping, e.g. [1, 3] and [3, 5].
 * Time: O(n log n); space: O(n) for the returned intervals.
 * @param {Array<[number, number]>} intervals
 * @returns {Array<[number, number]>}
 */
export function mergeIntervals(intervals) {
  if (intervals.length === 0) {
    return [];
  }

  const sorted = intervals
    .map(([start, end]) => [start, end])
    .sort((a, b) => a[0] - b[0]);
  const merged = [sorted[0]];

  for (let index = 1; index < sorted.length; index++) {
    const current = sorted[index];
    const previous = merged[merged.length - 1];
    if (current[0] <= previous[1]) {
      previous[1] = Math.max(previous[1], current[1]);
    } else {
      merged.push(current);
    }
  }
  return merged;
}
