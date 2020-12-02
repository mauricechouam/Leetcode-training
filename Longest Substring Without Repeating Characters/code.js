/*
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let start = 0, max = 0, map = {};
for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
        map = {};
        start++;
        i = start;
    }

    map[s[i]] = true;
    max = Math.max(max, i - start + 1);
}

return max;
};

