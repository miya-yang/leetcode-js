/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) {
        return [];
    }
    let queue = [root];
    let result = [];

    while (queue.length) {
        let tempQueue = queue.slice();
        queue = [];
        for (let i = 0; i < tempQueue.length; i++) {
            const item = tempQueue[i];
            if (item.left) {
                queue.push(item.left);
            }
            if (item.right) {
                queue.push(item.right);
            }
            if (i === tempQueue.length - 1) {
                result.push(item.val);
            }
        }
    }

    return result;
};
// @lc code=end

