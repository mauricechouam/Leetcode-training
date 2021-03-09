/*
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    let res = [];
    words.sort((a, b) => a.length - b.length);
    for (let i = 0; i < words.length - 1; i++) { 
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].includes(words[i])) { 
                break;

            }
    }
    }
    return res;
     // Time Complexity: O(n^2)
    // Space Complexity: O(n)

    
}