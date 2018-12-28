/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let sArr = s.split('')
  let len = sArr.length
  return sArr.reduce((prev, curr, index) => {
    return prev + (Math.pow(26, len - index - 1) * (curr.toUpperCase().charCodeAt() - 64))
  }, 0)
}