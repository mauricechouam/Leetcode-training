/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map1 = {}
    nums1.forEach(num=>map1[num]=true)
    const result = []
    nums2.forEach(num=>{
        if(map1[num]){
            result.push(num)
            map1[num]=false
        }
    })
    return result
};