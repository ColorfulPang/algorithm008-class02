/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    var resultList = []
    if (!root) {
        return resultList
    }
    resultList.push(root.val)
    if (root.children) {
        root.children.forEach(function(child) {
            if (child.children) {
                resultList = resultList.concat(preorder(child))
            }
        })
    }
    return resultList
};

