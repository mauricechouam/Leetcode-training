/*
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var tab =[];
    
    tab[0]=nums[0];
    for(let i=1; i<nums.length;i++){
        tab[i]= tab[i-1]+nums[i];
    }
    return tab;
    
};