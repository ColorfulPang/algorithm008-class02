/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    var resultList = []
    if (!root) {
        return resultList
    }
    if (root.children) {
        root.children.forEach(function(child) {
            resultList = resultList.concat(postorder(child))
        })
    }
    resultList.push(root.val)
    return resultList
};