/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var _x = 0;
    x > 0 ? _x = parseInt(x.toString().split('').reverse().join('')) : _x = 0 - parseInt(x.toString().split('').reverse().join(''));
    return _x > Math.pow(2, 31) - 1 || _x < 0 - Math.pow(2, 31) ? 0 : _x;
};