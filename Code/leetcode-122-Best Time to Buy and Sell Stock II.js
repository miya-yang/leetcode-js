/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let count = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length - 1; j++) {
      if (prices[j + 1] > prices[j]) {
        count += prices[j + 1] - prices[j]
        i = j
      } else {
        i = j
        break
      }
    }
  }
  return count
}

// 解法二
var maxProfit2 = function(prices) {
  let result = 0;
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
      if (prices[i] < prices[i - 1]) {
          result += max;
          max = 0;
          continue;
      }

      max += prices[i] - prices[i - 1];
  }

  result += max;

  return result;
}