//------------------------------------------------------------------
// DOM Methods
//------------------------------------------------------------------

// Get element by id
document.getElementById("some-id");

// Get all elements by class name as array
document.getElementsByClassName('classname');

// Get elements by specified elements HTML tag as array
document.getElementsByTagName('HTML tag');

/**
 *  querySelector
 *
 */

// Get the first matching element
document.querySelector(".main-nav a");

// Get all matching elements as array
document.querySelectorAll(".post-content p");

// Get innerHTML property of an element (without html tags)
document.querySelector(".main-title").innerHTML;
// change it
document.querySelector(".main-title").innerHTML = "I just replaced the title!";

// Get outerHTML property of an element (with html tags)
document.querySelector(".main-title").outerHTML;
// change it
document.querySelector(".main-title").outerHTML = "<h1>O Yeah!</h1>";

// change id & class
document.querySelector("#logo").id = "my-logo";
document.querySelector("#logo").className = "my-custom-class";

/**
 *  Class List
 *  https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
 *
 */

// classList as array (read only)
document.querySelector("#logo").classList;
// first class
document.querySelector("#logo").classList[0];

// add class
document.querySelector("#logo").classList.add("my-new-class");
// remove
document.querySelector("#logo").classList.remove("my-new-class");
// toggle class
document.querySelector("#footer").classList.toggle("my-class");
// check if class exits
document.querySelector("#footer").classList.contains("my-class");

/**
 *  Attributes
 *
 */
document.querySelector("#logo").attributes;
document.querySelector("#logo").hasAttribute("target");
document.querySelector("#logo").getAttribute("target");
document.querySelector("#logo").removeAttribute("target");
// (attr, value) --  changes the value or add attribute
document.querySelector("#logo").setAttribute("target", "_blank");

/**
 *  Adding New DOM Elements
 *
 */
.createElement(); // create element
.createTextNode(); // create text node
.appendChild(); // place one child node into another

/*

<figure class="featured-image">
    <img src="" alt="This is image alt text" />
    <figcaption>his is image alt text</figcaption> <!-- we are inserting this caption -->
</figure>

*/

// Eg: get alt atribute from image and palce it as caption
const FEATURED = document.querySelector(".featured-image");
const IMAGE = FEATURED.querySelector("img");

// get alt attr
var altText = IMAGE.getAttribute("alt");

// create caption eleent
var captionElement = document.createElement("figcaption");

// create caption text (caption text will be alt text)
var captionText = document.createTextNode(altText);

// append caption text to caption element
captionElement.appendChild(captionText);

// append caption element to the featured image
FEATURED.appendChild(captionElement);

// clear alt atrr from image
IMAGE.setAttribute("alt", "");

/**
 *  New append method
 *  IE 10++ 
 *
 */
const FEATURED = document.querySelector(".featured-image");
const IMAGE = FEATURED.querySelector("img");

var altText = IMAGE.getAttribute("alt");
var captionElement = document.createElement("figcaption");

captionElement.append(altText);
FEATURED.append(captionElement);
