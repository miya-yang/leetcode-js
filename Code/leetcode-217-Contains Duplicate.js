/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var temp = {};
  for (var i = 0; i < nums.length; i++) {
    if (temp[nums[i]] === undefined) {
      temp[nums[i]] = true;
    } else {
      return true;
    }
  }
  return false;
};