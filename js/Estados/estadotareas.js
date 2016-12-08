	
	
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
	};

	function load_data() {
		estadotareas = Persister.loadObj('estadotareas', "[]");
		$('#tblTareas').html('');
		$('#tblTareas').append("<th>Id</th>",
                        "<th>Descripción</th>",
                        "<th>Orden</th>",
                        "<th>Modificar</th>",
                        "<th>Eliminar</th>");
		
		for (var i = 0; i < estadotareas.length; i++) {
			var modif =  '<a href = modificarestado.html?id='+ i + ">Modificar"
			var elim = '<a href = eliminarestado.html?id='+ i + ">Eliminar"
			$('#tblTareas').append("<tr><td>"+estadotareas[i].id
			+"</td><td>"+estadotareas[i].descripcion+"</td><td>"+estadotareas[i].orden  
			+"</td><td>"+ modif +"</td><td>"+ elim +"</td></tr>");
		}
	}

	$(document).ready(function() {
	load_data();

	$('#btnRegistrarOrd').click(function(event) {
		var id2 = $('#txtId').val(),
	    descripcion2 = $('#txtDescrip').val(),
		orden2 = $('#txtOrden').val();
		estadotareas.push({id : id2,descripcion : descripcion2,orden: orden2});
		Persister.saveObj('estadotareas', estadotareas);
		$('#estadotareas').append('<tr>' + id2 + '</tr>');
		$('#estadotareas').append('<tr>' + descripcion2 + '</tr>');
		$('#estadotareas').append('<tr>' + orden2 + '</tr>');
	});
	document.getElementById("btnRegistrarOrd").addEventListener("click", function(event){
    	event.preventDefault()
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