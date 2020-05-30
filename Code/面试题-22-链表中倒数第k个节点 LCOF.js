/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let i = 0
    let point = head
    let prior = head
    while (point !== null) {
        if (i < k) {
            i++
        } else {
            prior = prior.next
        }
        point = point.next
    }
    return prior
};