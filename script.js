//your JS code here. If required.
let element = document.getElementById("level");

let domLevel =0;

while(element){
	domLevel++;
	element=element.parentElement;
}
alert("The level of the element is: "+domLevel)
