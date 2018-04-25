/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var _x = x.toString().split('');
    var _l = Math.floor(_x.length / 2);
    for (var i = 0; i < _l; i++) {
        if (_x[i] !== _x[_x.length - 1 - i]) {
            return false;
        }
    }
    return true;
};