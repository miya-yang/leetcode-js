/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let islandLength = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        // 上
        if (i - 1 < 0 || grid[i - 1][j] === 0) {
          islandLength++
        }
        // 下
        if (i + 1 >= grid.length || grid[i + 1][j] === 0) {
          islandLength++
        }
        // 左
        if (j - 1 < 0 || grid[i][j - 1] === 0) {
          islandLength++
        }
        // 右
        if (j + 1 >= grid[i].length || grid[i][j + 1] === 0) {
          islandLength++
        }
      }
    }
  }
  return islandLength
}
