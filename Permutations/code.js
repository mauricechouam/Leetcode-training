/*
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let result = [];
permuteHelper(nums, 0);
return result;
function permuteHelper(nums, left){
    if(left == nums.length-1){
        result.push([...nums])
    } else {
        for(let i=left;i<nums.length;i++){
            [nums[left], nums[i]] = [nums[i], nums[left]];
            permuteHelper(nums, left+1);
            [nums[left], nums[i]] = [nums[i], nums[left]];
        }
    }
}
};