/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var obj = {}
  for (var i = 0; i < nums.length; i++) {
    if (typeof obj[nums[i]] === 'undefined') {
      obj[nums[i]] = true
    } else {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}
