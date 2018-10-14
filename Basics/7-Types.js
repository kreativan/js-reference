/*-------------------------------------------------------------
# Types
-------------------------------------------------------------*/
var thing = "twelve";
typeof thing
//-> "string"

var thing = 12;
typeof thing
//-> "number"

var thing = false;
typeof thing
//-> "boolean"

var thing = {}; // empty object
typeof thing
//-> "object"

var thing = []; // empty array
typeof thing
//-> "object" // array is also object

// check if its really array (true = array)
var thing = []; // empty array
typeof thing === "object" && thing.hasOwnProperty('length');
//-> true

// null - NaN
var thing = null;
typeof thing
//-> "object"

// use this to check null or NaN
thing === null;