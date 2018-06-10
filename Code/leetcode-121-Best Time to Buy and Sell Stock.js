/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0
  let minPrice = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    result = Math.max(result, prices[i] - minPrice)
  }
  return result
}
