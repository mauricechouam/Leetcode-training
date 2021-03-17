/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    var  zero = 0;
    while(left <= right) {
        if(nums[left] === 0) {
            let temp = nums[zero];
            nums[zero] = nums[left];
            nums[left] = temp;
            left++;
            zero++;
        } else if(nums[left] === 2) {
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            right--;
        } else {
            left++
        }
    }
    return nums;
};