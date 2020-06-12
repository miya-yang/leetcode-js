/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let a = 0
    let b = 1
    let i = 2
    if (n === 0) {
        return a
    } else if (n === 1) {
        return b
    }
    while (i <= n) {
        let c = b
        b = a + b
        a = c
        a %= 1000000007
        b %= 1000000007
        i++
    }
    return b
};