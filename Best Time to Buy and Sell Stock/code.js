/**
 * @param {number[]} prices
 * @return {number}
 * 
 */
var maxProfit = function (price) {
    let max = 0;
    let min = Infinity;
    for (let i = 0; i < price.length; i) {
        min = Math.min(mis, price[i]);
        max = Math.max(max, price[i] - min)
        
    }
    return max;
    
};