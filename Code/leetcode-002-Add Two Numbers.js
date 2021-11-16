/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    const node = new ListNode("head");
    let isCarry = false;
    let l1Cursor = l1;
    let l2Cursor = l2;
    let cur = node;
    
    while (l1Cursor && l2Cursor) {
        cur.next = new ListNode();
        cur = cur.next;
        let sum = isCarry ? l1Cursor.val + l2Cursor.val + 1 : l1Cursor.val + l2Cursor.val;
        isCarry = sum >= 10;
        cur.val = sum % 10;
        l1Cursor = l1Cursor.next;
        l2Cursor = l2Cursor.next;
    }

    while (l1Cursor) {
        cur.next = new ListNode();
        cur = cur.next;
        let sum = isCarry ? l1Cursor.val + 1 : l1Cursor.val;
        isCarry = sum >= 10;
        cur.val = sum % 10;
        l1Cursor = l1Cursor.next;
    }

    while (l2Cursor) {
        cur.next = new ListNode();
        cur = cur.next;
        let sum = isCarry ? l2Cursor.val + 1 : l2Cursor.val;
        isCarry = sum >= 10;
        cur.val = sum % 10;
        l2Cursor = l2Cursor.next;
    }

    if (isCarry) {
        cur.next = new ListNode(1);
    }

    return node.next;
};