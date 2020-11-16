/*
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(a, b) {
    
    if(b==0)      return 1            // base case  
    else if(b==1) return a           // base case 
    else if(b==-1)  return 1/a
      
    else if(b%2==0){
            let t=myPow(a, b/2);
        return t*t
    }
    else if(b%2!=0){
            return a*myPow(a,b-1)
    }
      
  };