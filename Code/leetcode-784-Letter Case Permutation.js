/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    // S = S.toLowerCase().split('')
    // let result = []
    // const perm = (s, i) => {
    //     if (i === s.length) {
    //         result.push(s.join(''))
    //     } else {
    //         if (/[a-zA-Z]/.test(s[i])) {
    //             let s1 = s.slice()
    //             s1[i] = s1[i].toUpperCase()
    //             perm(s1, i + 1)
    //         }
    //         perm(s, i + 1)
    //     }
    // }
    // perm(S, 0)
    // return result

    S = S.toLowerCase().split('')
    let result = []
    for (let i = 0, len = S.length; i < len; i++) {
        if (/[a-zA-Z]/.test(S[i])) {
            if (result.length !== 0) {
                for (let j = 0, lenR = result.length; j < lenR; j++) {
                    let str = result[j]
                    result[j] = result[j] + S[i]
                    result.push(str + S[i].toUpperCase())
                }
            } else {
                result.push(S[i])
                result.push(S[i].toUpperCase())
            }
        } else {
            if (result.length !== 0) {
                for (let j = 0, lenR = result.length; j < lenR; j++) {
                    result[j] = result[j] + S[i]
                }
            } else {
                result.push(S[i])
            }
        }
    }
    return result
};