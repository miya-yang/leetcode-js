/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = []
  let flag = false
  while (a.length !== b.length) {
    if (a.length < b.length) {
      a = '0' + a
    } else {
      b = '0' + b
    }
  }
  for (let i = 0; i < a.length; i++) {
    let an = Number(a.substr(a.length - i - 1, 1))
    let bn = Number(b.substr(b.length - i - 1, 1))
    if (flag) {
      if (an + bn + 1 >= 2) {
        result.unshift(an + bn + 1 === 2 ? 0 : 1)
      } else {
        result.unshift(1)
        flag = false
      }
    } else {
      if (an + bn === 2) {
        result.unshift(0)
        flag = true
      } else {
        result.unshift(an + bn)
      }
    }
  }
  if (flag) {
    result.unshift(1)
  }
  return result.join('')
}