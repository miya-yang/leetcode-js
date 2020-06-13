/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let hashTable = {}
    let current = n
    hashTable[n] = true
    while(true) {
        let total = 0
        String(current).split('').forEach(item => {
            total += Math.pow(item, 2)
        })
        current = total
        if (current === 1) {
            return true
        } else if (hashTable[current]) {
            return false
        } else {
            hashTable[current] = true
        }
    }
};