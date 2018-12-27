/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  let obj = {}

  for (let item of A) {
    if (!obj[item]) {
      obj[item] = true
    } else {
      return item
    }
  }
}