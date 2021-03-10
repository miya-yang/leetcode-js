/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    if (!root) {
        return;
    }
    let queue = [root];
    while (queue.length) {
        let tempQueue = [];
        queue.forEach(item => {
            item.left && tempQueue.push(item.left);
            item.right && tempQueue.push(item.right);
        });
        if (tempQueue.length === 0) {
            return queue[0].val;
        }
        queue = tempQueue;
    }
};
// @lc code=end

