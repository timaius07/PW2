
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

	$('#btnModifica').click(function(event) {
	proyectos = Persister.loadObj('proyectos', "[]");	
	var mns = {
		"id" : $('#txtId').val(),
	    "nombre" : $('#txtNombre').val(),
		"icono" : $('#txtIcono').val(),
		"fecha" : $('#txtFecha').val(),
	};
	var i = getUrlVars()['id'];
	
	
		proyectos.splice(i,1);
		proyectos.push(mns);
		Persister.saveObj('proyectos', proyectos);
		$('#proyectos').append('<tr>' + id2 + '</tr>');
		$('#proyectos').append('<tr>' + nombre2 + '</tr>');
		$('#proyectos').append('<tr>' + icono2 + '</tr>');
		$('#proyectos').append('<tr>' + fecha2 + '</tr>');
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