var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
firstChar = firstChar.toUpperCase();
var restname = name.slice(1,name.length);
restname = restname.toLowerCase();
var final_name = firstChar+restname;
alert("Hello," + final_name);