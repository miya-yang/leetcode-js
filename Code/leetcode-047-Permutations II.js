/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = [];

    const backtracking = (arr, remain) => {
        if (remain.length === 0) {
            result.push(arr);
        }
        let map = {};
        for (let i = 0; i < remain.length; i++) {
            if (map[remain[i]]) {
                continue;
            }
            let arrClone = arr.slice();
            let remainClone = remain.slice();
            remainClone.splice(i, 1);
            arrClone.push(remain[i]);
            map[remain[i]] = true;
            backtracking(arrClone, remainClone);
        }
    }

    backtracking([], nums, {});
    return result;
};
// @lc code=end

