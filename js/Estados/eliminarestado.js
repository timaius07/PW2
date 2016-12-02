
	var estadotareas = [];

	
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
		estadotareas = Persister.loadObj('estadotareas', "[]");
		document.getElementById("txtId").value = estadotareas[i].id;
		document.getElementById("txtDescrip").value= estadotareas[i].descripcion;
		document.getElementById("txtOrden").value = estadotareas[i].orden;
	}

	
	$('#btnElimina').click(function(event) {	
		var i = getUrlVars()['id'];
		estadotareas = Persister.loadObj('estadotareas', "[]");	
		estadotareas.splice(i,1);
		localStorage.setItem("estadotareas",JSON.stringify(estadotareas));
		window.location.reload();
	});

	function limpiar(){
		document.getElementById("txtId").value = "";
		document.getElementById("txtDescrip").value= "";
		document.getElementById("txtOrden").value = "";
	}

	function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
		});
		return vars;
	}