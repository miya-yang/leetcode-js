/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let hashMap = {}
    let result = []
    for (let i = 0; i < nums1.length; i++) {
        hashMap[nums1[i]] = true
    }
    for (let i = 0; i < nums2.length; i++) {
        if (hashMap[nums2[i]]) {
            result.push(nums2[i])
            delete hashMap[nums2[i]]
        }
    }
    return result
};