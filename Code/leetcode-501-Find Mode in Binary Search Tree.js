/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function(root) {
    let map = {};
    let result = [];
    const compare = (node) => {
        if (!node) {
            return;
        }
        compare(node.left);
        map[node.val] = map[node.val] ? map[node.val] + 1 : 1;
        compare(node.right);
    }
    compare(root);
    const mapKeysArr = Object.keys(map);
    const mapArr = mapKeysArr.map(item => map[item]);
    const maxCount = Math.max.apply(null, mapArr);
    mapKeysArr.forEach(item => {
        if (map[item] == maxCount) {
            result.push(item);
        }
    })
    return result;
};
// @lc code=end

