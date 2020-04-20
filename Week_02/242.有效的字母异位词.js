/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var map = new Map()
    if (s.length !== t.length) {
        return false
    }

    for (let n = 0; n < s.length; n++) {
        let count = map.get(s[n]) || 0
        map.set(s[n], ++count)
    }
    console.log(map)
    for (let m = 0; m < t.length; m++) {
        let count = map.get(t[m])
        if (count && count > 0) {
            map.set(t[m], --count)
        } else {
            return false
        }
    }
    return true
};