/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let ips = []
  let ra = (arr, str) => {
    let len = arr.length
    // 判断剩余数据是否可以组成IP地址
    if (str.length < 4 - len || str.length > 3 * (4 - len)) {
      return false
    }
    // 结束条件
    if (arr.length === 4 && arr.join('') === s) {
      ips.push(arr.join('.'))
    } else {
      // 进行尝试取值
      let strArr = str.split('')
      for (let i = 0, minLen = Math.min(3, str.length), ip; i < minLen; i++) {
        ip = str.substr(0, i + 1)
        if (i > 0 && Number(ip.substr(0, 1)) === 0) {
          break
        }
        if (Number(ip) < 256) {
          ra(arr.concat([ip]), str.substr(i + 1))
        }
      }
    }
  }
  ra([], s)
  return ips
}