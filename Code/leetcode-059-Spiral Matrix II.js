/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let num = 1
  let turns = Math.ceil(n / 2)
  let result = new Array(n)
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(n)
  }

  for (let i = 0; i < turns; i++) {
    let j
    for (j = i; j < n - i; j++) {
      result[i][j] = num++
    }
    num--
    for (j = i; j < n - i; j++) {
      result[j][n - 1 - i] = num++
    }
    num--
    for (j = n - 1 - i; j >= i; j--) {
      result[n - 1 - i][j] = num++
    }
    num--
    for (j = n - 1 - i; j > i; j--) {
      result[j][i] = num++
    }
  }

  return result
};