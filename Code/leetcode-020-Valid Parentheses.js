/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []
  for (let item of s) {
    switch (item) {
      case '(':
        stack.push(0)
        break
      case '{':
        stack.push(1)
        break
      case '[':
        stack.push(2)
        break
      case ')':
        if (stack.pop() !== 0) {
          return false
        }
        break
      case '}':
        if (stack.pop() !== 1) {
          return false
        }
        break
      case ']':
        if (stack.pop() !== 2) {
          return false
        }
        break
    }
  }
  return stack.length === 0
}