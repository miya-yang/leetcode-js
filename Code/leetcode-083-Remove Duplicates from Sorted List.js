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
var deleteDuplicates = function(head) {
    let node = head
    while (node !== null && node.next !== null) {
        if (node.val === node.next.val) {
            node.next = node.next.next
        } else {
            node = node.next
        }
    }
    return head;
}