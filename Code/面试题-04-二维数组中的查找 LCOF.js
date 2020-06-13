/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if (matrix.length === 0) {
        return false
    }
    let col = matrix[0].length - 1
    let row = 0
    while(col >= 0 && row < matrix.length) {
        if (matrix[row][col] < target) {
            row++
        } else if (matrix[row][col] > target) {
            col--
        } else {
            return true
        }
    }
    return false
};