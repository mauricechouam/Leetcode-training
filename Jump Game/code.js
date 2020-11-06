/*
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    
    if(nums.length === 1 && nums[0] === 0){return true}
    let lastVal = 0,result=false;
    for(let i=nums.length-2;i>=0;i--){
        if(nums[i]>lastVal){
            lastVal = 0;
        }else{
            lastVal+=1;
        }
    }
    return !lastVal
    
};