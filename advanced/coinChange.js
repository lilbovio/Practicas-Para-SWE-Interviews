/**
 * Return the fewest coins needed to make amount, or -1 if it cannot be made.
 * Coins may be reused. Bottom-up dynamic programming: best[a] is the minimum
 * number of coins for amount a, built from best[a - coin] + 1 for each coin.
 * Time: O(amount * coins.length); space: O(amount).
 * @param {number[]} coins positive integer denominations
 * @param {number} amount non-negative integer
 * @returns {number}
 */
export function coinChange(coins, amount) {
    if (!Number.isInteger(amount) || amount < 0) {
        throw new RangeError("amount must be a non-negative integer");
    }
    const best = new Array(amount + 1).fill(Infinity);
    best[0] = 0;

    for (let target = 1; target <= amount; target++) {
        for (const coin of coins) {
            if (coin <= target && best[target - coin] + 1 < best[target]) {
                best[target] = best[target - coin] + 1;
            }
        }
    }
    return best[amount] === Infinity ? -1 : best[amount];
}
