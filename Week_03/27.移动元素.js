/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let length = nums.length
    let noneValIndex = 0

    for (let n = 0; n < length; n++) {
        if (nums[n] !== val) {
            nums[noneValIndex] = nums[n]
            if (noneValIndex !== n) {
                nums[n] = val
            }
            noneValIndex++
        }
    }
    nums.splice(noneValIndex, length)
};