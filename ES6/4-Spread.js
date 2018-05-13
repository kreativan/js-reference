/* =========================================================== 
    Spread Operator
=========================================================== */
var movies = ["Avangers", "Iron Man", "Thor"];
var series = ["Mr. Robot", "Breaking Bad", "Fargo"];

var bestOff = ["Infinity War", "GoT", "Winter Soldier"];

// lets take movies and series and add them to bestOff array
var bestOff = ["Infinity War", movies , "Winter Soldier", series, "GoT"];

console.log(bestOff);

/** Result 
 * notice that movies and series appear as arrays
 * 
-> 0: "Infinity War"
​-> 1: Array(3) [ "Avangers", "Iron Man", "Thor" ]
​-> 2: "Winter Soldier"
​-> 3: Array(3) [ "Mr. Robot", "Breaking Bad", "Fargo" ]
​-> 4: "GoT"
*/

/**
 *  Use spread operator
 *  ... (three dots are spread operator)
 * 
 */

var bestOff = ["Infinity War", ...movies , "Winter Soldier", ...series, "GoT"];

/** Result 
 * no sub arrays
 * 
-> 0: "Infinity War"
-> 1: "Avangers"
-> 2: "Iron Man"
-> 3: "Thor"
-> 4: "Winter Soldier"
-> 5: "Mr. Robot"
-> 6: "Breaking Bad"
-> 7: "Fargo"
-> 8: "GoT"
*/