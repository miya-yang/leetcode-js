/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];

    const backtracking = (candidates, arr, total, target, start) => {
        if (total > target) {
            return;
        }
        if (total === target) {
            result.push(arr);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            let tempArr = arr.slice();
            tempArr.push(candidates[i]);
            backtracking(candidates, tempArr, total + candidates[i], target, i);
        }
    }

    backtracking(candidates, [], 0, target, 0);
    return result;
};
// @lc code=end

