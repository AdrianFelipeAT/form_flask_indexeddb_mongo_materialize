$(document).ready(function(){

	function ajax_login(username, email){
		$.ajax({
		    // la URL para la petición
		    url : '/users',

		    // la información a enviar
		    // (también es posible utilizar una cadena de datos)
		    data : { username : username},

		    // especifica si será una petición POST o GET
		    type : 'POST',

		    // el tipo de información que se espera de respuesta
		    dataType : 'json',

		    // código a ejecutar si la petición es satisfactoria;
		    // la respuesta es pasada como argumento a la función
		    success : function(json) {
		        $('<h1/>').text(json.title).appendTo('body');
		        $('<div class="content"/>')
		            .html(json.html).appendTo('body');
		    },

		    // código a ejecutar si la petición falla;
		    // son pasados como argumentos a la función
		    // el objeto de la petición en crudo y código de estatus de la petición
		    error : function(xhr, status) {
		        alert('Disculpe, existió un problema');
		    },

		    // código a ejecutar sin importar si la petición falló o no
		    complete : function(xhr, status) {
		        alert('Petición realizada');
		    }
		});
	}

	function enviar(datos){
		event.preventDefault();
		ajax_login('9968');
	}
	
});