/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N <= 1) {
    return N
  } else {
    return fib(N - 1) + fib(N - 2)
  }
}