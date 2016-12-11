
	var proyectos = [];

	
	var Persister = {
		load: function(key, default_value) {
			return localStorage.getItem(key) || default_value;
		},

		loadObj: function(key, default_value) {
			var json_string = this.load(key, default_value);
			return JSON.parse(json_string);
		}
    }
	
    $(document).ready(function() {
		load_data();
	});
    	
	function load_data() {
		var i = getUrlVars()['id'];
		proyectos = Persister.loadObj('proyectos', "[]");
		document.getElementById("txtId").value = proyectos[i].id;
		document.getElementById("txtNombre").value= proyectos[i].nombre;
		document.getElementById("txtIcono").value = proyectos[i].icono;
		document.getElementById("txtFecha").value = proyectos[i].fecha;
	}

	
	$('#btnElimina').click(function(event) {	
		var i = getUrlVars()['id'];
		proyectos = Persister.loadObj('proyectos', "[]");	
		proyectos.splice(i,1);
		localStorage.setItem("proyectos",JSON.stringify(proyectos));
		window.location.reload();
	});

	document.getElementById("btnElimina").addEventListener("click", function(event){
    	event.preventDefault();
    	window.location.href="indexp.html";
	});
	
	function limpiar(){
		document.getElementById("txtId").value = "";
		document.getElementById("txtNombre").value= "";
		document.getElementById("txtIcono").value = "";
		document.getElementById("txtFecha").value ="";
	}

	function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
		});
		return vars;
	}