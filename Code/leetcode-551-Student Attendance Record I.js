/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var regA = /A/g,
        regTwoL = /L{3,}/g,
        matchA = s.match(regA) || [],
        matchTwoL = s.match(regTwoL) || [];
    if(matchA.length <= 1 && matchTwoL.length < 1) {
        return true;
    }
    return false;
};