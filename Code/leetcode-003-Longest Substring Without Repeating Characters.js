/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hashMap = new Map()
    let max = 0
    let minIndex = 0
    for (let maxIndex = 0; maxIndex < s.length; maxIndex++) {
        if (hashMap.has(s[maxIndex])) {
            minIndex = Math.max(minIndex, hashMap.get(s[maxIndex]) + 1)
        }
        max = Math.max(max, maxIndex - minIndex + 1)
        hashMap.set(s[maxIndex], maxIndex)
    }
    return max
};