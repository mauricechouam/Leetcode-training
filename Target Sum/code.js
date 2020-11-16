/*
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
 
    let count=0;
    var recursion = (i, acc) => {
        if(i==nums.length) {
            if(acc==S) count++;
            return;
        }
        recursion(i+1,acc+nums[i])
        recursion(i+1,acc-nums[i])
    }
    recursion(0, 0);
    return count;
};
    
