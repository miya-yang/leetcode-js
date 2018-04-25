/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  var max = 0,
    currentMax = 0;
  nums.forEach(function (item, index, array) {
    var temp = currentMax;
    temp += item;
    // 遇到 0
    if (temp === currentMax) {
      if (currentMax > max) {
        max = currentMax;
      }
      currentMax = 0;
    } else {
      currentMax++;
    }
  });
  return currentMax > max ? currentMax : max;
};