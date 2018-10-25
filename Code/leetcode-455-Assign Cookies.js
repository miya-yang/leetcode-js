/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let sum = 0

  g.sort((a, b) => b - a)
  s.sort((a, b) => b - a)
  for (let i = 0; i < g.length; i++) {
    if (g[i] <= s[sum]) {
      sum++
    }
    if (sum === s.length) {
      break
    }
  }
  return sum
}