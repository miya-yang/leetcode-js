/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let count5 = 0
  let count10 = 0
  for (let i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5:
        count5++
        break
      case 10:
        count10++
        if (count5 > 0) {
          count5--
        } else {
          return false
        }
        break
      case 20:
        if (count10 > 0 && count5 > 0) {
          count10--
          count5--
        } else if (count5 >= 3) {
          count5 -= 3
        } else {
          return false
        }
        break
    }
  }
  return true
}