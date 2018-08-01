/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  let arr = []
  arr[0] = 0
  for (let i = 1; i <= num; i++) {
    arr.push(Number(i).toString(2).match(/1/g).length)
  }
  return arr
}
