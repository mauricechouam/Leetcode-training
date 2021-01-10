/*
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let res = [];
    
    const dfs = (S, word, index) => {
        if(word.length === S.length) {
            res.push(word)
            return;
        }
        if(isNaN(S[index])) {
			
            dfs(S, word + S[index].toUpperCase(), index+1)
            dfs(S, word + S[index].toLowerCase(), index+1)
            return;
        }
		
        dfs(S, word + S[index], index+1)
    }
    dfs(S, "", 0)
    return res
};