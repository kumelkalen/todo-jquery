$(document).ready(function(){
	//Creación del nav
	$("body").append("<nav><div></div></nav>");
	$("nav").addClass("nav-wrapper amber");
	$("div").append("<h5>To Do App</h5>");
	//Creamos la sección
	var firstSection = document.createElement("section");
	$("nav").after(firstSection);
	$(firstSection).addClass("grey lighten-2");
	//Row
	var firstRow = document.createElement("div");
	$(firstRow).addClass("row");
	//Columna
	var firstCol = document.createElement("div");
	$(firstCol).addClass("col s10 m5");
	//columna dentro del row
	$(firstRow).append(firstCol);
	//row dentro de la columna
	$(firstSection).append(firstRow);
	
});