/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    let result = [];
    let toRight = true;
    let queue = [root];

    while (queue.length) {
        let tempQueue = [];
        let subRes = [];
        for (let i = 0; i < queue.length; i++) {
            let item = queue[i];
            item.left && tempQueue.push(item.left);
            item.right && tempQueue.push(item.right);
            if (toRight) {
                subRes.push(item.val);
            } else {
                subRes.unshift(item.val);
            }
        }
        toRight = !toRight;
        result.push(subRes);
        queue = tempQueue;
    }
    
    return result;
};