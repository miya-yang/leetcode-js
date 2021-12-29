/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var pathArrs = new Array(m);
    for (let i = 0; i < m; i++) {
        pathArrs[i] = new Array(n);
    }
    for (let i = 0; i < m; i++) {
        pathArrs[i][0] = 1;
    }
    for (let i = 0; i < n; i++) {
        pathArrs[0][i] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            pathArrs[i][j] = pathArrs[i - 1][j] + pathArrs[i][j - 1];
        }
    }

    return pathArrs[m - 1][n - 1];
};
// @lc code=end

