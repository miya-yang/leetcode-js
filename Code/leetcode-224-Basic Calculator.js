/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let sArr = []
  let tempStr = ''
  for (let item of s.split('')) {
    // 如果是符号，则入栈
    if (item === '+' || item === '-' || item === '*' || item === '/' || item === '(' || item === ')') {
      if (tempStr !== '') {
        sArr.push(tempStr)
        tempStr = ''
      }
      sArr.push(item)
    } else if (/\d/.test(Number(item))) {
      // 如果是数字，则拼接
      tempStr += item
    }
  }
  if (tempStr !== '') {
    sArr.push(tempStr)
    tempStr = ''
  }
  let data = infix2suffix(sArr)
  console.log(data)
  return suffix2result(data)
};

// 中缀表达式转后缀表达式
function infix2suffix(express) {
  let result = []
  let stack = []
  for (let item of express) {
    // 如果是数字就输出，成为后缀表达式的一部分
    if (/\d/.test(item)) {
      result.push(item.toString())
    } else if (item !== ' ') {
      if (item === '(') {
        stack.push(item)
      } else if (item === '+' || item === '-') {
        // 当为加减符号时，全部出栈
        let data = ''
        while (stack.length !== 0 && stack[stack.length - 1] !== '(') {
          data = stack.pop()
          result.push(data)
        }
        stack.push(item)
      } else if (item === ')') {
        // 如果是右括号，则匹配此前的左括号
        let data = stack.pop()
        // 不是左括号均输出
        while (data !== '(') {
          result.push(data)
          data = stack.pop()
        }
      } else {
        stack.push(item)
      }
    }
  }
  while (stack.length > 0) {
    result.push(stack.pop())
  }
  return result
}

// 后缀表达式计算结果
function suffix2result(express) {
  let stack = []
  for (let item of express) {
    // 如果是数字，则进栈
    if (/\d/.test((item))) {
      stack.push(Number(item))
    } else if (item !== ' ') {
      // 如果不是空格，即为符号，则将栈顶两数字出栈
      let data1 = stack.pop()
      let data2 = stack.pop()
      let result = 0
      switch (item) {
        case '+':
          result = Number(data2) + Number(data1)
          break
        case '-':
          result = Number(data2) - Number(data1)
          break
        case '*':
          result = Number(data2) * Number(data1)
          break
        case '/':
          result = Number(data2) / Number(data1)
          break
        default:
          result += Number(data1)
      }
      // 将运行结果入栈
      stack.push(result)
    }
  }
  return stack[0]
}