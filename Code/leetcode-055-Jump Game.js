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

// 解法二
var canJump = function(nums) {
    let target = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] + i >= target) {
            target = i;
        }
    }

    return target === 0;
};