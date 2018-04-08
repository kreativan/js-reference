/*-------------------------------------------------------------
    Closures
-------------------------------------------------------------*/
/**
 *  Fuction inside a fuction can have acces to the paretn function vars,
 *  thats closures!
 *
 */
function doSomeMath() {

    var a = 4;
    var b = 5;

    function multiply() {
        var result = a * b;
        return result;
    }

    // return function not result
    return multiply;

}

var theResult = doSomeMath();

console.log("The resulet is :", theResult);
console.log("The resulet is :", theResult());

/*-------------------------------------------------------------
    Convert px -> em example
-------------------------------------------------------------*/
function giveMeEms(pixels) {

    var baseValue = 16;

    function doTheMath() {
        return pixels/baseValue;
    }

    return doTheMath;

}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);

console.log("Small Size: ", smallSize());
console.log("Medium Size: ", mediumSize());
console.log("Large Size: ", largeSize());
console.log("xLarge Size: ", xlargeSize());
