/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }
    let result = false;
    const compare = (node, count) => {
        if (node && !node.left && !node.right) {
            result = result || targetSum === count + node.val;
        }
        node.left && compare(node.left, count + node.val);
        node.right && compare(node.right, count + node.val);
    }
    compare(root, 0);
    return result;
};
// @lc code=end

