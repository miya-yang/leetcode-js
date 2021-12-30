/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [1];
    let temp = [];

    for (let i = 0; i <= rowIndex; i++) {
        temp = new Array(i + 1);
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                temp[j] = 1;
            } else {
                temp[j] = result[j - 1] + result[j]
            }
        }
        result = temp;
    }

    return result;
};
