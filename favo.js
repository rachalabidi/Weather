var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});   
    
var elements=[];
function addElement() {
	if(document.querySelector(".addtxt").value.trim() !=""){
		elements.push(document.querySelector(".addtxt").value.trim()); 
 display();
    }
  }
function del(index) {
  elements.splice(index, 1);
  if (localStorage.getItem("elements") == null) {
    localStorage.setItem("elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("elements", JSON.stringify(elements));
  }
  display();
}

function display() {
	document.querySelector(".list").innerHTML="";
	for(var i = 0 ; i < elements.length ; i++)
		document.querySelector(".list").innerHTML += "<center><div class='element'>"+elements[i]+"<img class='dustbin' src='./img/trash.png' onclick='del("+i+")'></div></center>";
}