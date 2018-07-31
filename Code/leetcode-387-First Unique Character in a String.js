/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.substr(i + 1).indexOf(s[i]) === -1 && s.substring(0, i).indexOf(s[i]) === -1) {
      return i
    }
  }
  return -1
}
