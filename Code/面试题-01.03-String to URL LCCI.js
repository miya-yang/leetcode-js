/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function(S, length) {
    return encodeURI(S.slice(0, length));
};