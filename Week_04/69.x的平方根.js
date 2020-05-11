/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x
    var left = 1, right = x
    var mid, square
    while (left <= right) {
        mid = parseInt((right + left)/2)
        square = mid * mid
        if (square === x) {
            return mid
        } else if (square < x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right
};