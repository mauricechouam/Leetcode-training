/*
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let splitArray = s.split(' ');
    let reversedStr = '';
    
    for (let i = splitArray.length - 1; i >= 0; i--) {
        if (splitArray[i] != '') {
            if(reversedStr.length > 0){
                reversedStr += ' ';
            }
			
			reversedStr += splitArray[i];
        }
    }
    
    return reversedStr;
};
