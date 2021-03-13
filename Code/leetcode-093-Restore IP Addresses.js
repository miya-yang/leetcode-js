/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let result = [];
  if(s.length < 4 || s.length > 16) {
      return result;
  }
  const backtracking = (arr, startAt) => {
      if ((4 - arr.length) * 3 < s.length - startAt) {
          return;
      }
      if (arr.length === 4) {
          if (startAt >= s.length) {
              result.push(arr.join('.'));
          }
          return;
      }
      for (let i = startAt + 1; i < startAt + 4 && i <= s.length; i++) {
          let num = s.substring(startAt, i);
          if (num <= 255) {
              let tempArr = arr.slice();
              tempArr.push(num);
              backtracking(tempArr, i);
          }
          if (num == 0 || num > 255) {
              break;
          }
      }
  }

  backtracking([], 0);
  return result;
}