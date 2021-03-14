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
    let point = head
    let hNode = null
    while (point !== null) {
        let node = new ListNode(point.val)
        node.next = hNode
        hNode = node
        point = point.next
    }
    return hNode
};