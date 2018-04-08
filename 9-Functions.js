/*-------------------------------------------------------------
    Functions
-------------------------------------------------------------*/
function speak() {
    console.log('Arf');
    console.log('Woof');
    console.log('Meow');
    console.log('Mooooooooooo');
}
// execute
speak();

/**
 *  Argument
 *
 */
function foo(speech) {

    // if not a string, return error message
    if (typeof speech !== 'string') return "Well, that's not a string";

    // otherwise, replace r with w
    speech = speech.replace(/r/g, "w");
    speech = speech.replace(/R/g, "W");
    return speech;

}
// asign function to var
var bar = foo("you screwy rabbit");
// result
-> "you scwewy wabbit"

/*-------------------------------------------------------------
    Anonymus Function
-------------------------------------------------------------*/
var myFunction = function() {
    console.log("This is anonymus function");
}
myFunction(); // returns result
myFunction // returns function

// Imediatelly invoked function
var myFunction = (function(a,b) {
    var sum = a + b;
    console.log("Result is: " + sum);
})(2,3);

// or
var myFunction = (function(a,b) {
    var sum = a + b;
    return sum;
})(2,3);
console.log(myFunction);

/*-------------------------------------------------------------
    Even Odd function()
-------------------------------------------------------------*/
function isOdd(num) {

    if(num % 2 === 0) {
        return false;
    } else {
        return true;
    }

}
// execute
isOdd(10);
-> false
isOdd(15);
-> true

/**
 *  Multiple Arguments
 *
 *  you can access arguments inside a function by it's index:
 *  @var what = arguments[0]
 *  @var howMany = arguments[1]
 *
 */
function speakSomething(what, howMany) {

    // check if argument is undefined, if it is, provide default value
    var what = (typeof what !== 'undefined') ? what : 'Default speach';
    var howMany = (typeof howMany !== 'undefined') ? howMany : 5;

    for(var i = 0; i < howMany; i++) {
        console.log(what + "[" + i + "]");
    }

}

// execute
speakSomething("JavaScript is Cool", 3);
// execute default
speakSomething();

 /*-------------------------------------------------------------
    addingMachine example
 -------------------------------------------------------------*/
function addingMachine() {

    // init total that we will be returning
    var total = 0;

    for (var i = 0; i < arguments.length; i++) {
        // get the next numer
        var number = arguments[i];

        // check if argument is a number
        // if it is, add it to total
        if(typeof number === 'number') {
            total += number;
        }
    }

    // done
    return total;

}

/*-------------------------------------------------------------
   objects as arguments
-------------------------------------------------------------*/
/**
 *  No @return at the end of the function, becouse argument is an object.
 *  Objects are passed by reference (object is saved to memmory).
 *  When we run the function, we are passing the original object, not a copy of an object,
 *  so object is not copied, its changed.
 *
 */

// exammple object
var obj = {
    'name': 'Ivan',
    'job': 'Web Dev',
    'from': 'Serbia'
};

function transform(obj) {

    // make sure argument is an object, this is important, always check input typeof
    if (typeof obj !== 'object') {
        console.log('argument is not an object');
        return;
    }

    // generate random number 1-5
    var randomNumber = Math.floor(Math.random() * 5) + 1;

    switch (randomNumber) {
        case 1:
            obj.from = 'Space';
            break;
        case 2:
            obj.from = 'Universe';
            break;
        case 3:
            obj.from = 'World';
            break;
        case 4:
            obj.from = 'Europe';
            break;
        case 5:
            obj.from = 'Belgrade';
            break;
        default:
            // do nothing from stays Serbia
            break;
    }

}

// execute
transform(ivan);
// reuslt
-> Object { name: "Ivan", job: "Web Dev", from: "Space" }


/**
 *  if we want to leave original object and return copy of it with the same name
 */

// exammple object
var obj = {
    'name': 'Ivan',
    'job': 'Web Dev',
    'from': 'Serbia'
};

function transformCopy(obj) {

    // make sure argument is an object, this is important, always check input typeof
    if (typeof obj !== 'object') {
        console.log('argument is not an object');
        return;
    }

    // generate random number 1-5
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    // default from
    var newFrom = obj.from;

    switch (randomNumber) {
        case 1:
            newFrom = 'Space';
            break;
        case 2:
            newFrom= 'Universe';
            break;
        case 3:
            newFrom = 'World';
            break;
        case 4:
            newFrom = 'Europe';
            break;
        case 5:
            newFrom = 'Belgrade';
            break;
        default:
            // do nothing from stays Serbia
            break;
    }

    // if we wanna make a copy of an object, rather then modify original one, we will use this
    return {
        'name': obj.name,
        'job': 'Web Dev',
        'from': newFrom
    };


}

// execute
transformCopy(ivan);
// reuslt
-> Object { name: "Ivan", job: "Web Dev", from: "Universe" }

/*-------------------------------------------------------------
   Functions as Objects - function is object
-------------------------------------------------------------*/

// example function
function speakSomething(what) {
    for (i = 0; i < 10; i++) {
        console.log(what);
    }
}

// anonymus function
var speakSomething = function(what) {
    for (i = 0; i < 10; i++) {
        console.log(what);
    }
}


// function as argument - run function after 5000ms
window.setTimeout(speakSomething, 5000);

// function inside an object
var obj = {
    'function': function() {
        console.log('Hi, im a function isndide an object');
    }
}
// execute
obj.function();
// result
-> "Hi, im a function isndide an object";

/*-------------------------------------------------------------
    Scope
---------------------------------------------------------------*/
var myNum = 32;
var myResult = 'Success!';

function randomizer(limit) {

    var myNum = Math.floor(Math.random() * limit);

    console.log('myNum is ' + myNum);
    // if you cant access global vriable for any reason u can use window.myNum
    console.log('Global myNum is ' + window.myNum);

    return myNum;

}

// execute
randomizer(10);
// result
-> myNum is 7
-> Global myNum is 32
-> 7

/**
 *  Lets remove var, so we modify global myNum variable
 *
 */
var myNum = 32;
var myResult = 'Success!';

function randomizer(limit) {

    // we removed var
    myNum = Math.floor(Math.random() * limit);

    console.log('myNum is ' + myNum);
    console.log('Global myNum is ' + window.myNum);

    return myNum;

}

// execute
randomizer(10);
// result
-> myNum is 6
-> Global myNum is 6
-> 6
