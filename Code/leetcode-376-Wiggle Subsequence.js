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

var wiggleMaxLength2 = function(nums) {
    if (nums.length === 0 || (nums.length === 2 && nums[0] === nums[1] && nums[0] !== 0)) {
        return 0;
    }

    if (nums.length === 1) {
        return 1;
    }

    let dValues = [];
    let count = 0;
    let flag = 0;

    for (let i = 1; i < nums.length; i++) {
        dValues.push(nums[i] - nums[i - 1]);
    }

    for (let i = 0; i < dValues.length; i++) {
        const item = dValues[i];
        if (flag === 0) {
            if (item !== 0) {
                flag = item > 0 ? 1 : -1;
                count++;
            }
        } else {
            if ((item > 0 && flag === -1) || (item < 0 && flag === 1)) {
                flag *= -1;
                count++;
            } else {
                if (item !== 0) {
                    flag = item > 0 ? 1 : -1;
                }
            }
        }
    }

    return count + 1;
};