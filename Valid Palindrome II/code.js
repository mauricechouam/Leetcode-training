/*
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let i = 0,
        j = s.length - 1;
    
    let errors = 1;
    
    while(i < j) {
        
        if(s[i] === s[j]) {
            i++;
            j--;
        } else if(s[i+1] === s[j] && s[i+2] === s[j-1] && errors){
            i++
            errors--
       } else if(s[j-1] === s[i] && errors){
           j--
           errors--;
        } else {
            return false
        }
    }
    return
};