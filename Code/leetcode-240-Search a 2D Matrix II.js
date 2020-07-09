/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
        return false
    }
    let rowIndex = 0
    let columnIndex = matrix[0].length - 1
    let rowLength = matrix.length
    while (rowIndex < rowLength && columnIndex >= 0) {
        if (matrix[rowIndex][columnIndex] > target) {
            columnIndex--
        } else if (matrix[rowIndex][columnIndex] < target) {
            rowIndex++
        } else {
            return true
        }
    }
    return false
};