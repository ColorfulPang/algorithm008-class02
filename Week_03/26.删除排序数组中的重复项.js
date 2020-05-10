/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeDuplicates = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        let checkedVal = nums[i]
        for (let j = nums.length - 1; j > i; j--) {
            if (nums[j] === checkedVal) {
                nums.splice(j, 1)
            }
        }
    }
};