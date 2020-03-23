// remove php GET varibales from URL
window.location.href =  window.location.href.split("?")[0];

// validate form input
if(input.checkValidity() === true) console.log("It's valid!");

// do something after window load
window.addEventListener("load", function() {
	// Do SOmething
}, false); 
