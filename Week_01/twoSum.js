/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var caches = {}
  for (var i = 0; i < nums.length; i++) {
    var a = nums[i]
    if (caches[target - a] > -1 && caches[target - a] !== i) {
      return [caches[target - a], i]
    }
    caches[a] = i
  }
};