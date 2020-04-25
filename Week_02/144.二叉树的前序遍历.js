/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var resultList = []
    if (!root) {
        return resultList
    }
    resultList.push(root.val)
    if (root.left) {
        resultList = resultList.concat(preorderTraversal(root.left))
    }
    if (root.right) {
        resultList = resultList.concat(preorderTraversal(root.right))
    }
    return resultList
};