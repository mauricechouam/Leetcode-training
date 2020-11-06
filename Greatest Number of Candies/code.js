/*
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var s=[];
    var max=candies[0];
    for(i=1;i<candies.length;i++){
        if(candies[i]>max){max =candies[i]}; 
    }
    for(i=0;i<candies.length;i++){
        if((candies[i]+extraCandies)>= max){
            s[i]= true; 
        }else 
        {
            s[i]=false;
        } 
    }
    return s
    
};
