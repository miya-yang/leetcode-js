/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const compare = (pp, qq) => {
        if (!pp && !qq) {
            return true;
        } else if ((!pp && qq) || (pp && !qq) || (pp.val !== qq.val)) {
            return false;
        }
        return compare(pp.left, qq.left) && compare(pp.right, qq.right);
    }

    return compare(p, q);
};