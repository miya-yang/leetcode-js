/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    if (nums.length === 1) {
        return new TreeNode(nums[0]);
    }
    let max = Math.max.call(this, ...nums);
    let node = new TreeNode(max);
    let i = nums.indexOf(max);
    let left = nums.slice(0, i);
    let right = nums.slice(i + 1);

    node.left = constructMaximumBinaryTree(left);
    node.right = constructMaximumBinaryTree(right);

    return node;
};