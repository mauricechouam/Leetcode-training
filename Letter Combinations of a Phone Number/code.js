/*
 * @param {string} digits
 * @return {string[]}
 */
    
var letterCombinations = function(digits) {
    let oMap = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }
    
    
    
    function traverse(digs, formed){
        if(!digs.length) return formed;
        let d = digs.pop();
        let str = oMap[d];
        if(!formed.length) formed = str;
        else{
            let temp = []
            str.forEach(c=>{
                let temp2 = [];
                formed.forEach(c2=>{
                    temp2.push(c+c2);
                })
                temp = temp.concat(temp2);
            })
            formed = temp
        }
        return traverse(digs, formed)
    }
    
    return traverse(digits.split(""), []);;
};
    