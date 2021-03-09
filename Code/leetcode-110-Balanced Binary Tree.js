/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    const compare = (node) => {
        if (!node) {
            return 0;
        }
        let leftDepth = compare(node.left);
        let rightDepth = compare(node.right);
        if (leftDepth === -1) {
            return -1;
        }
        if (rightDepth === -1) {
            return -1;
        }
        return Math.abs(leftDepth - rightDepth) > 1 ? -1 : 1 + Math.max(leftDepth, rightDepth);
    }

    return compare(root) !== -1;
};