/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  /**  方法一  **/
  let res = []
  
  // 遍历生成所有数字
  for (let i = 0; i < Math.pow(2, n); i++) {
    let item = ''
    
    // 完成一个数字的组合
    for (let j = 1; j <= n; j++) {
      // 如个位循环 0110 十位循环 00111100
      let groupLen = 2 * Math.pow(2, (j - 1)) + Math.pow(2, j)
      let count = i % groupLen
      item = count < Math.pow(2, (j - 1)) || count > Math.pow(2, (j - 1)) + Math.pow(2, j) - 1 ? '0' + item : '1' + item
    }
    item = item === '' ? 0 : parseInt(item, 2)
    res.push(item)
  }
  return res
    
  /**  方法二  **/
  // let make = (n => {
  //   if (n === 0) {
  //     return ['0']
  //   } else if (n === 1) {
  //     return ['0', '1']
  //   } else {
  //     let prev = make(n - 1)
  //     let result = []
  //     let len = Math.pow(2, n) - 1
  //     for (let i = 0; i < len / 2; i++) {
  //       result[i] = `0${prev[i]}`
  //       result[len - i] = `1${prev[i]}`
  //     }
  //     return result
  //   }
  // })
  // return make(n).map(item => {
  //   return parseInt(item, 2)
  // })
}