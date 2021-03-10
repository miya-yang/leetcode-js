/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if (!root) {
        return [];
    }
    let result = [];
    const compare = (node, count, path) => {
        if (node && !node.left && !node.right) {
            if (count + node.val === targetSum) {
                path = path !== '' ? path + ',' + node.val : node.val + '';
                result.push(path.split(','));
            }
        } else {
            node.left && compare(node.left, count + node.val, path !== '' ? path + ',' + node.val : node.val);
            node.right && compare(node.right, count + node.val, path !== '' ? path + ',' + node.val : node.val);
        }
    }
    compare(root, 0, '');
    return result;
};
// @lc code=end

