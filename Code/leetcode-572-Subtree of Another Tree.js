/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if (!s) {
        return false;
    }
    const compare = (p, q) => {
        if (!p && !q) {
            return true;
        } else if ((!p && q) || (p && !q) || (p.val !== q.val)) {
            return false;
        }
        return compare(p.left, q.left) && compare(p.right, q.right);
    }
    let queue = [s];
    const map = (node) => {
        if (!node) {
            return;
        }
        while(queue.length) {
            let tempQueue = [];
            for (let i = 0; i < queue.length; i++) {
                let item = queue[i];
                if (compare(item, t)) {
                    return true;
                }
                item.left && tempQueue.push(item.left);
                item.right && tempQueue.push(item.right);
            }
            queue = tempQueue;
        }
        return false;
    }
    return map(s);
};