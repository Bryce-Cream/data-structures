/* Merge two sorted arrays into one big sorted array
mergeSortedArrays([0,7,23,51], [1,2,3,54])
returns => [0,1,2,3,7,23,51,54]
*/

//plan is check if either array is empty to begin with
//then to create an empty final array and get the first item of each array
//and compare the two while having valid values and slotting in the greater one 
function mergeSortedArrays(array1, array2)
{
    //base case checks / empty arrays 
    if(array1.length === 0){return array2;} 
    if(array2.length === 0){return array1;} 

    //variables
    const mergedArray = [];
    let x = 0, y = 0;
    let array1Item = array1[0];
    let array2Item = array2[0];

    //while items exist in either array
    while(array1Item || array2Item)
    {
        //Check if array2firstitem exists, hacky js solution of undefined < a number = false so the condition is just correct anyways
        if(!array2Item || array1Item < array2Item)
        {
            mergedArray.push(array1Item);
            array1Item = array1[++x];
        }
        else
        {
            mergedArray.push(array2Item);
            array2Item = array2[++y];
        }
    }

    return mergedArray;
}


console.log(mergeSortedArrays([0,25,26,31],[4,27,28]));