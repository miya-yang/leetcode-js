/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  if (A.length <= 2) {
    return true
  }
  let store = 0

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] > A[i + 1]) {
      // 1
      if (store >= 0) {
        store = 1
      } else {
        return false
      }
    } else if (A[i] < A[i + 1]) {
      // -1
      if (store <= 0) {
        store = -1
      } else {
        return false
      }
    }
  }
  return true
}