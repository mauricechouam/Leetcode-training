/*
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    
    if (s.length === 0) return 0;
    for (let left = 0, right = s.length - 1; left < right; ++left, --right) {
      if (s[left] !== s[right]) return 2;
    }
    return 1;
          
  };
      