/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numJson = {}
    for (let item of nums) {
        numJson[item] = numJson[item]? ++numJson[item]: 1
        if (numJson[item] > nums.length/2) {
          return item
        }
    }

    for (let item in numJson) {
      if (numJson[item] > nums.length/2) {
        return item
      }
    }
};