/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
    
    //I can already tell the optimal of doing this is probably a hash-map

    //A solution that requires arrays I would sort it first 
    //then iterate over it and check if x === x+1 element
    /*
    nums.sort((a,b) => a-b);

    for(let x=0; x<=nums.length-1; x++)
    {
        if(nums[x] === nums[x+1])
            return true;
    }

    return false;
    */
    //Another thing I thought of is we could use a Set
    //Sets can only contain unique values so we can compare size

    const s = new Set(nums);
    return s.size !== nums.length;

};