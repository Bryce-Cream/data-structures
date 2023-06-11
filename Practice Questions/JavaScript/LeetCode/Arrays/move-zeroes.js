/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    //Slightly more optimal
    //Iterate over array, counting the zeroes
    //moving each non-zero element toward the front x-zeroCount or something
    // then add in the zeros at the end

    let zeroCount = 0;

    for(let x =0; x<nums.length; x++)
    {
        if(nums[x] !== 0)
            nums[x-zeroCount] = nums[x];
        else
            zeroCount++;
    }

    for(let x = nums.length - zeroCount; x<nums.length; x++)
    {
        nums[x] = 0;
    }




    //Basic Solution.
    //If 0, swap it.
    /*
    let left = 0;
    let right = 0;

    while(left<nums.length)
    {
        //Check if left isn't a 0
        if(nums[left] !== 0)
        {
            //Swap
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right++;
        }

        left++;

    }
    */
};