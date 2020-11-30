/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    
    return next(0, nums.length - 1);
      
      function next(l, r) {
        if (l > r) return null;
        let maxIndex = -1, max = -Infinity;
        for (let i = l; i <= r; i++) {
          if (nums[i] > max) {
            maxIndex = i;
            max = nums[i];
          }
        }
        return {
          val: max,
          left: next(l, maxIndex - 1),
          right: next(maxIndex + 1, r)
        }
      }
    };
       