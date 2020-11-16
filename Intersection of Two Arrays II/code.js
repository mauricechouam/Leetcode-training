/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const result = [];

 let base = (nums1.length >= nums2.length) ? nums1 : nums2;
 let cover = (nums1.length >= nums2.length) ? nums2 : nums1;

 const coverCounts = countNums(cover);

 for (let num of base) {
   if (coverCounts[num] && coverCounts[num] !== 0) {
     result.push(num);
     coverCounts[num]--;
   }
    }
    
  return result;
}

