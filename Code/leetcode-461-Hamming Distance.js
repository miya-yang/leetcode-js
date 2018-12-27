/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  x = x.toString(2)
  y = y.toString(2)
  let count = 0
  let maxLen = Math.max(x.length, y.length)
  let i = maxLen - 1
  let j = 0

  while (i >= 0) {
    let xNum = x.length - 1 - j >= 0 ? x[x.length - 1 - j] : 0
    let yNum = y.length - 1 - j >= 0 ? y[y.length - 1 - j] : 0
    count += Number(xNum ^ yNum) === 0 ? 0 : 1
    j++
    i--
  }
  return count
}