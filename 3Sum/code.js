/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = []

	if (nums.length < 3) return results

	nums = nums.sort((a, b) => a - b)

	let target = 0

	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > target) break

		if (i > 0 && nums[i] === nums[i - 1]) continue

		let j = i + 1

		let k = nums.length - 1
		

		
	}

	return results
};