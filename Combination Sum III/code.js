/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res = [];
    let temp = [];
    let target = n;

    const fun = (sum, index) => {
        if (sum == target) {
            if(temp.length ==k) res.push([...temp]);
            return;
        }
        for (let i = index; i <= 9; i++) {
            if (sum + i <= target) {
                temp.push(i);
                fun(sum + i, i+1);
                temp.pop();
            }
        }
    }

    fun(0, 1);
    return res;
    
};