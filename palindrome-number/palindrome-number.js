/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    return parseFloat(x.toString().split('').reverse().join('')) === x;
};    
    