/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums,k) =>{
    //Basic solution that comes to mind is just 
    //One for-loop that x = x+k
    // for(let x=nums.length-1; x>=0; x--)
    // {
    //     nums[x+k] = nums[x];
    // }    

    // //Remove excess
    // for(let x = k-1; x>=0; x--)
    // {
    //     nums[x] = nums.pop();
    // }

    //We could speed this up to a single for loop
    // for(let x=1; x<=k; x++)
    // {
    //     let lastElement = nums[nums.length-1];
    //     nums.pop();
    //     nums.unshift(lastElement);
    // }

    //reverse helper function
    function reverse(arr, start, end) 
    {
        while (start < end) 
        {
          [arr[start], arr[end]] = [arr[end], arr[start]];
          start++;
          end--;
        }
    }

    k %= nums.length;

    reverse(nums, 0, (nums.length-1)); //reverse entire array
    reverse(nums, 0, (k - 1)); // reverse from 0 to k-1, if k =3 then we 0,1,2.... [7,6,5] ==> [5,6,7]
    reverse(nums, k, (nums.length-1)); //Reverse the other side of the array, 
       
    return nums;
};

console.log(rotate([1,2,3,4,5,6,7], 3));