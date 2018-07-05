/*-------------------------------------------------------------
# Regex
-------------------------------------------------------------*/

var string = "What im looking for";
var regex = /What/;
regex.test(string)

// case insesitive
var regex = /what/i;
regex.test(string)

// at the begining of the string
var regex = /^what/i;
regex.test(string)

// at the end of the string
var regex = /what$/i;
regex.test(string)

// Dot (.) means any char
var regex = /Wh./;
regex.test(string)
