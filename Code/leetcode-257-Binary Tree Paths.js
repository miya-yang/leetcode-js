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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) {
        return [];
    }
    const result = [];
    const compare = (node, str) => {
        str = str ? str + '->' + node.val : node.val + '';
        if (!node.left && !node.right) {
            result.push(str);
        } else {
            node.left && compare(node.left, str);
            node.right && compare(node.right, str);
        }
    }
    compare(root, '');
    return result;
};