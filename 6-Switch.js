/*-------------------------------------------------------------
# Switch
-------------------------------------------------------------*/
var answer = window.prompt("Type YES, NO or MAYBE. Then click OK.");

switch (answer) {

    case "YES":
        console.log("You said YES :)");
        break;
    case "MAYBE":
        console.log("you said MAYBE :|");
        break;
    case "NO":
        console.log("you said NO :(");
        break;
    default:
        console.log("Hey! Are you messing with me?");
        break;

}
