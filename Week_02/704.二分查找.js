/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftIndex = 0
    let rightIndex = nums.length - 1

    while(leftIndex <= rightIndex) {
        let leftNum = nums[leftIndex]
        let rightNum = nums[rightIndex]

        if (target === leftNum) {
            return leftIndex
        }
        if (target === rightNum) {
            return rightIndex
        }

        if (target < leftNum) {
            return -1
        }

        if (target > rightNum) {
            return -1
        }

        let index = Math.ceil((leftIndex + rightIndex)/2)
        if (target === nums[index]) {
            return index
        }

        if (target > nums[index]) {
            leftIndex = index
            rightIndex--
            continue
        }

        if (target < nums[index]) {
            leftIndex++
            rightIndex = index
            continue
        }
        leftIndex++
        return -1
    }
    return -1
};


console.log(search([5], 5))