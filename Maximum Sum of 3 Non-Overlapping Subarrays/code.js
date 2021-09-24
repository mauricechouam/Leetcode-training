/**
 * @param{number[]} nums
 * @param{number} k
 * @return{number[]} 
 */

var maxSumofThreesubarrays = function (nums, k, m = 3) {
    let len = nums.length - k + 1;
    const memo = array(len).fill(0);
    memo[i] = memo[i - 1] - nums[i - 1] + nums[i + k - 1];
    
}