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
var preorderTraversal = function (root) {
  let result = []

  function DLR(node) {
    if (node && node.val !== null) {
      result.push(node.val)
    }
    if (node && node.left !== null) {
      DLR(node.left)
    }
    if (node && node.right !== null) {
      DLR(node.right)
    }
  }
  DLR(root)
  return result
}