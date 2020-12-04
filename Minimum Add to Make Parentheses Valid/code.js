/*
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let open = 0, close = 0;
      
      for(let c of S) {
          if(c === '(') open++;
          else if(!open) close++;
          else open--;
      }
      return open + close;
  };
    