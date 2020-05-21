/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
    for (let i = 0; i < astr.length; i++) {
        if (astr.substr(i + 1).indexOf(astr[i]) > -1) {
            return false;
        }
    }
    return true;
};