	
	
	var personas = [];

	var Persister = {
		save: function (key, value) {
			localStorage.setItem(key, value);
		},
		load: function(key, default_value) {
			return localStorage.getItem(key) || default_value;
		},
		saveObj: function(key, value) {
			var json_string = JSON.stringify(value);
			this.save(key, json_string);
		},
		loadObj: function(key, default_value) {
			var json_string = this.load(key, default_value);
			return JSON.parse(json_string);
		}
	};

	function load_data() {
		personas = Persister.loadObj('personas', "[]");
		$('#tblPersonas').html('');
		$('#tblPersonas').append("<th>Id</th>",
                        "<th>Nombre</th>",
                        "<th>Avatar</th>",
                        "<th>Modificar</th>",
                        "<th>Eliminar</th>");
		
		for (var i = 0; i < personas.length; i++) {
			var modif =  '<a href = modificarpers.html?id='+ i + ">Modificar"
			var elim = '<a href = eliminarpers.html?id='+ i + ">Eliminar"
			$('#tblPersonas').append("<tr><td>"+personas[i].id
			+"</td><td>"+personas[i].nombre+"</td><td>"+
			"<img src="+personas[i].avatar+">"
			+"</td><td>"+ modif +"</td><td>"+ elim +"</td></tr>");
		}
	}

	$(document).ready(function() {
		load_data();
	
	$('#btnRegistrarPers').click(function(event) {
		var id2 = $('#txtId').val(),
	    nombre2 = $('#txtNombre').val(),
		avatar2 = $('#txtAvatar').val();
		personas.push({id : id2,nombre : nombre2,avatar: avatar2});
		Persister.saveObj('personas', personas);
		$('#personas').append('<tr>' + id2 + '</tr>');
		$('#personas').append('<tr>' + nombre2 + '</tr>');
		$('#personas').append('<tr>' + avatar2 + '</tr>');	
	});

	$('#clear').click(function(event) {
		localStorage.clear();
		load_data();
	});
});
	
	function valida(e){
	    tecla = (document.all) ? e.keyCode : e.which;
	    //Tecla de retroceso para borrar, siempre la permite
	    if (tecla==8){
	        return true;
	    } 
	    // Patron de entrada, en este caso solo acepta numeros
	    patron =/[0-9]/;
	    tecla_final = String.fromCharCode(tecla);
	    return patron.test(tecla_final);
	}

 
