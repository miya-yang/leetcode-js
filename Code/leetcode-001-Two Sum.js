/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 初次提交版本
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = parseInt(i + 1); j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// 二次提交版本
var twoSum2 = function (nums, target) {
    var temp = {};
    for (var i = 0; i < nums.length; i++) {
        // 临时变量中不存在以该配对值为key的对象
        if (!(target - nums[i] in temp)) {
            temp[nums[i]] = i;
        } else {
            return [temp[target - nums[i]], i];
        }
    }
};

// 或许是更好的版本
var twoSum3 = function (nums, target) {
    var temp = {};
    for (var i = 0; i < nums.length; i++) {
        if (temp[target - nums[i]] !== undefined) {
            return [temp[target - nums[i]], i];
        }
        if (!temp[nums[i]]) {
            temp[nums[i]] = i;
        }
    }
};