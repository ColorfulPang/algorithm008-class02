/**
 * @param {number} n
 * @return {string[]}
 */
var _genParen = function(left, right, n, str, result) {
    // 匹配条件
    if (left === n && right === n) {
        result.push(str)
        return
    }

    // 下一步递归
    if (left < n) _genParen(left + 1, right, n, `${str}(`, result)
    if (left > right) _genParen(left, right + 1, n, `${str})`, result)
}

var generateParenthesis = function(n) {
    let result = []
    _genParen(0, 0, n, '', result)
    return result
};