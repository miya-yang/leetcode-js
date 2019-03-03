/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let digitsLetters = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let res = []
  digits.split('').forEach(item => {
    if (res.length === 0) {
      res = digitsLetters[item - 2].split('')
    } else {
      let tempArr = res
      res = []
      for (let i = 0; i < tempArr.length; i++) {
        for (let j = 0; j < digitsLetters[item - 2].split('').length; j++) {
          res.push(tempArr[i] + digitsLetters[item - 2].split('')[j])
        }
      }
    }
  })
  return res
}