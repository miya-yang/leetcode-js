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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }
    let queue = [root];
    let result = [];

    while (queue.length) {
        let childQueue = [];
        let tempQueue = queue.slice();
        queue = [];
        tempQueue.forEach(item => {
            childQueue.push(item.val);
            item.left && queue.push(item.left);
            item.right && queue.push(item.right);
        });
        result.unshift(childQueue);
    }

    return result;
};