/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    nums.sort((a, b) => {
        return a - b;
    })
    let count = 0;
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (nums[i] + nums[j] === k) {
            count++;
            i++
            j--;
        } else if (nums[i] + nums[j] > k) {
            j--;
        } else {
            i++;
        }
    }
    return count;
};