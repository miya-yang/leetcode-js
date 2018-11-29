/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let i = 0
  let j = A.length - 1
  while (i < j) {
    if (A[i] % 2 === 0 && A[j] % 2 === 0) {
      // 偶偶
      i++
    } else if (A[i] % 2 === 0 && A[j] % 2 !== 0) {
      // 偶奇
      i++
      j--
    } else if (A[i] % 2 !== 0 && A[j] % 2 === 0) {
      // 奇偶
      [A[i], A[j]] = [A[j], A[i]]
      i++
      j--
    } else {
      // 奇奇
      j--
    }
  }
  return A
}