/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    if (cardPoints.length <= k) {
        return cardPoints.reduce((p, c) => p += c);
    }

    let max = Number.MIN_SAFE_INTEGER;
    let curr = 0;
    let left = cardPoints.length - 1;
    let right = 0;
    for (; right < k; right++) {
        curr += cardPoints[right];
    }
    max = curr;
    right--;
    for (; right > -1; right--) {
        curr -= cardPoints[right];
        curr += cardPoints[left];
        max = Math.max(curr, max);
        left--;
    }
    return max;
};