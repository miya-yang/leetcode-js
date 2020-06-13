/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    let i = 1
    let a = 1
    let b = 1
    while (i < n) {
        let c = b
        b = (a + b) % 1000000007
        a = c
        i++
    }
    return b
};