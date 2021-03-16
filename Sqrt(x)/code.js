/*
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    var result = 1;
    while (result*result <= x) result++;
    return result - 1;
};
    