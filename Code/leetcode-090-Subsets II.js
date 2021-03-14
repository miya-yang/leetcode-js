/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = [[]];
    let map = {};

    const backtracking = (arr, remain) => {
        for (let i = 0; i < remain.length; i++) {
            let item = arr.concat(remain.slice(i, i + 1));
            if (map[item.join(',')]) {
                continue;
            }
            map[item.join(',')] = true;
            result.push(item);
            backtracking(item, remain.slice(i + 1));
        }
    }

    nums.sort((a, b) => a - b);
    backtracking([], nums);
    return result;
};
// @lc code=end

