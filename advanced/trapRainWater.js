/**
 * Calculate how much water is held between non-negative bar heights.
 * Move the side with the smaller maximum: it determines that side's waterline.
 * Time: O(n); space: O(1).
 * @param {number[]} heights
 * @returns {number}
 */
export function trapRainWater(heights) {
  let left = 0;
  let right = heights.length - 1;
  let leftMaximum = 0;
  let rightMaximum = 0;
  let water = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      leftMaximum = Math.max(leftMaximum, heights[left]);
      water += leftMaximum - heights[left];
      left++;
    } else {
      rightMaximum = Math.max(rightMaximum, heights[right]);
      water += rightMaximum - heights[right];
      right--;
    }
  }
  return water;
}
