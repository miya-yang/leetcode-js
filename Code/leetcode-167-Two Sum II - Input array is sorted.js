/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i = 0
  let j = numbers.length - 1
  while (i !== j) {
    if (numbers[i] + numbers[j] > target) {
      j--
    } else if (numbers[i] + numbers[j] < target) {
      i++
    } else {
      return [i + 1, j + 1]
    }
  }
}