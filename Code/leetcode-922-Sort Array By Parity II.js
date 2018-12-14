/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let odd = 1
  let even = 0
  let len = A.length

  while (odd < len || even < len) {
    if (A[odd] % 2 !== 0) {
      if (A[even] % 2 === 0) {
        even += 2
      }
      odd += 2
    } else {
      if (A[even] % 2 !== 0) {
        [A[odd], A[even]] = [A[even], A[odd]]
        odd += 2
      }
      even += 2
    }
  }
  return A
}