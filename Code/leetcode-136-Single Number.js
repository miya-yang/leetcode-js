/**
 * @param {number[]} nums
 * @return {number}
 */

// 初次提交版本
var singleNumber = function (nums) {
  var num = {}
  for (var i = 0; i < nums.length; i++) {
    num[nums[i]] === undefined ? num[nums[i]] = nums[i] : num[nums[i]] = undefined
  }
  for (var j in num) {
    if (num[j] !== undefined) {
      return num[j]
    }
  }
}

// 二次提交版本
var singleNumber2 = function (nums) {
  var temp = {}
  for (var i = 0; i < nums.length; i++) {
    nums[i] in temp ? (temp[nums[i]] = true) : (temp[nums[i]] = false)
  }
  for (var i in temp) {
    if (!temp[i]) {
      return parseInt(i)
    }
  }
}

// 或许是更好的版本
var singleNumber3 = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    nums[i] ^= nums[i - 1]
  }
  return nums[nums.length - 1]
}
