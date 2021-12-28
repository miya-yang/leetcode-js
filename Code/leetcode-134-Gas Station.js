/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let startIndex = 0;
    let totalCost = 0;
    let curProfit = 0;

    for (let i = 0, len = gas.length; i < len; i++) {
        const profit = gas[i] - cost[i];
        totalCost += profit;
        curProfit += profit;
        if (curProfit < 0) {
            startIndex = i + 1;
            curProfit = 0;
        }
    }

    return totalCost >= 0 ? startIndex : -1;
};
