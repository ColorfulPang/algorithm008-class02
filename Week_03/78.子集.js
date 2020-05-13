/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]]

    for (let num of nums) {
        let newsets = []
        for (let subset of result) {
            newsets.push(subset.concat([num]))
        }
        result = result.concat(newsets)
    }
    return result
};
