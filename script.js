//your JS code here. If required.
documnet =addEventListener("DOMContentLoaded",function(){
	const targetElement = document.getElementById("level");
	if(!targetElement){
		alert("The element with id 'level' does not exist.");
		return;
	}

	let domLevel =0;
	let currentElement = targetElement;

	while (currentElement) {
		domLevel++;
		currentElement=currentElement.parentElement;
	}
	alert(`The level of element is : ${'domLevel'}`);
}); 
	

