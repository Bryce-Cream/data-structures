/*
Given an integer array nums, find the subarray with the largest sum, 
and return its sum.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
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
*/

/*
Could also check base case: (less than 2 total, return array)

then just running total 
for loop
    nums[x] = Math.max(nums[x], nums[x] + nums[x-1])

return Math.max(...nums)

//0 - [-2,1,-3,4,-1,2,1,-5,4]
//1 - [-2,1,-3,4,-1,2,1,-5,4] maxOf( 1,-1)
//2 - [-2,1,-3,4,-1,2,1,-5,4] maxOf(-3,-2)
//3 - [-2,1,-2,4,-1,2,1,-5,4] maxOf(4, 2)
//4 - [-2,1,-2,4,-1,2,1,-5,4] maxOf(-1,3)
//5 - [-2,1,-2,4, 3,2,1,-5,4] maxOf(2, 5)
//6 - [-2,1,-2,4, 3,5,6,-5,4] maxOf(1, 6)
//7 - [-2,1,-2,4, 3,5,6,-5,4] maxOf(-5, 1)
//8 - [-2,1,-2,4, 3,5,6, 1,4] maxOf(4,5)
//8 - [-2,1,-2,4, 3,5,6,1, 5] //Return Max which is 6

*/

var maxSubArray = function(nums) {
    if(nums.length < 2) return nums;

    for(let x=1; x<nums.length; x++)
    {
        nums[x] = Math.max(nums[x], nums[x] + nums[x-1]);

        console.log(nums);

        return Math.max(...nums)
    }
};