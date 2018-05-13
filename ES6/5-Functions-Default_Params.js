/* =========================================================== 
    Default Params - Functions
=========================================================== */

function add(x, y) {
    console.log(x+y);
}
add();
//-> NaN

/**
 *  With default values
 */
function add(x=5, y=7) {
    console.log(x+y);
}
add();
//-> 12

function add(x=5, y=7) {
    console.log(x+y);
}
add(12, 7);
//-> 19

/**
 *  With template strings
 * 
 */
function haveFun(activity="swimming", time=2) {
    console.log(`Today I will go ${activity} for ${time} hours.`);
}
haveFun();
//-> Today I will go swimming for 2 hours.


haveFun("Dancing", 3);
//-> Today I will go Dancing for 3 hours.