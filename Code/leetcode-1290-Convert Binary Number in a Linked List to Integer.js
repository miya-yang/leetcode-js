/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let num = 0
    while (head !== null) {
        num = num * 2 + Number(head.val)
        head = head.next
    }
    return num
};