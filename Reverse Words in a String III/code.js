/*
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var t=s.split(" ");
    
    var f=[];
   for (let i=0;i<t.length;i++){
      f[i] = t[i].split("").reverse().join('')     
   } 
    return f.join(' ')
};