/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * }
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0
    let right = n

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      let isThisBad = isBadVersion(mid)
      let isPrevBad = isBadVersion(mid - 1)
      if (isThisBad && !isPrevBad) {
        return mid
      } else if (!isThisBad) {
        left = mid + 1
      } else if (isThisBad) {
        right = mid - 1
      }
    }
  }
}