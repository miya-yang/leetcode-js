/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];

    candidates.sort((a, b) => a - b);

    const backtracking = (arr, total, target, index, isUsed) => {
        if (total > target) {
            return;
        }
        if (total === target) {
            result.push(arr);
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            if (i > 0 && candidates[i] == candidates[i - 1] && !isUsed[i - 1]) {
                continue;
            }
            let tempArr = arr.slice();
            let tempIsUsed = isUsed.slice();
            tempArr.push(candidates[i]);
            tempIsUsed[i] = true;
            backtracking(tempArr, total + candidates[i], target, i + 1, tempIsUsed);
        }
    }

    backtracking([], 0, target, 0, new Array(candidates.length).fill(false));
    return result;
};
// @lc code=end

