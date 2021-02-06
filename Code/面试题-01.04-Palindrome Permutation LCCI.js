/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    const map = {};
    s.split('').forEach(item => {
        if (map[item]) {
            delete map[item];
        } else {
            map[item] = true;
        }
    });
    return Object.keys(map).length <= 1;
};