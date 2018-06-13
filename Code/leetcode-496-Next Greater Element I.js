/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function (findNums, nums) {
  let results = []
  for (let i of findNums) {
    for (let j = nums.indexOf(i); j < nums.length; j++) {
      if (nums[j + 1] > i) {
        results.push(nums[j + 1])
        break
      } else if (j + 1 === nums.length) {
        results.push(-1)
        break
      }
    }
  }
  return results
}
