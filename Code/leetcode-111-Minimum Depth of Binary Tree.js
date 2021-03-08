/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    let minDeep = 1;
    let queue = [root];

    while (queue.length) {
        let tempQueue = queue.slice();
        queue = [];
        for (let i = 0; i < tempQueue.length; i++) {
            const item = tempQueue[i];
            if (!item.left && !item.right) {
                return minDeep;
            }
            item.left && queue.push(item.left);
            item.right && queue.push(item.right);
        }
        minDeep++;
    }
    return minDeep;
};
// @lc code=end

