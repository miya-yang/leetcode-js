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
var levelOrder = function (root) {
  let result = []
  let nodeArr = [root]

  function BFS(arr) {
    if (arr.length === 0) {
      return false
    }
    nodeArr = []
    let tempArr = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] && arr[i].val !== null) {
        tempArr.push(arr[i].val)
      }
      if (arr[i] && arr[i].left !== null) {
        nodeArr.push(arr[i].left)
      }
      if (arr[i] && arr[i].right !== null) {
        nodeArr.push(arr[i].right)
      }
    }
    if (tempArr.length !== 0) {
      result.push(tempArr)
    }
    BFS(nodeArr)
  }
  BFS(nodeArr)
  return result
}