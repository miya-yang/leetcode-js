/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  /**  方法一  **/
  let len = s.length
  for (let i = 1; i <= len / 2; i++) {
    let subStr = s.substr(0, i)
    if (subStr.repeat(len / i) === s) {
      return true
    }
  }
  return false

  /**  方法二  **/
  // return (s + s).slice(1, -1).indexOf(s) >= 0

  /**  方法三  **/
  // return /^(\w+)\1+$/.test(s)
}