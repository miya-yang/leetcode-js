/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let luckNum = -1
    let hashMap = {}
    for (let i = 0; i < arr.length; i++) {
        hashMap[arr[i]] = hashMap[arr[i]] ? ++hashMap[arr[i]] : 1
    }
    Object.keys(hashMap).forEach((key) => {
        if (Number(key) === hashMap[key]) {
            luckNum = Math.max(luckNum, hashMap[key])
        }
    })
    return luckNum
};