/*
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {    
    if (dividend === Math.pow(-2, 31) && divisor === -1) return Math.pow(2, 31) - 1;
    
    const negative = dividend < 0 && divisor > 0 || divisor < 0 && dividend > 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    if (divisor === 1) return negative ? -dividend : dividend;
    
    let quo = 0;
    
    while (dividend >= divisor) {
        dividend -= divisor;
        quo++;
    }
    
    return negative ? -quo : quo;
};