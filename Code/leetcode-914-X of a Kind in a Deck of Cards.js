/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  if (deck.length < 2) {
    return false
  }

  let obj = {}
  let arr = []
  let i = 2
  let total = 0
  for (let i = 0, len = deck.length; i < len; i++) {
    if (obj[deck[i]]) {
      obj[deck[i]]++
    } else {
      obj[deck[i]] = 1
    }
  }
  for (let item in obj) {
    arr.push(obj[item])
    total += obj[item]
  }
  while (i <= total) {
    let res = arr.every(item => {
      return item % i === 0
    })
    if (res) {
      return true
    }
    i++
  }
  return false
}