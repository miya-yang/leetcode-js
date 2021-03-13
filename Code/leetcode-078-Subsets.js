/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]];

    const backtracking = (arr, index) => {
        if (index >= nums.length) {
            return;
        }

        for (let i = index; i < nums.length; i++) {
            let tempArr = arr.slice();
            tempArr.push(nums[i]);
            result.push(tempArr);
            backtracking(tempArr, i + 1);
        }
    }

    backtracking([], 0);
    return result;
};
// @lc code=end

