/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let t0 = 0;
    let t1 = 1;
    let t2 = 1;
    if (n === 0) {
        return t0;
    }
    if (n === 1 || n === 2) {
        return t1;
    }
    for (let i = 3; i <= n; i++) {
        let t3 = t0 + t1 + t2;
        t0 = t1;
        t1 = t2;
        t2 = t3;
    }
    return t2;
};
