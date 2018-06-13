/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let passwordArr = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..']
  let resultObject = {}
  // 将字母转换成unicode码，因为a是97开始，所以所有的字母均-97即可对应
  for (let i of words) {
    let str = ''
    for (let j = 0; j < i.length; j++) {
      str += passwordArr[i[j].charCodeAt() - 97]
    }
    resultObject[str] = true
  }
  return Object.keys(resultObject).length
}
