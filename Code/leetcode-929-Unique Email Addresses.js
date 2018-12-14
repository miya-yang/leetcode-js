/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let obj = Object.create(null)
  for (let item of emails) {
    let user = item.split('@')[0]
    let server = item.split('@')[1]
    user = user.split('+')[0]
    user = user.split('.').join('')
    obj[user + '@' + server] = true
  }
  return Object.getOwnPropertyNames(obj).length
}