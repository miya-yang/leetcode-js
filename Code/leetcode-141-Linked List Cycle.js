/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  let slowIndex = head
  let quickIndex = head

  while (quickIndex && quickIndex.next && quickIndex.next) {
      quickIndex = quickIndex.next.next
      slowIndex = slowIndex.next

      if (slowIndex == quickIndex) {
          return true
      }
  }

  return false
};