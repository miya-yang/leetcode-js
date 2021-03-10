/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (inorder.length === 0) {
        return null;
    }
    const nodeVal = preorder.shift();
    const node = new TreeNode(nodeVal);
    if (inorder.length === 1) {
        return node;
    }
    const i = inorder.indexOf(nodeVal);
    const inLeft = inorder.slice(0, i);
    const inRight = inorder.slice(i + 1);
    const preLeft = preorder.slice(0, inLeft.length);
    const preRight = preorder.slice(inLeft.length);

    node.left = buildTree(preLeft, inLeft);
    node.right = buildTree(preRight, inRight);

    return node;
};