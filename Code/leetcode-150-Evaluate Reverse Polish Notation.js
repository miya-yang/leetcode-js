/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = []
  for (let item of tokens) {
    // 是数字，入栈
    if (/\d/.test(Number(item))) {
      stack.push(Number(item))
    } else {
      // 是符号
      let sum = 0
      let data1 = stack.pop()
      let data2 = stack.pop()
      switch (item) {
        case '+':
          sum = data2 + data1
          break
        case '-':
          sum = data2 - data1
          break
        case '*':
          sum = data2 * data1
          break
        case '/':
          sum = parseInt(data2 / data1)
          break
      }
      stack.push(sum)
    }
  }
  return stack[0]
}