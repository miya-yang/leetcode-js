/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.inStack = new Stack()
  this.outStack = new Stack()
}

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  // 如果 outStack 中有元素，将 outStack 中的元素出栈至 inStack
  if (this.outStack instanceof Stack && !this.outStack.isEmpty()) {
    let outStackSize = this.outStack.size()
    for (let i = 0; i < outStackSize; i++) {
      this.inStack.push(this.outStack.pop())
    }
  }
  if (this.inStack instanceof Stack) {
    this.inStack.push(x)
  }
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 如果 inStack 中有元素，将 inStack 中的元素出栈至 outStack
  if (this.inStack instanceof Stack && !this.inStack.isEmpty()) {
    let inStackSize = this.inStack.size()
    for (let i = 0; i < inStackSize; i++) {
      this.outStack.push(this.inStack.pop())
    }
  }
  if (this.outStack instanceof Stack) {
    return this.outStack.pop()
  }
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // 如果元素均在 inStack 中，则将其元素出栈至 outStack 返回 outStack.peek()
  if (this.inStack instanceof Stack && this.outStack instanceof Stack) {
    if (!this.inStack.isEmpty()) {
      let inStackSize = this.inStack.size()
      for (let i = 0; i < inStackSize; i++) {
        this.outStack.push(this.inStack.pop())
      }
    }
    return this.outStack.peek()
  }
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.inStack instanceof Stack && this.outStack instanceof Stack) {
    return this.inStack.isEmpty() && this.outStack.isEmpty()
  }
}

var Stack = function () {
  this.stack = []
}

Stack.prototype.push = function (e) {
  this.stack.push(e)
}

Stack.prototype.pop = function () {
  return this.stack.pop()
}

Stack.prototype.size = function () {
  return this.stack.length
}

Stack.prototype.isEmpty = function () {
  return this.stack.length === 0
}

Stack.prototype.peek = function () {
  return this.stack[this.stack.length - 1]
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */