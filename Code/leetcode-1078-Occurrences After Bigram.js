/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  let res = []
  let textArr = text.split(' ')
  for (let i = 0; i < textArr.length - 2; i++) {
    if (textArr[i] === first && textArr[i + 1] === second) {
      res.push(textArr[i + 2])
    }
  }
  return res
}
