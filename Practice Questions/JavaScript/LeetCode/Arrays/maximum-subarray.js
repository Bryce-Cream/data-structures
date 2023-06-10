/*
Given an integer array nums, find the subarray with the largest sum, 
and return its sum.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    //Initial thought that comes to mind is just keeping a running total as we iterate over numbers
    //Seeing if currentMex is smaller than 

    let maxSum = nums[0]; // if array is 1 element long or we never get a new MaxSum

    for(let x=1; x<nums.length; x++)
    {
        nums[x] = Math.max(0, nums[x-1]) + nums[x];

        if (nums[x] > maxSum)
            maxSum = nums[x];
    }

    return maxSum;
};
