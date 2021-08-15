/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
  let index = 0;
  let range = 0;
  const len = nums.length;
  while(range >= index) {
      range = Math.max(range, nums[index] + index);
      index++;
      if (range >= len - 1) {
          return true;
      }
  }
  return false;
};