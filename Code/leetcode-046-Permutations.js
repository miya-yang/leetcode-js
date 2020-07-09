/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // let result = []
    // let perm = (c, a) => {
    //     if (a.length === 1) {
    //         c.push(a[0])
    //         result.push(c)
    //     } else {
    //         for (let i = 0; i < a.length; i++) {
    //             let curr = c.slice()
    //             let data = a.slice()
    //             curr.push(data[i])
    //             data.splice(i, 1)
    //             perm(curr, data)
    //         }
    //     }
    // }
    // perm([], nums)
    // return result

    let result = []
    let perm = (c, p, q) => {
        if (p === q) {
            result.push(c)
        } else {
            for (let i = p; i < q; i++) {
                let curr = c.slice()
                let temp = curr[i]
                curr[i] = curr[p]
                curr[p] = temp
                perm(curr, p + 1, q)
            }
        }
    }
    perm(nums, 0, nums.length)
    return result
};