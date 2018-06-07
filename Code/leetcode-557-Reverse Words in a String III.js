/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let sArr = s.split(' ')
  for (let i = 0; i < sArr.length; i++) {
    sArr[i] = sArr[i].split('').reverse().join('')
  }
  return sArr.join(' ')
}
