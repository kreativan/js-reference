/*-------------------------------------------------------------
# if - else
-------------------------------------------------------------*/
var answer = window.confirm("Click OK, get true. Click cancel, get false.");

if (answer === true) {
    console.log("You clicked OK");
} else {
    console.log("You clicked Cancel");
}

var answer = window.prompt("Type YES, NO or MAYBE. Then click OK.");

if (answer === "YES") {
    console.log("you said YES :)");
} else if (answer === "MAYBE") {
    console.log("you said MAYBE :| ");
} else if (answer === "NO") {
    console.log("you said NO :(");
} else {
    console.log("Hey! Are you messing with me?");
}

/**
 *  if Shorthand
 *
 */
var foo = "js";
if (foo === "js") console.log("I love JavaScript");
// or
var animal = "cat";
(animal === "cat") ? console.log("Cat") : console.log("Dog");
// or
var pet = (animal === "cat") ? "my cat" : "my dog";

/**
 *  if-else @example
 *
 */
var whatYouWant = "puppy";
var whatYouGot = "puppy";
var cryAboutIt = false;

if (whatYouWant === whatYouGot) {
    console.log("O yeah, im so happy!");
    cryAboutIt = false;
} else {
    console.log("Oh no, im sad!");
    cryAboutIt = true;
}

if (cryAboutIt) {
    console.log("Im crying waaaaaaaaaaaaaaaaa")
}
