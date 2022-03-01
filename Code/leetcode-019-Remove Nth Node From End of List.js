/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let headNode = new ListNode(null, head)
  let firstIndex = headNode
  let lastIndex = headNode
  for (let i = 0; i < n; i++) {
      firstIndex = firstIndex.next
  }
  if (firstIndex) {
      while(firstIndex.next) {
          firstIndex = firstIndex.next
          lastIndex = lastIndex.next
      }
      lastIndex.next = lastIndex.next.next
  } else {
      headNode.next = null
  }
  return headNode.next
};