/* =========================================================== 
    Template String
=========================================================== */

// Simple string
function printString(firstName) {
    console.log("Hello " + firstName);
}
printString("Ivan");
//-> Hello Ivan

// ES6 Template String 
function printString(firstName) {
    console.log(`Hello ${firstName}`);
}
printString("Ivan");

// Example //
function createEmail(firstName, price) {
    var shipping = 5.95;
    console.log(
        `Hi ${firstName}, Thanks for buying from us!
            Total: $${price}
            Shipping: $${shipping}
            Grand Total: $${price + shipping}
        `
    );
}
createEmail("Ivan", 100);

/** result 
-> Hi Ivan, Thanks for buying from us!
->           Total: $100
->            Shipping: $5.95
->            Grand Total: $105.95
*/

/**
 *  Notice In above example that 
 *  all line breaks and extra space are applied
 * 
 */