/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let result = [];
    let map = {};

    const backtracking = (arr, start) => {
        for (let i = start; i < nums.length; i++) {
            let arrClone = arr.slice();
            // 当数组为空或当前位置比前一位置元素大时 存入当前元素
            if ((arrClone.length === 0 || (i > 0 && nums[i] >= arrClone[arrClone.length - 1]))) {
                arrClone.push(nums[i]);
                if (arrClone.length > 1 && !map[arrClone.join(',')]) {
                    map[arrClone.join(',')] = true;
                    result.push(arrClone);
                }
            }
            backtracking(arrClone, i + 1);
        }
    }

    backtracking([], 0);
    return result;
};