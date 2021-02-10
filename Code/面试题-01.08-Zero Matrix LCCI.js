/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rowMap = {};
    const colMap = {};
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        let row = matrix[rowIndex];
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            if (row[colIndex] === 0) {
                rowMap[rowIndex] = true;
                colMap[colIndex] = true;
            }
        }
    }
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        let row = matrix[rowIndex];
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            if (rowMap[rowIndex] || colMap[colIndex]) {
                row[colIndex] = 0;
            }
        }
    }
};