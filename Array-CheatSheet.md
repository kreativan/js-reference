## Functions

`concat()` merge two or more arrays
```
// example
[ 1, 2 ].concat([5], [7, 9]) // [ 1, 2, 5, 7, 9 ]
// syntax
const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
```

`every()` tests if all elements in the array pass the test
```
// example
[1, 30, 40].every(val => val > 0) // true
// syntax
arr.every(callback(element[, index[, array]])[, thisArg])
```

`fill()` changes elements in an array to a static value
```
// example
[1, 2, 3, 4].fill('x', 1, 3) // [ 1, "x", "x", 4 ]
// syntax
arr.fill(value[, start[, end]])
```

