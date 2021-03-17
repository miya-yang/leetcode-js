/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode('head');
    let cur = head;
    while (l1 && l2) {
        let node = new ListNode();
        if (l1.val <= l2.val) {
            node.val = l1.val;
            l1 = l1.next;
        } else {
            node.val = l2.val;
            l2 = l2.next;
        }
        cur.next = node;
        cur = cur.next;
    }
    if (l1) {
        cur.next = l1;
    }
    if (l2) {
        cur.next = l2;
    }
    return head.next;
};