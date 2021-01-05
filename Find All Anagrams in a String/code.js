/*
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {    
    const results = [];
    const map = new Map();
    for (const letter of p) {
        map.set(letter, (map.get(letter) || 0) + 1);
    }
    
    let needed = map.size;
    for (let i = 0, j = 0; j < s.length; j++) {
        const left = s[i], right = s[j];
        
        if (map.has(right)) {
            map.set(right, map.get(right) - 1);
            if (!map.get(right)) needed--;
        }
        
        if (j - i + 1 === p.length) {
            if (!needed) results.push(i);
            if (map.has(left)) {
                const previous = map.get(left);
                map.set(left, map.get(left) + 1);
                if (map.get(left) > 0 && previous <= 0) needed++;
            }
            i++;
        }
    }
    return results;
};