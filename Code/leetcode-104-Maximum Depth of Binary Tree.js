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
var maxDepth = function (root) {
  let maxDepth = 0

  function getMax(node, depth) {
    if (node && node.left) {
      getMax(node.left, depth + 1)
    } else {
      maxDepth = depth > maxDepth ? depth : maxDepth
    }
    if (node && node.right) {
      getMax(node.right, depth + 1)
    } else {
      maxDepth = depth > maxDepth ? depth : maxDepth
    }
  }
  if (root) {
    getMax(root, 1)
  }
  return maxDepth
}