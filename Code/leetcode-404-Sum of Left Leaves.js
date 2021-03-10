/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (!root) {
        return 0;
    }
    const compare = (node, isLeft = false) => {
        if (!node) {
            return 0;
        } else if (!node.left && !node.right) {
            return isLeft ? node.val : 0;
        }
        
        return compare(node.left, true) + compare(node.right, false);
    }
    return compare(root, false);
};
// @lc code=end

