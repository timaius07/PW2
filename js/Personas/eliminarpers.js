
	var personas = [];

	
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
		personas = Persister.loadObj('personas', "[]");
		document.getElementById("txtId").value = personas[i].id;
		document.getElementById("txtNombre").value= personas[i].nombre;
		document.getElementById("txtAvatar").value = personas[i].avatar;
	}

	
	$('#btnElimina').click(function(event) {	
		var i = getUrlVars()['id'];
		personas = Persister.loadObj('personas', "[]");	
		personas.splice(i,1);
		localStorage.setItem("personas",JSON.stringify(personas));
		
	});

	document.getElementById("btnElimina").addEventListener("click", function(event){
    	event.preventDefault();
    	window.location.href="indexpers.html";
	});
	function limpiar(){
		document.getElementById("txtId").value = "";
		document.getElementById("txtNombre").value= "";
		document.getElementById("txtAvatar").value = "";
	}

	function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
		});
		return vars;
	}