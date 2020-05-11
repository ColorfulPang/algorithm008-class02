/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let result = 0
    let index = 0
    while (index >= 0) {
        let square = index * index
        if (square > x) {
            break
        }
        result = index
        index++
    }
    return result
};