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
	//Card
	var card = document.createElement("div");
	$(card).addClass("card cyan").height("300px");
	$(firstCol).append(card);
	var textcard = document.createElement("div");
	$(textcard).addClass("card-content white-text");
	$(card).append(textcard);
	//Contenido tarjeta
	var contInput = document.createElement("div");
	$(contInput).addClass("input-field col s12");
	$(textcard).append(contInput);
	//Textarea
	$(contInput).append("<textarea id='textarea' class='materialize-textarea'></textarea>");
	//Label
	$("textarea").after("<label for='textarea'>Ingresa Una Tarea</label");
});