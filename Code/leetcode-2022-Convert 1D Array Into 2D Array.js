/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
 var construct2DArray = function(original, m, n) {
    let arr = [];
    let len = original.length;
    if (len === m * n) {
        for (let i = 0; i < m; i++) {
            let arrItem = [];
            for (let j = 0; j < n; j++) {
                arrItem[j] = original[i * n + j];
            }
            arr[i] = arrItem;
        }
    }
    return arr;
};