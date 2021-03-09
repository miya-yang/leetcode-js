/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    let result = [];
    let queue = [root];
    while (queue.length) {
        let tempQueue = [];
        let queueVal = [];
        queue.forEach(item => {
            item.children && item.children.forEach(item2 => {
                tempQueue.push(item2);
            });
            queueVal.push(item.val);
        });
        result.push(queueVal);
        queue = tempQueue;
    }
    return result;
};
// @lc code=end

