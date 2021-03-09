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
 * @return {number}
 */
var countNodes = function(root) {
    if (!root) {
        return 0;
    }
    let nodeCount = 0;
    const map = (node) => {
        if (!node) {
            return;
        }

        node.left && map(node.left);
        node.right && map(node.right);
        nodeCount++;
    }
    map(root);
    return nodeCount;
};