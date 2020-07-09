/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const half = nums.length / 2
    let hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = hashMap[nums[i]] ? ++hashMap[nums[i]] : 1
        if (hashMap[nums[i]] > half) {
            return nums[i]
        }
    }
};