/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let result = words.filter(item => {
    return !/[asdfghjklzxcvbnm]/i.test(item) || !/[qwertyuiopzxcvbnm]/i.test(item) || !/[qwertyuiopasdfghjkl]/i.test(item)
  })
  return result
}