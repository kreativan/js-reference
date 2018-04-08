/*-------------------------------------------------------------
# Comparison
-------------------------------------------------------------*/
1 === 1
-> true
1 !== 1
-> false
1 < 2
-> true
1 > 2
-> false

/*-------------------------------------------------------------
# Operators
-------------------------------------------------------------*/

/**
 *  Even odd
 *  0 = even, 1 = odd
 *
 */
20 % 2
-> 0
19 % 2
-> 1

/**
 *  increasement
 *
 */
var counter  = 0;
counter = counter + 1;
-> 1
// shorthand
counter += 1;
// or
counter += 5;
// increase by 1
counter++;

// decreasement
counter -= 1;
counter--;
// multiply
counter *= 2;

/*-------------------------------------------------------------
# Logical Operators
-------------------------------------------------------------*/
var animal1 = "monkey";
var animal2 = "bear";
var animal3 = "tiger";

animal1 == "monkey" && animal2 == "bear"
-> true
animal1 == "ape" && animal2 == "bear"
-> false
animal1 == "ape" || animal2 == "bear"
-> true

// && are always evaluated before ||
animal1 == "ape" || animal2 == "bear" && animal3 == "tiger"
-> true

// NOT
!(animal1 === "monkey")
-> false
!(animal1 === "ape")
-> true
!(animal1 === "ape" && animal2 === "tiger")
-> true
