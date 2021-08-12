var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  let prefix = '';
  let maxPrefixLength = Math.min(...strs.map(str => str.length));
  for (let i = 0; i < maxPrefixLength; i++) {
    let char = strs[0][i];
    if (strs.every(str => str[i] === char)) {
      prefix += char;
    } else {
      break;
    }
  };  
  return prefix;
};