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
const findAmountRecursive = (coins, amount, index, mem) => {
    if (amount < 0)
        return Number.MAX_SAFE_INTEGER;

    if (amount === 0)
        return 0;

    if (!mem.has(amount)) {
        const minCountLevel = coins.reduce((prevMin, coin, index) => {
            if (coin <= amount) {
                return Math.min(
                    prevMin,
                    findAmountRecursive(coins, amount - coin, index, mem) + 1
                );
            }
            
            return prevMin;
        }, Number.MAX_SAFE_INTEGER);
        
        mem.set(amount, minCountLevel);
    }
    
    return mem.get(amount);
};