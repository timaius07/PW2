	var tareas = [];
	var estadotareas = [];//carga los estados de las tareas(listo)
	var proyectos = [];//carga el nombre y la imagen del Proyecto(listo)
	var personas = []; //carga las personas encargadas de las tareas

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

	$(document).ready(function() {
			load_data();
			load_proyecto();
			load_personas();
	});
	//carga el orden de las tareas en un table
	function load_data() {
		estadotareas = Persister.loadObj('estadotareas', "[]");
		$('#tblEstadoProyectos').html('');
		
		for (var i = 0; i < estadotareas.length; i++) {
			$('#tblEstadoProyectos').append("<tr><th>"+estadotareas[i].orden
			+"</th></tr>");
		}
	}
	//cargar el nombre y la imagen del proyecto
	function load_proyecto() {
		$('#nombreProy').html('');
		$('#imgproy').html('');
		var i = getUrlVars()['id'];
		proyectos = Persister.loadObj('proyectos', "[]");
		document.getElementById('imgproy').src = proyectos[i].icono ;
		$("#nombreProy").html(proyectos[i].nombre);
	}

	//carga el nombre del encargado a realizar las tareas
	function load_personas() {
		personas = Persister.loadObj('personas', "[]");
		$('#encargado').html('');
		for (var i = 0; i < personas.length; i++) {
			$('#encargado').append('<option>' + personas[i].nombre + '</option>');
		}
	}
	
	$(document).ready(function() {
	tareas = Persister.loadObj('tareas', "[]");
		$('#GuardarTarea').click(function(event) {
			var descrip2 = $('#txtDescp').val(),
		    encargado2 = document.getElementById('elemento').val();
			tareas.push({descripcion : descrip2 , pencargado : encargado2});
			Persister.saveObj('tareas', tareas);
			$('#tareas').append('<tr>' + descrip2 + '</tr>');
		});
	});

	function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
		});
		return vars;
	}