/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [],
    i1 = 0,
    i2 = 0
  while (true) {
    if (i1 === nums1.length) {
      let tempArr = nums2.slice(i2)
      arr = arr.concat(...tempArr)
      break
    }
    if (i2 === nums2.length) {
      let tempArr = nums1.slice(i1)
      arr = arr.concat(...tempArr)
      break
    }
    if (nums1[i1] <= nums2[i2]) {
      arr.push(nums1[i1])
      i1++
    } else {
      arr.push(nums2[i2])
      i2++
    }
  }
  return arr.length % 2 === 1 ? arr[Math.floor(arr.length / 2)] : (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
}