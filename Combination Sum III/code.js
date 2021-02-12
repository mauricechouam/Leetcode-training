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
     
    }

    
    
};