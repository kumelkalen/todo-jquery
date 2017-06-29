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
	/*var list = document.getElementsByTagName("li"); //Llamamos a todos los elementos li
	for (i = 0; i <list.length; i++) {
		var span = document.createElement()

	}
	*/


	$("#btn").click(function(e){
		e.preventDefault();
		var li = document.createElement("li");

		//Check
		$(li).append("<input class='check' type='checkbox' />");
		//X icon
		$(li).append("<i class='material-icons x close'>close</i>");
		var inputValue = document.getElementById("textarea").value;
		var textNode = document.createTextNode(inputValue);
		li.appendChild(textNode);
		if (inputValue === '') {
    		alert("Porfavor escribe una tarea");
    		}else{
    			$("ul").append(li);
    		}
    		document.getElementById("textarea").value="";
    		//Funcionalidad del x icon
    	var close = document.getElementsByClassName("close");//Llamamos a los elementos con esa clase
    	for(var i=0; i<close.length; i++){
    		close[i].onclick = function(){//Cada elemento tendrá una función
    			var liClose = this.parentElement;//Guardamos al elemento padre
    			$(liClose).remove();//Eliminamos el elemento
    		}
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