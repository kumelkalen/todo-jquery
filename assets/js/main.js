$(document).ready(function(){
	//Creación del nav
	$("body").append("<nav><div></div></nav>");
	$("nav").addClass("nav-wrapper amber");
	$("div").append("<h5>To Do App</h5>");
	//Creamos la sección
	var firstSection = document.createElement("section");
	$("nav").after(firstSection);
	$(firstSection).addClass("grey lighten-2");
});