/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) return 1 / myPow(x, -n)
    res = 1
    for (let i = n; i != 0; i = Math.floor(i/2)) {
        if (i % 2 !== 0 ) {
            res *= x
        }
        x *= x
    }
    return n > 0 ? res: 1/res
};