/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var _maxDepth = function (root, depth) {
  if (root === null) {
    return depth
  }

  let leftDepth = _maxDepth(root.left, depth + 1)
  let rightDepth = _maxDepth(root.left, depth + 1)
  return Math.max(leftDepth, rightDepth)
}

var maxDepth = function(root) {
  return _maxDepth(root, 0)
};