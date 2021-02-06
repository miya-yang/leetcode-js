/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    const len = S.length;
    let letter = len > 0 ? S[0] : null;
    let count = 0;
    let str = '';

    if (len <= 2) {
        return S;
    }

    for (let i = 0; i < len; i++) {
        if (letter !== S[i]) {
            str += letter + count;
            letter = S[i];
            count = 1;
        } else {
            count++;
        }
    }
    str += letter + count;
    return str.length >= len ? S : str;
};