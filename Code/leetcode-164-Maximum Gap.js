/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
    if (i > 0) {
      max = Math.max(max, nums[i] - nums[i - 1])
    }
  }
  return max
};