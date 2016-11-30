	
	
	var proyectos = [];

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
		proyectos = Persister.loadObj('proyectos', "[]");
		$('#tblProyectos').html('');
		$('#tblProyectos').append("<th>Id</th>",
                        "<th>Nombre</th>",
                        "<th>Icono</th>",
                        "<th>Fecha de Inicio</th>",
                        "<th>Modificar</th>",
                        "<th>Eliminar</th>");
		
		for (var i = 0; i < proyectos.length; i++) {
			var modif =  '<a href = modificarp.html?id='+ i + ">Modificar"
			var elim = '<a href = eliminarp.html?id='+ i + ">Eliminar"
			$('#tblProyectos').append("<tr><td>"+proyectos[i].id
			+"</td><td>"+proyectos[i].nombre+"</td><td>"+
			proyectos[i].icono+"</td><td>"+proyectos[i].fecha  
			+"</td><td>"+ modif +"</td><td>"+ elim +"</td></tr>");
		}
	}

	$(document).ready(function() {
	load_data();

	$('#Registrar').click(function(event) {
		var id2 = $('#txtId').val(),
	    nombre2 = $('#txtNombre').val(),
		icono2 = $('#txtIcono').val(),
		fecha2 = $('#txtFecha').val();
		proyectos.push({id : id2,nombre : nombre2,icono: icono2,fecha: fecha2});
		Persister.saveObj('proyectos', proyectos);
		$('#proyectos').append('<tr>' + id2 + '</tr>');
		$('#proyectos').append('<tr>' + nombre2 + '</tr>');
		$('#proyectos').append('<tr>' + icono2 + '</tr>');
		$('#proyectos').append('<tr>' + fecha2 + '</tr>');
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

 
