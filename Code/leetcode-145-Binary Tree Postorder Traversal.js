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
var postorderTraversal = function (root) {
  let result = []

  function LRD(node) {
    if (node && node.left) {
      LRD(node.left)
    }
    if (node && node.right) {
      LRD(node.right)
    }
    if (node && node.val !== null) {
      result.push(node.val)
    }
  }
  LRD(root)
  return result
}