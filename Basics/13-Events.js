/* =========================================================== 
    Events
=========================================================== */

/*
<button data="default" type="button" class="btn">Default</button>
<button data="muted" type="button" class="btn">Muted</button>
<button data="primary" type="button" class="btn">Primary</button>
<button data="secondary" type="button" class="btn">Secondary</button>
<button data="dark" type="button" class="btn">Dark</button>
*/

var buttons = document.querySelectorAll("button.btn");
buttons.forEach(function(e) {
    e.addEventListener("click", function(){
        console.log(this);
        console.log(this.getAttribute("data"));
    });
});


/* ----------------------------------------------------------
    Event Delegation
---------------------------------------------------------- */
/**
 *  Events on dynamically added elements
 *  
 *  We are adding event listener on a parent element and then target it child
 *  with element.target
 * 
 */
<ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

var click = document.querySelector("#list");
click.addEventListener("click", function (e) {
	// check if target is <li>
	if(e.target && e.target.nodeName == "LI") {
		console.log(e.target.innerHTML);
	}
});