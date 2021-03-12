/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
      2: ['a','b','c'],
      3: ['d','e','f'],
      4: ['g','h','i'],
      5: ['j','k','l'],
      6: ['m','n','o'],
      7: ['p','q','r','s'],
      8: ['t','u','v'],
      9: ['w','x','y','z']
  }

  let result = [];

  const backtracking = (digitsArr, index, str) => {
      if (digitsArr.length === str.length) {
          if (str !== '') {
              result.push(str);
          }
          return;
      }
      let item = map[digitsArr[index]];
      for (let i = 0; i < item.length; i++) {
          backtracking(digitsArr, index + 1, str + item[i]);
      }
  }

  backtracking(digits.split(''), 0, '');
  return result;
}