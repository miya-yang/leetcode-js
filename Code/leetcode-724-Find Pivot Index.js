/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = 0
  let left = 0

  for (let item of nums) {
    sum += item
  }
  for (let i = 0; i < nums.length; i++) {
    if (left === sum - left - nums[i]) {
      return i
    }
    left += nums[i]
  }
  return -1
}