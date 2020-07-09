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

// 解法 2
var levelOrder = function(root) {
  let result = []
  if (!root) {
      return result
  }
  let curr = [] // 用于存储当前层级的结点
  let last = [] // 用于存储下一层级的结点
  let queue = [root]
  while (queue.length > 0 || last.length > 0) {
      if (queue.length === 0) {
          result.push(curr)
          queue = last
          curr = []
          last = []
      }
      let p = queue.shift()
      if (p) {
          curr.push(p.val)
          last.push(p.left)
          last.push(p.right)
      }
  }
  return result
}