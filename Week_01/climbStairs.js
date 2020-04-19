/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (climbStairs.caches[n]) {
    return climbStairs.caches[n]
  }
  if (n === 1) {
    return 1
  } else if (n === 2) {
    return 2
  }

  var result = climbStairs(n - 1) + climbStairs(n - 2)
  climbStairs.caches[n] = result
  return result
};
climbStairs.caches = {}