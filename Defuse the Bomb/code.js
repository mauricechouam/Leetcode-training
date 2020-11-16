/*
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    
    var n = code.length;
       var answer = [];
       
       for (let i = 0; i < n; i++) {
           var sum = 0;
           
           if (k > 0) {
               for (let j = 0; j < k; j++) {
                   sum += code[(i + j + 1) % n];
               }
           } else if (k < 0) {
               for (let j = 0; j < -k; j++) {
                   sum += code[(i + n - j - 1) % n];
               }
           }
           
           answer[i] = sum;
       }
       
       return answer;
   
};