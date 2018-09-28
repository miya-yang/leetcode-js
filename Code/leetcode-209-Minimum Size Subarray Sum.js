/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let minLen = 0
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum >= s) {
        minLen = minLen === 0 ? minLen = j - i + 1 : Math.min(j - i + 1, minLen)
        break
      }
    }
  }
  return minLen
}