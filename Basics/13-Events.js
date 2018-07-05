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
