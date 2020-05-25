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
var reverseList = function(head) {
    let prior = head
    let isFirst = true
    let nHead = null
    while (head !== null) {
        let n = new ListNode()
        n.val = head.val
        n.next = prior
        if (isFirst) {
            n.next = null
            isFirst = false
        }
        prior = n
        head = head.next
        if (head === null) {
            nHead = n
        }
    }
    return nHead
};