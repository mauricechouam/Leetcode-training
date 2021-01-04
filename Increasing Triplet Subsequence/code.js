/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let one = Infinity;
    let two = Infinity;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= one) {
        one = nums[i];
      } else if (nums[i] <= two) {
        two = nums[i];
      } else {
        return true;
      }
    }
  
    return false;
  };