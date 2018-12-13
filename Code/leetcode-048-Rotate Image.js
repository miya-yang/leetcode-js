/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let len = matrix.length
  let diagonal = len - 1
  for (let i = 0; i < len; i++) {
    matrix[i] = matrix[i].reverse()
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < diagonal; j++) {
      [matrix[i][j], matrix[len - 1 - j][len - 1 - i]] = [matrix[len - 1 - j][len - 1 - i], matrix[i][j]]
    }
    diagonal--
  }
}