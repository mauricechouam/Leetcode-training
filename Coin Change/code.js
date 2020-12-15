var coinChange = function(coins, amount) {
    if (amount === 0)
        return 0;

    const map = new Map();
    const res =  findAmountRecursive(coins, amount, 0, map);
    if (res > 99999) {
        return -1;
    } else {
        return res;
    }
    
};