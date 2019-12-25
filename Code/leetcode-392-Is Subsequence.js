/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sidx = 0
  let tidx = 0
  let sArr = s.split('')
  while (true) {
    if (sidx === sArr.length) {
      break
    }
    let pos = t.indexOf(sArr[sidx], tidx)
    if (pos > -1) {
      sidx++
      tidx = pos + 1
    } else {
      return false
    }
  }
  return true
}