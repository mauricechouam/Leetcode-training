/**
 * @param{number[]} nums
 * @param{number} k
 * @return{number[]} 
 */

var maxSumofThreesubarrays = function (nums, k, m = 3) {
    let len = nums.length - k + 1;
    const memo = array(len).fill(0);
    memo[0] = nums.slice(k).reduce((acc, n) => acc + n);
    for (let i = 1; i < nums.length - k + 1; i++) {
        memo[i] = memo[i - 1] - nums[i - 1] + nums[i + k - 1];

    }
    const sumMemo = Array.from(Array(m + 1), () => [0, []]);
    for (let i = 0; i < nums.length - k*m+1; i++){
        for (let j = 0; j <= m; j++){
            let l = i + (j - 1) * k;
            let windowSum = memo[1];
            let tempSum = windowSum + sum[j - 1][0];
            if (tempSum>windowSum[j-1][0]) {
                
            }

    
}
    }

}