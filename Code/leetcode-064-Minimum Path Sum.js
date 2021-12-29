/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let arr = new Array(m);
    for (let i = 0; i < m; i++) {
        arr[i] = new Array(n);
    }
    arr[0][0] = grid[0][0];
    for (let i = 1; i < m; i++) {
        arr[i][0] = arr[i - 1][0] + grid[i][0];
    }
    for (let i = 1; i < n; i++) {
        arr[0][i] = arr[0][i - 1] + grid[0][i];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[i][j] = grid[i][j] + Math.min(arr[i - 1][j], arr[i][j - 1]);
        }
    }
    return arr[m - 1][n - 1];
};
