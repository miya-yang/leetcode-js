/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    var count = 0,
        len = flowerbed.length;
    for(var i = 0;i < len;i++) {
        if(flowerbed[i] == 0 && (flowerbed[i - 1] == 0 || typeof flowerbed[i - 1] == 'undefined') && (flowerbed[i + 1] == 0 || typeof flowerbed[i + 1] == 'undefined')) {
            flowerbed[i] = 1;
            count++;
        }
    }
    if(count >= n) {
        return true;
    }
    return false;
};