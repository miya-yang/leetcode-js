/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let total = 0
  for (let i = 0; i < S.length; i++) {
    if (J.indexOf(S[i]) !== -1) {
      total++
    }
  }
  return total
}
