/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let result = [];
    const computed = (node) => {
        if (!node) {
            return;
        }
        computed(node.left);
        result.push(node.val);
        computed(node.right);
    }
    computed(root);
    for (let i = 1; i < result.length; i++) {
        if (result[i] <= result[i - 1]) {
            return false;
        }
    }
    return true;
};
// @lc code=end

