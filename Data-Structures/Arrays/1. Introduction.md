# Introduction

## What is an Array?
> An array/lists is a data structure that orders items sequentially

|Index|Value|
|:-----:|:-----:|
|0|Juice|
|1| Apple|
|2| Cheese|
|3| Kale|
|4| Mango|

## Facts About Arrays
- Arrays have the least amount rules
- Have the smallest footprint of any data structure

## Code examples of arrays (js)
### Initializing an array
```
const strings = ['a', 'b', 'c', 'd'];
```

### Adding to an array
```
const strings = ['a', 'b', 'c', 'd']; 

//push
strings.push('e'); //strings is now ['a', 'b', 'c', 'd', 'e']
```

### Removing from an array

```
const strings = ['a', 'b', 'c', 'd', 'e']; 

//pop() removes last element from array
strings.pop(); //strings is now ['a', 'b', 'c', 'd']
```

### Adding to start of array

```
const strings = ['a', 'b', 'c', 'd']; 

//unshift
strings.unshift('x'); //strings is now ['x', 'a', 'b', 'c', 'd']
```

### Adding to middle of array

```
const strings = ['x', 'a', 'b', 'c', 'd']; 

//splice
//splice(startingIndex, deleteNumber, valueToAdd)
strings.splice(2,0, 'test'); //strings is now ['x', 'a', 'test', 'b', 'c', 'd']
```