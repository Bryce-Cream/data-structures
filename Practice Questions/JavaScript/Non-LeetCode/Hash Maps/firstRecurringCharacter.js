//array = [2,5,1,2,3,5,1,2,3]
//Return 2

//Array = [2,1,1,2,3,5,1,2,4]
//Return 1

//Array = [2,3,4,5]
//return undefined

//Naive basic approach
//Nested for loop


function firstReccuringCharacter(input)
{
    for(let x=0; x<input.length; x++)
    {
        for(let y=x+1; y<input.length; y++)
        {
            if(input[x] === input[j])
            {
                return input[x];
            }
        }
    }
    return undefined;
}

// O(n^2)

function firstReccuringCharacter2(input)
{
    let map = {};
    for(let x=0; x<input.length; x++)
    {
        if(map[input[x]] !== undefined)
            return input[x];
        else
            map[input[x]] =  x;
    }
    return undefined;
} // O(n)

firstReccuringCharacter2([2,5,1,2,3,5,1,2,3])