/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	while (1) {
		var index = nums.indexOf(val);
		if (index > -1) {
			nums.splice(index, 1);
		} else {
			break;
		}
	}
	return nums.length;
};
