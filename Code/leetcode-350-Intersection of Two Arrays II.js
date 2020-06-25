/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let hashMap = {}
    let result = []
    for (let i = 0; i < nums1.length; i++) {
        hashMap[nums1[i]] = hashMap[nums1[i]] ? ++hashMap[nums1[i]] : 1
    }
    for (let i = 0; i < nums2.length; i++) {
        if (hashMap[nums2[i]] >= 1) {
            result.push(nums2[i])
            hashMap[nums2[i]]--
        }
    }
    return result
};