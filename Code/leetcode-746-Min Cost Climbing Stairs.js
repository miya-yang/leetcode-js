/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let floor1 = cost[0];
    let floor2 = cost[1];

    for (let i = 2; i < cost.length; i++) {
        let curCost = cost[i] + Math.min(floor1, floor2);
        floor1 = floor2;
        floor2 = curCost;
    }

    return Math.min(floor1, floor2);
};
