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
var inorderTraversal = function(root) {
    var resultList = []
    if (!root) {
        return resultList
    }

    if (root.left) {
        resultList = resultList.concat(inorderTraversal(root.left))
    }
    resultList.push(root.val)
    if (root.right) {
        resultList = resultList.concat(inorderTraversal(root.right))
    }
    return resultList
};