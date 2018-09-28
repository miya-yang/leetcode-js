/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = ''
  let len = 0
  if (strs.length > 0) {
    for (let i = 0; i < strs[0].length; i++) {
      let tempPrefix = strs[0].substr(0, i + 1)
      for (let j = 0; j < strs.length; j++) {
        if (strs[j].indexOf(tempPrefix) !== 0) {
          return prefix
        } else if (j === strs.length - 1) {
          prefix = tempPrefix
        }
      }
    }
  }
  return prefix
}