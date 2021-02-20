/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const map = {};
    let maxCount = Number.MIN_VALUE;
    let minLength = Number.MAX_VALUE;
    nums.forEach(item => {
        if (!map[item]) {
            map[item] = {
                count: 1,
                left: nums.indexOf(item),
                right: nums.lastIndexOf(item)
            };
        } else {
            map[item]['count']++;
        }
        maxCount = Math.max(maxCount, map[item]['count']);
    });
    Object.keys(map).forEach(key => {
        const count = map[key].count;
        if (count === maxCount) {
            minLength = Math.min(minLength, map[key]['right'] - map[key]['left'] + 1);
        }
    });

    return minLength;
};