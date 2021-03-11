/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    const backtracking = (start, arr) => {
        if (arr.length === k) {
            result.push(arr);
            return;
        }
        for (let i = start; i <= n; i++) {
            let arrData = arr.concat([i]);
            backtracking(i + 1, arrData);
        }
    }
    backtracking(1, []);
    return result;
};
// @lc code=end

