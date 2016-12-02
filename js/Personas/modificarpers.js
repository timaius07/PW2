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

	$('#btnModifica').click(function(event) {
	personas = Persister.loadObj('personas', "[]");	
	var mns = {
		"id" : $('#txtId').val(),
	    "nombre" : $('#txtNombre').val(),
		"avatar" : $('#txtAvatar').val(),
	};
	var i = getUrlVars()['id'];
	
	
		personas.splice(i,1);
		personas.push(mns);
		Persister.saveObj('personas', personas);
	});
	

	function limpiar(){
		document.getElementById("txtId").value = "";
		document.getElementById("txtNombre").value= "";
		document.getElementById("txtAvatar").value ="";
	}


function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}