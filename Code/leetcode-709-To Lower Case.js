/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let strArr = str.split('')
  for (let i = 0; i < strArr.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      strArr.splice(i, 1, String.fromCharCode(str.charCodeAt(i) + 32))
    }
  }
  return strArr.join('')
}
