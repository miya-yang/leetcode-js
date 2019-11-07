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
var inorderTraversal = function (root) {
  let result = []

  function LDR(node) {
    if (node && node.left) {
      LDR(node.left)
    }
    if (node && node.val !== null) {
      result.push(node.val)
    }
    if (node && node.right) {
      LDR(node.right)
    }
  }
  LDR(root)
  return result
}