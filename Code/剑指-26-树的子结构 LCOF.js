/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if (!A || !B) {
        return false;
    }

    const dfs = (aa, bb) => {
        if (!bb) {
            return true;
        }
        if (!aa) {
            return false;
        }
        if (aa.val !== bb.val) {
            return false;
        }
        return dfs(aa.left, bb.left) && dfs(aa.right, bb.right);
    }

    return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};