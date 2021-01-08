/*
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [[]];
    
    for (let num of nums) {
        let append = [];
        for (let entry of result) {
            append.push([...entry, num]);
        }
        result.push(...append);
    }
    
    return result;
};