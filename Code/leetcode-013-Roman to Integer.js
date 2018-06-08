/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let total = 0
  for (let i = 0; i < s.length; i++) {
    let item = s.substr(i, 1)
    switch (item) {
      case 'I':
        if (s.substr(i + 1, 1) === 'V') {
          total += 4
          i++
        } else if (s.substr(i + 1, 1) === 'X') {
          total += 9
          i++
        } else {
          total += 1
        }
        break
      case 'V':
        total += 5
        break
      case 'X':
        if (s.substr(i + 1, 1) === 'L') {
          total += 40
          i++
        } else if (s.substr(i + 1, 1) === 'C') {
          total += 90
          i++
        } else {
          total += 10
        }
        break
      case 'L':
        total += 50
        break
      case 'C':
        if (s.substr(i + 1, 1) === 'D') {
          total += 400
          i++
        } else if (s.substr(i + 1, 1) === 'M') {
          total += 900
          i++
        } else {
          total += 100
        }
        break
      case 'D':
        total += 500
        break
      case 'M':
        total += 1000
        break
    }
  }
  return total
}
