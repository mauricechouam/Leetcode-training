/*
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    
    if (letters[0] > target || target >= letters[letters.length - 1]) return letters[0]
    let s = 0
    let e = letters.length - 1
    while (s < e) {
        let mid = Math.trunc((e + s) / 2)
        if (target < letters[mid]) {
            e = mid
        } else {
            s = mid + 1
        }
    }
    return letters[s]
};
    