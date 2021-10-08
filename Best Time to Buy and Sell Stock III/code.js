/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let t1Cost = Infinity;
    let t2Cost = Infinity;
    let t1Profit = 0;
    let t2Profit = 0;
    for (let i = 0; i < prices.length; i++)
    {
        t1Cost = Math.min(t1Cost, prices[i]);
        t1Profit = Math.max(t1Profit, prices[i] - t1Cost);

        t2Cost = Math.min(t2Cost, prices[i] - t1Profit);
        
    }

    
}