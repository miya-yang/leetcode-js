/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let arr = new Array(m);
    for (let i = 0; i < m; i++) {
        arr[i] = new Array(n);
    }
    arr[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;
    for (let i = 1; i < m; i++) {
        arr[i][0] = obstacleGrid[i][0] === 0 ? arr[i - 1][0] : 0;
    }
    for (let i = 1; i < n; i++) {
        arr[0][i] = obstacleGrid[0][i] === 0 ? arr[0][i - 1] : 0;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[i][j] = obstacleGrid[i][j] === 0 ? arr[i - 1][j] + arr[i][j - 1] : 0;
        }
    }
    return arr[m - 1][n - 1];
};
