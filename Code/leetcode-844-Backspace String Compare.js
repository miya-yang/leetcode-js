/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let sStack = S.split('')
  let tStack = T.split('')

  for (let i = 0; i < sStack.length; i++) {
    if (sStack[i] === '#') {
      if (i > 0) {
        sStack.splice(i - 1, 2)
        i = i - 2 >= 0 ? i - 2 : -1
      } else {
        sStack.splice(i, 1)
        i--
      }
    }
  }
  for (let i = 0; i < tStack.length; i++) {
    if (tStack[i] === '#') {
      if (i > 0) {
        tStack.splice(i - 1, 2)
        i = i - 2 >= 0 ? i - 2 : -1
      } else {
        tStack.splice(i, 1)
        i--
      }
    }
  }
  return sStack.join('') === tStack.join('')
}
