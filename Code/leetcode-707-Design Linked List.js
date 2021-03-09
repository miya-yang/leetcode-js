/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.NodeList = function(val) {
        this.val = val;
        this.next = null;
    }
    this.head = new this.NodeList('head');
    this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index >= 0 && index < this.length) {
        let i = 0;
        let cur = this.head;
        while (cur.next) {
            if (i === index) {
                return cur.next.val;
            } else {
                cur = cur.next;
                i++;
            }
        }
    } else {
        return -1;
    }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new this.NodeList(val);
    node.next = this.head.next;
    this.head.next = node;
    this.length++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new this.NodeList(val);
    let cur = this.head;
    while (cur.next) {
        cur = cur.next;
    }
    cur.next = node;
    this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === this.length) {
        this.addAtTail(val);
    } else if (index < 0) {
        this.addAtHead(val);
    } else if (index >= 0 && index < this.length) {
        let i = 0;
        let cur = this.head;
        while (cur.next) {
            if (i === index) {
                let node = new this.NodeList(val);
                node.next = cur.next;
                cur.next = node;
                this.length++;
                break;
            } else {
                cur = cur.next;
                i++;
            }
        }
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= 0 && index < this.length) {
        let i = 0;
        let cur = this.head;
        while (cur.next) {
            if (i === index) {
                cur.next = cur.next.next;
                this.length--;
                break;
            } else {
                cur = cur.next;
                i++;
            }
        }
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

