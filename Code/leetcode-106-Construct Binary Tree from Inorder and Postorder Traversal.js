/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

    const computed = (ino, posto) => {
        if (ino.length === 0) {
            return null;
        }
        let nodeVal = posto.pop();
        const node = new TreeNode(nodeVal);
        if (ino.length === 1) {
            return node;
        }
        let i = ino.indexOf(nodeVal);
        let inoLeft = ino.slice(0, i);
        let inoRight = ino.slice(i + 1);
        let postoLeft = posto.slice(0, inoLeft.length);
        let posoRight = posto.slice(inoLeft.length);
        node.left = computed(inoLeft, postoLeft);
        node.right = computed(inoRight, posoRight);
        return node;
    }

    return computed(inorder, postorder);
};