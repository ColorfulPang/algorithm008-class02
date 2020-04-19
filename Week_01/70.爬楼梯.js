/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) {
    return 1
  } else if (n === 2) {
    return 2
  }

  var i = 1
  var j = 2
  var index = 0
  var result = i + j

  while(index < n - 3) {
    i = j
    j = result
    result = i + j
    index++
  }
  return result
};