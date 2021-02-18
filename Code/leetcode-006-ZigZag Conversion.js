/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let i = 0;
    let pos = -1;
    let isAsc = true;
    let result = [];
    if (s.length === 0 || numRows === 1) {
        return s;
    }

    for(let j = 0; j < numRows; j++) {
        result.push(new Array());
    }

    while(i < s.length) {
        if (pos < 0) {
            pos = 0;
        } else if (isAsc) {
            if (pos === numRows - 1) {
                pos--;
                isAsc = false;
            } else {
                pos++;
            }
        } else {
            if (pos === 0) {
                pos++;
                isAsc = true;
            } else {
                pos--;
            }
        }
        result[pos].push(s[i]);
        i++;
    }
    return result.flat().join('');
};