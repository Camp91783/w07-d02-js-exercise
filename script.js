function makeOrange(){
	var listItem = document.getElementsByClassName("list-item");
	for (var i = 0; i < listItem.length; i++) {
		listItem[i].classList.add("orange");
	}
}

function returnToBlack(){
	var listItem = document.getElementsByClassName("list-item");
	for (var i = 0; i < listItem.length; i++) {
		listItem[i].classList.remove("orange");
	}
}

function makePurple(element)  {
	element.classList.add("purple");
	element.setAttribute("onClick", "makeBlack(this);");
}

function makeBlack(element) {
	element.classList.remove("purple");
	element.setAttribute("onClick", "makePurple(this);");
}
	

function makeHidden() {
    document.getElementById("myP").style.visibility = "hidden";
}

function makeVisible() {
		document.getElementById("myP").style.visibility = "visible";
}

function makeBackgroundBlue() {
	  document.getElementById("myP2").body.style.backgroundColor = "blue";
}


