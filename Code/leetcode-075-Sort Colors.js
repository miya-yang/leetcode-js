/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let redTotal = 0
  let whiteTotal = 0
  let blueTotal = 0
  let i = 0
  let j = 0
  let k = 0

  for (let item of nums) {
    if (item === 0) redTotal++
    if (item === 1) whiteTotal++
    if (item === 2) blueTotal++
  }

  for (i = 0; i < redTotal; i++) {
    nums[i] = 0
  }

  for (j = 0; j < whiteTotal; j++) {
    nums[i + j] = 1
  }

  for (k = 0; k < blueTotal; k++) {
    nums[i + j + k] = 2
  }
}