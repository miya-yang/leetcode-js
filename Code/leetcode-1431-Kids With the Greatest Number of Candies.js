/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = []
    let max = candies.reduce((pre, cur) => {
        return Math.max(pre, cur)
    })
    for (let i = 0; i < candies.length; i++) {
        result[i] = candies[i] + extraCandies >= max
    }
    return result
};