/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let hashMap = {}
    let keyHashMap = {}
    for (let i = 0; i < s.length; i++) {
        if (hashMap[s[i]]) {
            if (hashMap[s[i]] !== t[i]) {
                return false
            }
        } else {
            if (!keyHashMap[t[i]]) {
                hashMap[s[i]] = t[i]
                keyHashMap[t[i]] = true
            } else {
                return false
            }
        }
    }
    return true
};