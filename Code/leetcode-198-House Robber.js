/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = i > 1 ? Math.max(nums[i] + dp[i - 2], dp[i - 1]) : Math.max(nums[i], dp[i - 1]);
    }
    return nums.length === 1 ? nums[0] : Math.max(dp[dp.length - 1], dp[dp.length - 2]);
};
