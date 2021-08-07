/**
 * @param {number[]} nums
 * @return {number}
 */
 var wiggleMaxLength = function(nums) {
  let dvalues = [];
  let result = 0;
  let flag = null;

  if (nums.length === 1) {
      return 1;
  }
  if (nums.length === 2 && nums[0] !== nums[1]) {
      return 2;
  }

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
          dvalues.push(1);
      } else if (nums[i] < nums[i - 1]) {
          dvalues.push(-1);
      } else {
          dvalues.push(0);
      }
  }

  dvalues.forEach(item => {
      if (flag === null && item !== 0) {
          flag = item === 1;
      }
      if ((flag && item === 1) || (!flag && item === -1)) {
          result++;
          flag = !flag;
      }
  });

  return ++result;
};