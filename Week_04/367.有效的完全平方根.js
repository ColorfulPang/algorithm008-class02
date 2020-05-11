/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num == 1) return true
    var left = 0, right = num
    var mid, square
    while (left <= right) {
        mid = parseInt((left + right)/2)
        square = mid * mid
        if (square === num) {
            return true
        } else if (square < num) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return false
};