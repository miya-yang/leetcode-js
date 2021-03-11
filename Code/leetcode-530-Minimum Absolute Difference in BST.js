/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function(root) {
    let result = [];
    let min = Number.MAX_VALUE;
    const compare = (node) => {
        if (!node) {
            return;
        }
        compare(node.left);
        result.push(node.val);
        compare(node.right);
    }
    compare(root);
    for (let i = result.length - 1; i > 0; i--) {
        min = Math.min(result[i] - result[i - 1], min);
    }
    return min;
};
// @lc code=end

