/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let index = 0
  let indexNode = head
  let midNode = head

  while (indexNode.next !== null) {
    indexNode = indexNode.next
    if (index % 2 === 0) {
      midNode = midNode.next
    }
    index++
  }
  return midNode
}