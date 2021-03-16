/*
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    let result = 1;
    while (result*result <= x) result++;
    return result - 1;
};
    