
	var estadotareas = [];

	
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
		estadotareas = Persister.loadObj('estadotareas', "[]");
		document.getElementById("txtId").value = estadotareas[i].id;
		document.getElementById("txtDescrip").value= estadotareas[i].descripcion;
		document.getElementById("txtOrden").value = estadotareas[i].orden;
	}

	$('#btnModifica').click(function(event) {
	estadotareas = Persister.loadObj('estadotareas', "[]");	
	var mns = {
		"id" : $('#txtId').val(),
	    "descripcion" : $('#txtDescrip').val(),
		"orden" : $('#txtOrden').val(),
	};
	var i = getUrlVars()['id'];
		estadotareas.splice(i,1);
		estadotareas.push(mns);
		Persister.saveObj('estadotareas', estadotareas);
		$('#estadotareas').append('<tr>' + id2 + '</tr>');
		$('#estadotareas').append('<tr>' + descripcion2 + '</tr>');
		$('#estadotareas').append('<tr>' + orden2 + '</tr>');
		
	});
	
	document.getElementById("btnModifica").addEventListener("click", function(event){
    	event.preventDefault();
    	window.location.href="indexest.html";
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