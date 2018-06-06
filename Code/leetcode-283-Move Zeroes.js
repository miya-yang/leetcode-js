/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var i = 0,
    j = 0
  do {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    } else {
      i++
    }
    j++
  } while (j < nums.length)
}
