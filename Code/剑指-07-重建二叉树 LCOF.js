/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }
    let nodeVal = preorder.shift();
    let node = new TreeNode(nodeVal);
    if (preorder.length === 0) {
        return node;
    }
    let index = inorder.indexOf(nodeVal);
    let inoLeftTree = inorder.slice(0, index);
    let inoRightTree = inorder.slice(index + 1);
    let preLeftTree = preorder.slice(0, inoLeftTree.length);
    let preRightTree = preorder.slice(inoLeftTree.length);
    node.left = buildTree(preLeftTree, inoLeftTree);
    node.right = buildTree(preRightTree, inoRightTree);
    return node;
};