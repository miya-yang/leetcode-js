/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = []
  let i = 0
  while (i < numRows) {
    result[i] = new Array(i + 1)
    result[i][0] = 1
    result[i][result[i].length - 1] = 1

    if (i > 1) {
      for (let j = 1; j < result[i].length - 1; j++) {
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j]
      }
    }
    i++
  }
  return result
}