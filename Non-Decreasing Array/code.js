var checkPossility = function (nums) {
    var changed = 0;
    for (let i = 0; i < nums.length - 1; i++) 
        if (nums[i] > nums[i + 1]) {
            if (changed) return 0;
            if (i != 0 && nums[i - 1] > nums[i + 1]) {
                nums[i + 1] = nums[i];
            }
            changed = 1;
        }
        return true;
    };

    
