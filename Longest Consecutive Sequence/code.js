/*
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length < 1) return 0;
    nums = nums.sort((a, b) => a - b);
    let currentMax = [nums[0]];
    let final = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
      let lastNum = currentMax[currentMax.length - 1];
      if (nums[i] === lastNum + 1) {
        currentMax = [...currentMax, nums[i]];
      } else if (nums[i] === lastNum) {
        continue;
      } else {
        currentMax = [nums[i]];
      }
      if (currentMax.length > final.length) {
        final = currentMax;
      }
    }
    return final.length;
  };