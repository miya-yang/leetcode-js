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

    const backtracking = (arr, remainArr) => {
        if (remainArr.length === 0) {
            result.push(arr);
            return;
        }
        for (let i = 1; i <= remainArr.length; i++) {
            let item = remainArr.slice(0, i);
            if (item.map((it, ind) => it === item[item.length - ind - 1]).every(it => it)) {
                // 相等，是回文数
                let tempArr = arr.slice();
                tempArr.push(item.join(''));
                backtracking(tempArr, remainArr.slice(i));
            }
        }
    }

    backtracking([], s.split(''));
    return result;
};
// @lc code=end

console.log(partition('aab'))
