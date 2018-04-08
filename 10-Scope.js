/*-------------------------------------------------------------
    Global Var
---------------------------------------------------------------*/
var myNum = 32;

function myFunction() {
    console.log(myNum);
}

myFunction();
-> 32

/*-------------------------------------------------------------
    Local var
---------------------------------------------------------------*/
var myNum = 32;

function myFunction() {
    var myNum = 15;
    console.log(myNum);
}

myFunction2();
-> 15


/*-------------------------------------------------------------
    Const
---------------------------------------------------------------*/
const MYCONSTANT = 5;
console.log(MYCONSTANT);

/*-------------------------------------------------------------
    Let
---------------------------------------------------------------*/
function logScope() {

    var localVar = 2;

    if (localVar) {
        let localVar = "I'm different!";
        console.log("Nested localVar: ", localVar);
    }

    console.log("logScope localVar: ", localVar);

}

logScope();
