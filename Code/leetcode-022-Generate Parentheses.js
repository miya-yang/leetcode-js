/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    const rs = (left, right, str) => {
        if (left === 0 && right === 0) {
            result.push(str);
        } else {
            if (right > 0) {
                rs(left, right - 1, str + ')');
            }
            if (left > 0) {
                rs(left - 1, right + 1, str + '(');
            }
        }
    }

    rs(n, 0, '');
    return result;
};