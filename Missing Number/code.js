var missingNumber = function (nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0)// remove thyis condition keeping the body if no zero slot
            xor ^= nums[i];
        xor ^= (i + 1);
    
    }
    return xor;
    //return XOR ^ ARRAY.length + 1; if your array doesn't have empty zero slot. 

};