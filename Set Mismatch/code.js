/*
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var dup = -1, missing = -1;
     for (let i = 1; i <= nums.length; i++) {
         var count = 0;
         for (let j = 0; j < nums.length; j++) {
             if (nums[j] == i)
                 count++;
         }
         if (count == 2)
             dup = i;
         else if (count == 0)
             missing = i;
     }
     return [dup,missing];
 };
   