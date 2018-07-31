/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // 检测每一行
  let tempArr = []
  for (let i = 0; i < 9; i++) {
    tempArr = []
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        tempArr.push(board[i][j])
      }
    }
    if (tempArr.length !== new Set(tempArr).size) {
      return false
    }
    // 检测每一列
    tempArr = []
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== '.') {
        tempArr.push(board[j][i])
      }
    }
    if (tempArr.length !== new Set(tempArr).size) {
      return false
    }
    // 检测每一宫
    tempArr = []
    for (let j = 0; j < 9; j++) {
      if (board[Math.floor(j / 3) + Math.floor(i / 3) * 3][3 * (i % 3) + (j % 3)] !== '.') {
        tempArr.push(board[Math.floor(j / 3) + Math.floor(i / 3) * 3][3 * (i % 3) + (j % 3)])
      }
    }
    if (tempArr.length !== new Set(tempArr).size) {
      return false
    }
  }
  return true
}
