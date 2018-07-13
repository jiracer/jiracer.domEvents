// Variables
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList = document.getElementsByTagName("li");
var deleteButtons = document.getElementsByClassName("deleteButton");

// Function to get input text lenght
function inputLength() {
	return input.value.length;
}

// Adding li item to ul
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	eraseDeleteButtons();
	addDeleteToList();

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

// Add delete button ti LI item
function addButtonToLi(li, id){
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.setAttribute("id", id);
	deleteButton.setAttribute("class", "deleteButton");
	li.appendChild(deleteButton);
	deleteButton.onclick = removeParent;
}

// Add delete button to li elements
function addDeleteToList(){
	var i = 0;
	while (i < liList.length){
		addButtonToLi(liList[i], i);
		i++;
	}
}

// Erase delete buttons
function eraseDeleteButtons(){
	var i = 0;
	var j = deleteButtons.length;
	while (i < j){
		deleteButtons[0].remove();
		i++;
	}
}

//Erase item from list
function removeParent(evt){
	evt.target.parentNode.remove();
}

// addButtonToLi(document.querySelector("li"));
addDeleteToList();

// Listeners
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.onclick=function(event){
	if (event.target.nodeName === "LI"){
		var target=event.target;
		target.classList.toggle("done");
	}
}
