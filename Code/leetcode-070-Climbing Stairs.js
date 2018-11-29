/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  let a = 1
  let b = 2
  let res = 0
  for (let i = 3; i <= n; i++) {
    res = a + b
    a = b
    b = res
  }
  return res
}