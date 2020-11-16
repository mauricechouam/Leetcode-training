/*
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
   var temp, previous;
   for (let i = 0; i < k; i++) {
     previous = nums[nums.length - 1];
     for (let j = 0; j < nums.length; j++) {
       temp = nums[j];
       nums[j] = previous;
       previous = temp;
     }
   }
 };