/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let results = []
    let cachesMap = new Map()
    for (let n in strs) {
        let str = strs[n]
        let index = results.length

        // 存储排序后，用于查询
        let sortedStr = str.split('').sort().join('')
        // 先存储数据
        if (!cachesMap.has(sortedStr)) {
            results[index] = [ str ]
            // 存储排序后缓存
            cachesMap.set(sortedStr, index)
        } else {
            index = cachesMap.get(sortedStr)
            results[index].push(str)
        }
    }
    return results
};