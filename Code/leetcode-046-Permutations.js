/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];

    const backtracking = (arr, remain) => {
        if (remain.length === 0) {
            result.push(arr);
        }
        for (let i = 0; i < remain.length; i++) {
            let arrClone = arr.slice();
            arrClone.push(remain[i]);
            let remainClone = remain.slice();
            remainClone.splice(i, 1);
            backtracking(arrClone, remainClone);
        }
    }

    backtracking([], nums);
    return result;
};