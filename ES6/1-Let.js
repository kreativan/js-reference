//--------------------------------------------------------
//  let - used to declare variables with block scope
//--------------------------------------------------------

var x = 10;

if(x) {
    // this changes global value of x
    var x = 4;
}

console.log(x)
-> 4

// .. //

var x = 10;

if(x) {
    // this will set x to 4 only inside this block
    let x = 4;
}

console.log(x)
-> 10

//--------------------------------------------------------
//  Boxes example
//--------------------------------------------------------

for(let i = 0; i < 45; i++) {

    // create div box
    var div = document.createElement("div");

    /**
     *  In the for statement
     * 
     *  If we declered i variable with "var i = 0;", 
     *  we would get same box number (45) every time we click 
     *  
     *  By using ES6 "let i = 0;" we will get actual number of the clicked box
     * 
     */
    
    div.onclick = function() {
        aleet("You clicked on div box #" + i);
    }

    // append div box to the section
    document.getElementById("section").appendChild(div);
}