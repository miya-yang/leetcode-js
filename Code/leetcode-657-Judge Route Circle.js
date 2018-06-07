/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let upState = 0
  let leftState = 0
  for (let i = 0; i < moves.length; i++) {
    switch (moves.substr(i, 1)) {
      case 'U':
        upState++
        break
      case 'D':
        upState--
        break
      case 'L':
        leftState++
        break
      case 'R':
        leftState--
        break
    }
  }
  return upState === 0 && leftState === 0
}
