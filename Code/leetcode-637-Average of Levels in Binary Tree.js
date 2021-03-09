/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if (!root) {
        return [];
    }
    let result = [];
    let queue = [root];
    while (queue.length) {
        let tempQueue = [];
        let average = 0;
        for (let i = 0; i < queue.length; i++) {
            average += queue[i].val;
            queue[i].left && tempQueue.push(queue[i].left);
            queue[i].right && tempQueue.push(queue[i].right);
        }
        result.push(average / queue.length);
        queue = tempQueue;
    }
    return result;
};
// @lc code=end

