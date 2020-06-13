/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let bucket = []
    let result = []
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        bucket[nums[i]] = typeof bucket[nums[i]] === 'number' ? ++bucket[nums[i]] : 1
    }
    total = typeof bucket[0] === 'number' ? bucket[0] : 0
    for (let i = 2; i <= bucket.length; i++) {
        total += typeof bucket[i - 1] === 'number' ? bucket[i - 1] : 0
        bucket[i - 1] = total - bucket[i - 1]
    }
    bucket[0] = 0
    for (let i = 0; i < nums.length; i++) {
        result[i] = bucket[nums[i]]
    }
    return result
};