/*
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let ordered = heights.slice().sort(function(a, b) {
    return a-b;
  })
  
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (ordered[i] !== heights[i]) {
      count += 1
    };
  };
    return count
};