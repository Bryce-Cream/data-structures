/* Create a function that reverses a string: 
'Hi my name is Bryce' should become:
'ecyrB si eman ym iH

Assume input is always a valid string*/

/*
Robust method / initial thought is to solve it by creating an empty array 
and populating it by grabbing the last element from our string parameter and joining once loop is done
*/

/* Solution 1 
function reverse(str)
{
    const backwards = [];
    const totalLetters = str.length-1;

    for(let i = totalLetters; i >= 0; i--)
    {
        backwards.push(str[i]);
    }

    return backwards.join('');
} */

//Using built-in javascript methods of ES6 spread operator

const reverse = str => [...str].reverse().join('');

console.log(reverse('Hi my name is Bryce'));