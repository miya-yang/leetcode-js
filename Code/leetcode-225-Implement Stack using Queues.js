/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = new Queue()
}

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x)
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  for (let i = 0; i < this.queue.size() - 1; i++) {
    this.queue.push(this.queue.pop())
  }
  return this.queue.pop()
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  for (let i = 0; i < this.queue.size() - 1; i++) {
    this.queue.push(this.queue.pop())
  }
  let top = this.queue.peek()
  this.queue.push(this.queue.pop())
  return top
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.isEmpty()
}

var Queue = function () {
  this.queue = []
}

Queue.prototype.push = function (e) {
  this.queue.push(e)
}

Queue.prototype.pop = function () {
  return this.queue.shift()
}

Queue.prototype.peek = function () {
  return this.queue[0]
}

Queue.prototype.size = function () {
  return this.queue.length
}

Queue.prototype.isEmpty = function () {
  return this.queue.length === 0
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */