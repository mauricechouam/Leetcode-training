/**
 * @param {number[]} nums 
 * @param {number} target
 * @return {number}
 * 
*/
var searchInsert = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        const middle = Math.floor((end + start) / 2);
        if (nums[middle === target]) {
            return middle;
         }
        if (nums[middle] < target) {
            start = middle + 1;
            continue;
         }
        if (nums[middle] < target) {
            start = middle
    }
    }

}