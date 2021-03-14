var CQueue = function() {
    this.stack1 = []
    this.stack2 = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    const stack1Len = this.stack1.length
    for(let i = 0; i < stack1Len; i++) {
        this.stack2.push(this.stack1.pop())
    }
    this.stack1.push(value)
    const stack2Len = this.stack2.length
    for(let i = 0; i < stack2Len; i++) {
        this.stack1.push(this.stack2.pop())
    }
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.stack1.length === 0) {
        return -1
    }
    return this.stack1.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */