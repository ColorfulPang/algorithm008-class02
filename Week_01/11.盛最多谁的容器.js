/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var maxArea = 0
  for (var i = 0, j = height.length - 1; i < j; ) {
      var minHeight = height[i] < height[j] ? height[i++]: height[j--]
      var area = minHeight * (j - i + 1)
      maxArea = Math.max(area, maxArea)
  }
  return maxArea
}