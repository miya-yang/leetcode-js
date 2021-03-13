/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];

    // 判断是否为回文数
    const isPali = (str) => {
        return str === str.split('').reverse().join('');
    }

    const backtracking = (arr, index) => {
        // 判断是否遍历结束，且arr中均为回文数
        if (index >= s.length) {
            result.push(arr);
        }
        for (let i = index; i < s.length; i++) {
            let arrClone = arr.slice();
            let str = s.substring(index, i + 1);
            // 当结果是回文数时，push
            if (isPali(str)) {
                arrClone.push(str);
                backtracking(arrClone, i + 1);
            }
        }
    }

    backtracking([], 0);
    return result;
};
// @lc code=end

