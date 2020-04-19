/**
 * @param {string} s
 * @return {boolean}
 */
var mappings = {
  ')': '(',
  '}': '{',
  ']': '['
}

var isValid = function(s) {
  var length = s.length
  var stack = []
  if (length % 2 > 0) {
      return false
  }
  for (var i = 0; i < length; i++) {
    if (stack.length > length/2) {
        return false
    }
    var char = s[i]
    var currentMap = mappings[char]
    if (currentMap) {
      if (stack.length === 0) {
        return false
      }
      var topChar = stack.pop()
      if (topChar !== currentMap) {
        return false
      }
    } else {
      stack.push(char)
    }
  }
  return stack.length === 0
};