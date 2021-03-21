/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const compare = (left, right) => {
        if (!left && !right) {
            return true;
        } else if ((!left && right) || (left && !right)) {
            return false;
        } else if (left.val !== right.val) {
            return false;
        }
        return compare(left.left, right.right) && compare(left.right, right.left);
    }

    if (!root) {
        return true;
    }
    return compare(root.left, root.right);
};