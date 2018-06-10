/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  for (let i = 0; i < A.length; i++) {
    A[i].reverse()
    for (let j = 0; j < A.length; j++) {
      A[i][j] ^= 1
    }
  }
  return A
}
