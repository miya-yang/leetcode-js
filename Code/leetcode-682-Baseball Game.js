/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let storeStack = [] // 分数栈
  let head = 0 // 栈指针
  // 遍历进行操作
  for (let i of ops) {
    switch (i) {
      case '+':
        storeStack[head] = Number(storeStack[head - 2]) + Number(storeStack[head - 1])
        head++
        break
      case 'D':
        storeStack[head] = Number(storeStack[head - 1]) * 2
        head++
        break
      case 'C':
        storeStack.splice(--head, 1)
        break
      default:
        storeStack[head++] = Number(i)
        break
    }
  }
  return storeStack.reduce((x, y) => x + y, 0)
}
