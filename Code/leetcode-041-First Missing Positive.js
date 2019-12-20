/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let arr = nums.filter(item => item > 0)
  if (arr.length === 0) {
    return 1
  }
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    if (i === 0 && arr[0] !== 1) {
      return 1
    }
    if (i >= 1 && arr[i] > arr[i - 1] + 1) {
      return arr[i - 1] + 1
    }
  }
  return arr[arr.length - 1] + 1
};