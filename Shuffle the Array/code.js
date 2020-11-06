/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var t =[];
    t[0]=nums[0];
    var j=0
    for(let i=0;i<nums.length;i++){
        
        if(i%2==0){
            t[i]=nums[j];
        }
        else{
            t[i]=nums[n+j]
            j++
      }     
    }
  
    return t;
};