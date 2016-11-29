
	if (localStorage.getItem('id_proyecto') != null) {
	var aId= JSON.parse(localStorage.getItem('id_proyecto'));
		aNombre = JSON.parse(localStorage.getItem('nombre_proy'));
	    aIcono = JSON.parse(localStorage.getItem('icono_proy'));
	    aFecha = JSON.parse(localStorage.getItem('fecha_proy'));
	    aPersonas = JSON.parse(localStorage.getItem('personas_proy'));
	}

	var id = getUrlVars()['id'],
		sId = aId[id] ,
		sNombre = aNombre[id],
		sIcono =  aIcono[id],
		sFecha =  aFecha[id],
		sPersomas = aPersonas[id],
		btnModificar = document.querySelector('#btnModificar');	

	document.querySelector('#txtId').value = sId;
	document.querySelector('#txtNombre').value = sNombre;
	document.querySelector('#txtIcono').value = sIcono;
	document.querySelector('#txtFecha').value = sFecha;
	document.querySelector('#txtPersonas').value = sPersomas;

	btnModificar.addEventListener('click', modificar);

	function modificar(){
	var sId = document.querySelector('#txtId').value,
		sNombre = document.querySelector('#txtNombre').value,
		sIcono = document.querySelector('#txtIcono').value,
		sFecha = document.querySelector('#txtFecha').value,
		sPersomas = document.querySelector('#txtPersonas').value;
		
		aId[id] = sId;
		aNombre[id] = sNombre;
		aIcono[id] = sIcono;
		aFecha[id] = sFecha;
		aPersonas[id] = sPersomas;

		guardarInformacion(aId, aNombre, aIcono, aFecha, aPersonas);
		window.location = "indexp.html";
	}

	function guardarInformacion(paId, paNombre, paIcono, paFecha, paPersonas) {
		localStorage.setItem ('id_proyecto', JSON.stringify(paId));
		localStorage.setItem ('nombre_proy', JSON.stringify(paNombre));
		localStorage.setItem ('icono_proy', JSON.stringify(paIcono));
		localStorage.setItem ('fecha_proy', JSON.stringify(paFecha));
		localStorage.setItem ('personas_proy', JSON.stringify(paPersonas));
	}

function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}