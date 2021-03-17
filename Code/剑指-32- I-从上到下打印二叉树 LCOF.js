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
var levelOrder = function(root) {
    let result = [];
    if (!root) {
        return result;
    }
    let queue = [root];
    while (queue.length) {
        let tempQueue = [];
        for (let i = 0; i < queue.length; i++) {
            let item = queue[i];
            result.push(item.val);
            item.left && tempQueue.push(item.left);
            item.right && tempQueue.push(item.right);
        }
        queue = tempQueue;
    }
    return result;
};