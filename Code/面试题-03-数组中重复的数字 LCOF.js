/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let len = nums.length
    let obj = {}
    for (let i = 0; i < len; i++) {
        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = true
        } else {
            return nums[i]
        }
    }
};