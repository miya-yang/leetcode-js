/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [];
    const backtracking = (arr, remain, count, start) => {
        if (count === 0) {
            if (remain === 0) {
                result.push(arr);
            }
            return;
        }
        for (let i = start; i >= 1; i--) {
            let arrData = arr.concat([i]);
            backtracking(arrData, remain - i, count - 1, i - 1);
        }
    }
    backtracking([], n, k, 9);
    return result;
};
// @lc code=end

