/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let noneZeroIndex = 0

  for (let n = 0; n < nums.length; n++) {
    if (nums[n] !== 0) {
      nums[noneZeroIndex] = nums[n]
      noneZeroIndex++
    }
  }

  for (; noneZeroIndex < nums.length; noneZeroIndex++) {
    nums[noneZeroIndex] = 0
  }
};