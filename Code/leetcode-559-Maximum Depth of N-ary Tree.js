/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    let deepCount = 0;
    let queue = [root];
    while (queue.length) {
        deepCount++;
        const childQueue = [];
        queue.forEach(item => {
            if (item) {
                childQueue.push(...item.children);
            }
        });
        queue = childQueue;
    }
    return deepCount;
};