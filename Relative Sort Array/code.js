/*
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const hash = {};
    const remaining = []
    for(let n of arr2){
      hash[n] = hash[n] >= 0 ? hash[n] + 1 : 0
    }
    
    for(let n of arr1){
      hash[n] =  hash[n] >= 0 ? hash[n] + 1 : undefined
      if(hash[n] === undefined) remaining.push(n)
    }  
    
    remaining.sort((a,b)=>a-b)
    
    for(let i = 0; i < arr2.length; i++){
      const curr = arr2[i]
      if(hash[curr]-- > 1){
        arr2.splice(i,0,curr)
        i--
      }
    }
    return arr2.concat(remaining)
  };
  