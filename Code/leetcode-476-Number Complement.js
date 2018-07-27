/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let bin = num.toString(2).split('')
  for (let i = 0; i < bin.length; i++) {
    bin[i] = Number(bin[i]) === 1 ? bin[i] = 0 : bin[i] = 1
  }
  return parseInt(bin.join(''), 2)
}
