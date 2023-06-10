/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) 
{
    //Robust solution is n^2 time which we run two for loops over each element until we find a result that works
    let answers = [];

    for(let i =0; i < nums.length; i++)
    {
        for(let j= i+1; j<nums.length; j++)
        {
            if(nums[i]+ nums[j] === target)
            {
                answers.push(i);
                answers.push(j);
            }
        }
    }

    return answers;

    //Below is the solution for involving a map / hashMap which will be O(n)
    let map = new Map();

    for(let x=0; x<nums.length; x++)
    {
        let complement = target- nums[x];

        //Check if map has the complement
        if(map.has(complement)) { return [x, map.get(complement)]}

        map.set(nums[x], x);
    }

    //Optimizing would be using our own map Object {} instead of the pre-made object Map I think
};