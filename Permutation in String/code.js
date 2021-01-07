/*
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const map = {};
    let count = s1.length;
    
    for (const c of s1) {
        if (!map[c]) map[c] = 0;
        map[c]++;
    }
    
    let l = 0;
    let i = 0;
    
    while (i < s2.length) {
        const c = s2[i];
        
        if (map[c]) {
            if (count === s1.length) l = i;
            map[c]--;
            count--;
            if (count === 0) return true;
            i++;
        } else {
            if (count === s1.length) {
                i++;
            } else {
                map[s2[l]]++;
                count++;
                l++;
            }
        }
    }
    
    return false;
};