/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
  let low = 0
  let high = A.length - 1
  while (low <= high) {
    let middle = Math.floor((low + high) / 2)
    if (A[middle] > A[middle - 1]) {
      if (A[middle] > A[middle + 1]) {
        return middle
      }
      low = middle + 1
    } else {
      high = middle - 1
    }
  }
  return -1
}
