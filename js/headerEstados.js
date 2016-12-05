	var tareas = [];
	var estadotareas = [];//carga los estados de las tareas(listo)
	var proyectos = [];//carga el nombre y la imagen del Proyecto(listo)
	var personas = []; //carga las personas encargadas de las tareas
	var idt = getUrlVars()['id'];
	var nuevop = false;


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
			load_personas();
			load_proyecto();
			//load_tarea();
		
			
	});
	//carga el orden de las tareas en un table
	function load_data() {
		estadotareas = Persister.loadObj('estadotareas', "[]");
		tareas = Persister.loadObj('tareas', "[]");
		$('#tblEstadoProyectos').html('');
		for (var i = 0; i < estadotareas.length; i++) {
			$('#tblEstadoProyectos').append("<th id="+estadotareas[0].orden+">"+estadotareas[i].orden+"</th>" + "," +"<br>");	
		}
		
		for (var a = 0; a < tareas.length; a++) {
			//	$('#ultareas').append("<li>" + tareas[a].descripcion + "</li>");

			$('#tblEstadoProyectos').append("<tr><td><div class= redips-drag>"+ tareas[i].descripcion +"</div></td></tr>");
		}	
	}
	//cargar el orden de las tareas
	function load_tarea() {
		tareas = Persister.loadObj('tareas', "[]");
		$('#tblEstadoProyectos').html('');

		for (var i = 0; i < tareas.length; i++) {
			$('#tblEstadoProyectos').append("<tr><td>"+ tareas[i].descripcion + "</td></tr>");
		}
	}
	//cargar el nombre y la imagen del proyecto
	function load_proyecto() {
		tareas = Persister.loadObj('tareas', "[]");
		if (idt==null || idt == ""){
			idt = tareas[tareas.length-1].idproyecto;
		}	
		$('#nombreProy').html('');
		$('#imgproy').html('');
		$('#numProy').html('');
		proyectos = Persister.loadObj('proyectos', "[]");
		//document.getElementById('imgproy').src = proyectos[idt].icono ;
		$("#nombreProy").html(proyectos[idt].nombre);
		$("#numProy").html(idt).id;
		document.getElementById('numProy').value = proyectos[idt].id; 
		
	}

	//carga el nombre del encargado a realizar las tareas
	function load_personas() {
		personas = Persister.loadObj('personas', "[]");
		$('#encargado').html('');
		for (var i = 0; i < personas.length; i++) {
		$('#encargado').append('<option value ='+i+'>' + personas[i].nombre + '</option>');
		}
	}
	
	$(document).ready(function() {
		$('#GuardarTarea').click(function(event) {
			var descrip2 = $('#txtDescp').val(),
		    encargado2 = $('#encargado').val(),
		    idproyecto2 = $('#numProy').val();
			tareas.push({descripcion : descrip2 , pencargado : encargado2 ,
		    idproyecto : idproyecto2 });
			Persister.saveObj('tareas', tareas);
			$('#tblEstadoProyectos').append('<tr>' + descrip2 + '</tr>');
		});
	});

	function GetAnterior(){
		history.go(-1);
	}
	function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
		});
		nuevop=true;
		return vars;
	}