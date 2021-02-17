/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    if (nums.length === 0 || (nums[0] && nums[0].length === 0) || nums.length * nums[0].length !== r * c) {
        return nums;
    }
    const arr = [];
    const numsArr = nums.flat();
    let index = 0;
    for (let i = 0; i < r; i++) {
        arr[i] = numsArr.slice(index, index + c);
        index += c;
    }
    return arr;
};