var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var list = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// function checkItemOff() {
// 	var li = document.querySelectorAll("li");
// 	li.classList.toggle("done");
// }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

document.addEventListener('click', e => { 
	if (e.target.nodeName == 'LI') { 
		e.target.classList.toggle('done'); 
	} 
});

// for (let i = 0; i < list.length; i++) {
// 	list[i].addEventListener('click', checkItemOff);
// }