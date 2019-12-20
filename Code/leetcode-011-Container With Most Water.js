/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0,
    j = height.length - 1,
    max = 0
  while (true) {
    if (i === j) {
      return max
    }
    max = max > Math.min(height[i], height[j]) * Math.abs(j - i) ? max : Math.min(height[i], height[j]) * Math.abs(j - i)
    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }
};