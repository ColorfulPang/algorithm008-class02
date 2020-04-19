/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let length = nums.length
  let zeroCounts = 0

  for (var index in nums) {
    var value = nums[index]
    if (value === 0) {
      for (var n = index; n < length; n++) {
        if (nums[n] !== 0) {
          nums[index] = nums[n]
          nums[n] = value
          break
        }
      }
    }
  }
};