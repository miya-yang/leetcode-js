/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let letterMap = {};
    let maxLength = 0;
    let isOdd = false;
    s.split("").forEach(item => {
        if (!letterMap[item]) {
            letterMap[item] = 1;
        } else {
            letterMap[item] += 1;
        }
    });

    Object.keys(letterMap).forEach(item => {
        if (letterMap[item] % 2 === 0) {
            maxLength += letterMap[item];
        } else {
            if (letterMap[item] > 2) {
                maxLength += letterMap[item] - 1;
            }
            if (!isOdd) {
                maxLength++;
                isOdd = true;
            }
        }
    });

    return maxLength;
};
