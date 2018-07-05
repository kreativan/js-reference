/*-------------------------------------------------------------
# Arrays
-------------------------------------------------------------*/

// empty array
var emptyArray = [];

// example array
var cars = [
    "Saab",
    "Volvo",
    "BMW"
];

// count array
cars.length;
//-> 3

// get value from array
cars[1]
//-> Volvo

// change value in array
cars[0] = "Audi";

// reverse array
cars.reverse();


/**
 *  Add Values
 */

// add new value to the bottom of array
cars[cars.length]  = "Mercedes";
// or
cars.push("Subaru", "Nisan");
// add values to begining of array
cars.unshift("Porche", "GTR");

/**
 *  Remove Values
 */

// remove last value
cars.pop();
// remove first value
cars.shift();
// remove value from array -> splice(position, number)
cars.splice(2, 1)


/**
 *  Other Array Methods
 */

// create copy of the Array
var newCars = cars.slice();

// seach for value index in array -> indexOf("value", index_to_start_search_from)
var result = cars.indexOf("BMW", 0);
//-> 2

// eg:
console.log("The value is: " + cars[result]);
//-> The value is: BMW

// join -> array to string
var carsArrayToString = cars.join();
// custom separator
var carsArrayToString = cars.join("|");
