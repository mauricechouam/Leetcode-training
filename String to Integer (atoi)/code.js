/*
 * @param {string} s
 * @return {number}
 */

const myAtoi = str => {
    const MIN = Math.pow(-2, 31);
    const MAX = MIN * -1 - 1;
    
    let s = str.trim();
	if (s === '') return 0;
	
    s = s.split(' ');
    s = parseInt(s[0]);
    
    if (Number.isNaN(s)) {
        return 0;
    } else if (s < MIN) {
        return MIN;
    } else if (s > MAX) {
        return MAX;
    } else {
        return s;
    }
};