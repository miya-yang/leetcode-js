/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  let arr = []
  for (let i = 0; i <= num; i++) {
    arr.push(Number(i).toString(2).match(/1/g) === null ? 0 : Number(i).toString(2).match(/1/g).length)
  }
  return arr
}
