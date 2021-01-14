/*
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
        
    const size = nums.length;
 for(let i= 0; i < size; i++) {
     let val = nums[i];
     while(1 <= val <= size && nums[val-1] !== val ) {
         [nums[val-1], nums[i]] = [nums[i], nums[val-1]];
         val = nums[i];
     }
 }
 for(let i=0; i <= size; i++) {
     if(nums[i] !== i+1) {
         return i+1;
     } 
 }
 return 1;
};