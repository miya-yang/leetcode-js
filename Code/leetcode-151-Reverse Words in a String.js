/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim()
  let sArr = s.split('')
  // 清除多余的空格
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === ' ' && sArr[i + 1] === ' ') {
      sArr.splice(i, 1)
      i--
    }
  }
  return sArr = sArr.join('').split(' ').reverse().join(' ')
}