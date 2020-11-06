/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let min = 0 // index of the minimum value
    let mid;
  
    // find index of the min value
    while (start <= end) {
        mid = ~~((start + end) / 2);
        if (nums[mid] < nums[min]) min = mid;
        else if (nums[mid] > nums[end]) start = mid + 1;
        else end = mid - 1;
    }
    if(target < nums[0]) {
        start = min;
        end = nums.length-1;
    } else {
        start = 0;
        // if min = 0 set end to last index b/c the array is sorted.
        end = min || nums.length-1;
    }
    
    while(start <= end) {
        mid = ~~((start+end)/2);
        if(nums[mid] === target) return mid;
        if(nums[mid] > target) end = mid-1;
        else start = mid+1;
    }
    return -1;
};