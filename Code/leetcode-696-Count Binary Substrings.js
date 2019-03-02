/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let total = 0
  let hasResult = (str) => {
    let item = str.match(/^(0+|1+)/)[0]
    let len = item.length
    let item2 = (item[0] ^ 1).toString().repeat(len)
    return item2 === str.substr(len, len)
  }

  for (let i = 0, len = s.length - 1; i < len; i++) {
    if (hasResult(s.slice(i))) {
      total++
    }
  }
  return total
}