/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {


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
    
};