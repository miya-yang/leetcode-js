/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.backup = nums.slice()
    this.data = nums.slice()
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.data = this.backup.slice()
    return this.data
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for (let i = 0, len = this.data.length; i < len; i++) {
        let ranIndex = parseInt(Math.random() * ((len-1) - i + 1) + i)
        let temp = this.data[i]
        this.data[i] = this.data[ranIndex]
        this.data[ranIndex] = temp
    }
    return this.data
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */