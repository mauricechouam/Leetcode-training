/*
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    
    var cnt=0;
    for(let i=0;i<rating.length-2;i++)
        for(let j=i+1;j<rating.length-1;j++){
            if(rating[i]<rating[j]){
                for(let k=j+1;k<rating.length;k++){
                    if(rating[j]<rating[k]) cnt++;
                }
            }
            else{
                for(let k=j+1;k<rating.length;k++){
                    if(rating[j]>rating[k]) cnt++;
                }
            }
        }
    
    return cnt;
};
