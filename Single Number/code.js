var singleNumber = function(nums) {
    
    var temp =nums[0];
    for (let i=1; i<nums.length;i++){
        temp ^=nums[i];
    }
     return temp;
    
 };