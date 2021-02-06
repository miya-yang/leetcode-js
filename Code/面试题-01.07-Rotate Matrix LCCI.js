/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let N = matrix.length;
    for (let i = 0; i < N; i++) {
        matrix[i].reverse();
    }
    for (let i = 0; i < N - 1; i++) {
        for (j = 0; j < N - 1 - i; j++) {
            [matrix[i][j], matrix[N - 1 - j][N - 1 - i]] = [matrix[N - 1 - j][N - 1 - i], matrix[i][j]];
        }
    }
    return matrix;
};