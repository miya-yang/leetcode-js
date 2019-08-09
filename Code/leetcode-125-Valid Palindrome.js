/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let sArr = []
  for (let i = 0; i < s.length; i++) {
    if (/[a-zA-Z0-9]/.test(s[i])) {
      sArr.push(String(s[i]).toLowerCase())
    }
  }
  let i = 0
  let j = sArr.length - 1
  while (i < j) {
    if (sArr[i] !== sArr[j]) {
      return false
    }
    i++
    j--
  }
  return true
}