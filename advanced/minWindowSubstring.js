/**
 * Return the shortest substring of s that contains every character of t,
 * counting repeats (so "aa" needs two a's). Return "" when no window exists
 * or when t is empty. If several windows tie, the leftmost one is returned.
 * Sliding window: expand the right edge until the window is valid, then shrink
 * the left edge as far as it stays valid, recording the best window seen.
 * Characters are Unicode code points, so an emoji is one character in both strings.
 * Time: O(|s| + |t|); space: O(|s| + |t|).
 * @param {string} s
 * @param {string} t
 * @returns {string}
 */
export function minWindow(s, t) {
    const source = [...s];
    const target = [...t];
    if (target.length === 0 || source.length < target.length) {
        return "";
    }

    const needed = new Map();
    for (const character of target) {
        needed.set(character, (needed.get(character) || 0) + 1);
    }

    const window = new Map();
    let satisfied = 0; // distinct characters whose count in the window meets the need
    let bestStart = 0;
    let bestLength = Infinity;
    let left = 0;

    for (let right = 0; right < source.length; right++) {
        const added = source[right];
        window.set(added, (window.get(added) || 0) + 1);
        if (needed.has(added) && window.get(added) === needed.get(added)) {
            satisfied++;
        }

        while (satisfied === needed.size) {
            if (right - left + 1 < bestLength) {
                bestStart = left;
                bestLength = right - left + 1;
            }
            const removed = source[left];
            window.set(removed, window.get(removed) - 1);
            if (needed.has(removed) && window.get(removed) < needed.get(removed)) {
                satisfied--;
            }
            left++;
        }
    }

    return bestLength === Infinity ? "" : source.slice(bestStart, bestStart + bestLength).join("");
}
