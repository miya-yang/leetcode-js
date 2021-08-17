/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
  s = s.split("");
  let result = [];
  let max = s.length;
  let min = 0;
  let maxCount = 0;
  let minCount = 0;

  s.forEach(item => {
      if (item === 'I') {
          result.push(min);
          min++;
          minCount++;
      } else if (item === 'D') {
          result.push(max);
          max--;
          maxCount++;
      }
  });

  result.push(maxCount > minCount ? min : max);

  return result;
};