/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let middle = 0

  while (left <= right) {
    middle = Math.floor((left + right) / 2)
    if (nums[middle] === target) {
      return middle
    } else if (nums[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return -1
}