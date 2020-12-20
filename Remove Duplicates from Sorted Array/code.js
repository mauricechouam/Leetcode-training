/*
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    let hashmap = {};
    let i = 0;
    while (i < nums.length) {
        if (hashmap[nums[i]]) {
            nums.splice(i, 1);
        } else {
            hashmap[nums[i]] = 1;
            i++;
        }
    }
    return nums.length;
};