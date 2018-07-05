/*-------------------------------------------------------------
    For
-------------------------------------------------------------*/
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// for loop based on array length
var pageNames = ['Home', 'About Us', 'Contact Us', 'News', 'Blog', 'JavaScript'];

for (var i = 0; i < pageNames.length; i++) {
    var currentPageTitle = pageNames[i];

    if (document.title == currentPageTitle) {
        console.log('We are here: ' + currentPageTitle);
    } else {
        console.log('We are not here: ' + currentPageTitle);
    }
}

/*-------------------------------------------------------------
    ForIn
-------------------------------------------------------------*/
/**
 *  Iritate over an array
 *
 */
var pageNames = ['Home', 'About Us', 'Contact Us', 'News', 'Blog', 'JavaScript'];

for (var p in pageNames) {
    console.log(p + ' is ' + pageNames[p]);
}

// result:
/**
->  0 is Home
->  1 is About Us
->  2 is Contact Us
->  3 is News
->  4 is Blog
->  5 is JavaScript
*/

/**
 *  Iritate over an object
 *  if order is imoprtant use array
 *
 */
var pages = {
    'one': 'Home',
    'two': 'About Us',
    'tree': 'News',
    'four': 'Blog',
    'five': 'Contact Us'
};

for (var p in pages) {
    // check if 'p' is not inherited property (default object property or something), but something we just created
    // we dont want default or inherited object property to appear in our loop
    if (pages.hasOwnProperty(p)) {
        console.log(p + ' is ' + pages[p]);
    }
}

// result:
/**
->  one is Home
->  two is About Us
->  tree is News
->  four is Blog
->  five is Contact Us
*/

/*-------------------------------------------------------------
    While
-------------------------------------------------------------*/
// we use this when we dont know how many time we have to loop
// loop will continue as long as condition is true
var i = 0;
while (i < 10) {
    console.log(i + "... this will go untill 10");
    i++;
}

// example 2
// be careful not to create infinite loop; use break; to stop the loop
var myArray = [true, true, false, true, true, true];

var myItem = null;
while (myItem !== false) {
    console.log('myArray has ' + myArray.length + ' items now. This loop will go until we pop a false.');
    // remove last item in array
    myItem = myArray.pop();
}

/**
 *  Do
 *  this will run loop at least once
 */
var myArray = [true, true, false, true, true, true];

var myItem = false;
do {
    console.log('myArray has ' + myArray.length + ' items now. This loop will go until we pop a false.');
    myItem = myArray.pop();
} while (myItem !== false);
