/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.hashMap = []
    this.hash = 10000
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let index = key % this.hash
    if (this.hashMap[index] === null) {
        this.hashMap[index] = key
    } else if (this.hashMap[index] instanceof Array) {
        if (this.hashMap[index].indexOf(key) === -1) {
            this.hashMap[index].push(key)
        }
    } else {
        let temp = this.hashMap[index]
        if (temp !== key) {
            this.hashMap[index] = [temp, key]
        }
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let index = key % this.hash
    if (this.hashMap[index] === null) {
        return false
    } else if (this.hashMap[index] instanceof Array) {
        if (this.hashMap[index].indexOf(key) > -1) {
            this.hashMap[index].splice(this.hashMap[index].indexOf(key), 1)
        }
    } else if (this.hashMap[index] === key) {
        this.hashMap[index] = null
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let index = key % this.hash
    if (this.hashMap[index] === null) {
        return false
    } else if (this.hashMap[index] instanceof Array) {
        return this.hashMap[index].indexOf(key) > -1
    } else {
        return this.hashMap[index] === key
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */