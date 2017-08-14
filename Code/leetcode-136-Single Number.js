/**
 * @param {number[]} nums
 * @return {number}
 */

// 提交通过的版本
var singleNumber = function(nums) {
    var num = {};
    for(var i = 0;i < nums.length;i++) {
        num[nums[i]] === undefined ? num[nums[i]] = nums[i] : num[nums[i]] = undefined;
    }
    for(var j in num) {
        if(num[j] !== undefined) {
            return num[j];
        }
    }
};

// 或许是更好的版本
var singleNumber2 = function(nums) {
    for(var i = 0;i < nums.length;i++) {
        nums[i] ^= nums[i-1];
    }
    return nums[nums.length-1];
};