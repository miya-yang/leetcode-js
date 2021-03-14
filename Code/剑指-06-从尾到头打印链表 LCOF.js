/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let result = [];
    let cur = head;
    while (cur) {
        result.push(cur.val);
        cur = cur.next;
    }
    return result.reverse();
};