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
	$(firstCol).addClass("col s10 offset-m3 m6 center");
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
	$(contInput).append("<textarea id='textarea' class='materialize-textarea s3'></textarea>");
	//Label
	$("textarea").after("<label for='textarea'>Ingresa Una Tarea</label");
	$('textarea').trigger('autoresize');
	$("label").after("<a id='btn' class='btn-floating btn-large waves-effect waves-light red button'><i class='material-icons'>add</i></a>");
	$(".button").after("<p>To Do Items:</p>");
	$("p").after("<ul></ul>");
	//Función ingresar tarea (intento)
	$("#btn").click(function(e){
		e.preventDefault();
		var li = document.createElement("li");
		$(li).append("<i class='material-icons x'>close</i>");
		var inputValue = document.getElementById("textarea").value;
		var textNode = document.createTextNode(inputValue);
		li.appendChild(textNode);
		if (inputValue === '') {
    		alert("Porfavor escribe una tarea");
    		}else{
    			$("ul").append(li);
    		}
    		
	})

	/*var textarea = document.getElementById("textarea");
	textarea.addEventListener("keypress",function (e) {
        if (e.keyCode == 13) {
           var li = document.createElement("li");
           var inputValue = document.getElementById("textarea").value;
           var textNode = document.createTextNode(inputValue);
           li.appendChild(textNode);
           if (inputValue === '') {
    		alert("Porfavor escribe una tarea");
    		}else{
    			$("ul").append(li);
    		}
    		
        });*/
});