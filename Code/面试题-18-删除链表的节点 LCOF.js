/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    let point = head.next
    let prior = head
    if (head.val === val) {
        return point ? point : null
    } else {
        while (point !== null) {
            if (point.val === val) {
                prior.next = point.next
                break
            }
            point = point.next
            prior = prior.next
        }
    }
    return head
};