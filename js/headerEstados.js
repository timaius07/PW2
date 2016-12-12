	var tareas = [];
	var estadotareas = [];//carga los estados de las tareas(listo)
	var proyectos = [];//carga el nombre y la imagen del Proyecto(listo)
	var personas = []; //carga las personas encargadas de las tareas
	var idt = getUrlVars()['id'];
	var nuevop = false;
	var numP =	0;
	var dd =0;
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
			load_proyecto();
			load_data();
			load_personas();
			
			//load_tarea();
		
			
	});
	//carga el orden de las tareas en un table
	//carga el orden de las tareas en un table
	function load_data() {
		estadotareas = Persister.loadObj('estadotareas', "[]");
		tareas = Persister.loadObj('tareas', "[]");
		$('#tblEstadoProyectos').html('');
		//****************
		for (var i = 0; i < estadotareas.length; i++) {
		$('#tblEstadoProyectos').append("<tr><th id="+estadotareas[i].orden+">"+estadotareas[i].orden+"</th></tr>");
			for (var a = 0; a < tareas.length; a++) {
				if (tareas[a].descestado == estadotareas[i].orden & tareas[a].idproyecto == numP){
					$('#tblEstadoProyectos').append("<td><div id= divd1>"+ tareas[a].descripcion +"</div></td>");
				}						
			}
		}		
	}

	window.onload = function () {
	var tarselc = "";
	$('#tblEstadoProyectos').find('td').click( function(){
		kd= $(this).innerText;
		if (kd == 0){
			dd=(kd)
		}else{
			dd= kd-1	
		}
		
		tarselc = tareas[dd].descripcion;
		tareas = Persister.loadObj('tareas', "[]");
		numP = $('#numProy').val();
		for (var a = 0; a < tareas.length; a++) {
			if (tareas[a].idproyecto ==numP & tareas[a].descripcion ==tarselc){
				$('#myModal').modal('show');
				document.getElementById("DescpModif").value = tareas[a].descripcion;
			}
		 }		
	 });
	}			





	//cargar el nombre y la imagen del proyecto
	function load_proyecto() {
		tareas = Persister.loadObj('tareas', "[]");
		if (idt==null || idt == ""){
			
		}	
		$('#nombreProy').html('');
		$('#imgproy').html('');
		$('#numProy').html('');
			proyectos = Persister.loadObj('proyectos', "[]");
			document.getElementById('imgproy').src = proyectos[idt].icono ;
			$("#nombreProy").html(proyectos[idt].nombre);
			$("#numProy").html(proyectos[idt].id);
			numP = proyectos[idt].id;
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
			estadotareas = Persister.loadObj('estadotareas', "[]");
			personas = Persister.loadObj('personas', "[]");
			var descrip2 = $('#txtDescp').val(),
		    encargado2 = $('#encargado').val(),
		    idproyecto2 = $('#numProy').val(),
		    descestado2 = estadotareas[0].orden;
		    var encargadofin = personas[encargado2].id;
			tareas.push({descripcion : descrip2 , pencargado : encargadofin ,
		    idproyecto : idproyecto2 , descestado:descestado2 });
			Persister.saveObj('tareas', tareas);
			load_data();
		
		});

		$('#btnModifica-Tarea').click(function(event) {
			tareas = Persister.loadObj('tareas', "[]");	
			var mns = {
				
			    "descripcion" : $('#DescpModif').val(),
			    "pencargado" : tareas[dd].pencargado ,
				"idproyecto" : tareas[dd].idproyecto ,
				"descestado" : tareas[dd].descestado ,
			};
			tareas.splice(dd,1);
			tareas.push(mns);
			Persister.saveObj('tareas', tareas);
			window.location.reload();
		});

		
		$('#btnEliminaTarea').click(function(event) {	
			tareas = Persister.loadObj('tareas', "[]");	
			tareas.splice(dd,1);
			localStorage.setItem("tareas",JSON.stringify(tareas));
			window.location.reload();
		});

		$('#clear').click(function(event) {
			localStorage.clear();
			load_data();
		});
	});

	document.getElementById("GuardarTarea").addEventListener("click", function(event){
    	event.preventDefault();
	});
	document.getElementById("btnModifica-Tarea").addEventListener("click", function(event){
    	event.preventDefault();
	});
	document.getElementById("btnEliminaTarea").addEventListener("click", function(event){
    	event.preventDefault();
	});

	function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
		});
		nuevop=true;
		return vars;
	}