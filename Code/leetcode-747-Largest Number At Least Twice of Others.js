/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if(nums.length === 1) {
        return 0;
    }
    var arr = nums.concat();
    arr.sort(compared);
    return arr[arr.length - 1] >= arr[arr.length - 2] * 2 ? nums.indexOf(arr[arr.length - 1]) : -1;
};

function compared(v1, v2) {
    return v1 - v2;
}