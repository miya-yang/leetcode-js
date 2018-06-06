/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  var total = 0
  nums.sort(function (v1, v2) {
    return v1 - v2
  })
  for (var i = 0; i < nums.length; i += 2) {
    total += nums[i]
  }
  return total
}
