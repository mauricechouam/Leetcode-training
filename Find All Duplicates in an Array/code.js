/*
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    
    let res = [];
   for (let i=0;i<nums.length;i++) {
       while(nums[i] != nums[nums[i]-1]) {
           let temp = nums[i];
           nums[i] = nums[nums[i]-1];
           nums[temp-1] = temp;
       }
   }
   
   for (let i=0;i<nums.length;i++) {
       if (nums[i] != i+1) {
           res.push(nums[i]);
       }
   }
   
   return res;
};
