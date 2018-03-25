/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
	for (var i = 0; i < nums.length; i++) {
		if (nums.indexOf(i) === -1) {
			if (nums.indexOf(i + 1) > -1) {
				return i;
			}
		}
	}
	return i;
};
