/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let arr = nums.filter(item => item > 0)
  arr.sort((a, b) => a - b)
  if (arr[0] !== 1) {
    return 1
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] + 1) {
      return arr[i - 1] + 1
    }
  }
  return arr[arr.length - 1] + 1
};