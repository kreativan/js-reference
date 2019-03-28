// remove php GET varibales from URL
window.location.href =  window.location.href.split("?")[0];

//
//  Forms
//
// get al form fields
var fields = document.forms["my_form_name].getElementsByTagName("input");
