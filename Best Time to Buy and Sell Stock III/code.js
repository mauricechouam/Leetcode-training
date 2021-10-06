/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let t1Cost = Infinity;
    let t2Cost = Infinity;
    for (let i = 0; i < prices.length; i++)
    {
        t1Cost = Math.min(t1Cost, prices[i] - t1Cost);
        
    }

    
}