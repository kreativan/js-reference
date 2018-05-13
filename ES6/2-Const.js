/* =========================================================== 
    const - set variable permanently
=========================================================== */

/**
 * contst is used when variable value never changes
 */

const year = 1982;
var age = 2018 - year;
console.log(age);
//-> 36

function howCold(deg) {
    const freezingTemp = 32;
    if(freezingTemp <= deg) {
        return deg + " is above freezing.";
    } else {
        return deg + " is below freezing.";
    }
}
console.log(howCold(40));
console.log(howCold(23));
console.log(howCold(-10));

/** result
-> 40 is above freezing. 
-> 23 is below freezing. 
-> -10 is below freezing.
*/