/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        if (target === matrix[i][0] || target === matrix[i][n - 1]) {
            return true;
        }
        if (target > matrix[i][0] && target < matrix[i][n - 1]) {
            let left = 0;
            let right = n - 1;
            while (left < right) {
                let cur = Math.floor(left + right);
                let val = matrix[i][cur];
                if (target === val) {
                    return true;
                } else if (target > val) {
                    left = cur;
                } else {
                    right = cur - 1;
                }
            }
        }
    }
    return false;
};