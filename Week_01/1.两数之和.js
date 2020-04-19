/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var caches = new Map()
  for (var i = 0; i < nums.length; i++) {
    var a = nums[i]
    var cacheValue = caches.get(target - a)
    if (cacheValue > -1 && cacheValue !== i) {
      return [cacheValue, i]
    }
    caches.set(a, i)
  }
};