/*
  @param {string} a
  @param {string} b
  @return {boolean}
 */
var isAnagram = function(a, b) {
    
    if(a.length!==b.length) {return false} 
        
      y = a.split("").sort();
      z = b.split("").sort();
        
      if(y.length==z.length) {
          
       for (i=0; i<y.length; i++) {
           
        if (y[i]!==z[i]){
            
         return false;
        }
       }
       return true;
      } 
            
        };
        