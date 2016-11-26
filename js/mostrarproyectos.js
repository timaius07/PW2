llenarTabla();

function llenarTabla() {
	var tbody = document.querySelector('#tblProyectos tbody');

	tbody.innerHTML = '';
	
	var aId= JSON.parse(localStorage.getItem('id_proyecto')),
		aNombre = JSON.parse(localStorage.getItem('nombre_proy')),
	    aIcono = JSON.parse(localStorage.getItem('icono_proy')),
	    aFecha = JSON.parse(localStorage.getItem('fecha_proy')),
	    aPersonas = JSON.parse(localStorage.getItem('personas_proy')); 

	var nCantidadProy = aId.length;
	for (var i = 0; i < nCantidadProy; i++) {
		
		var fila = document.createElement('tr');

		var celdaId = document.createElement('td'),
			celdaNombre = document.createElement('td'),
			celdaIcono = document.createElement('td'),
			celdaFecha = document.createElement('td'),
			celdaPersonas = document.createElement('td');
		
		var nodoTextoId = document.createTextNode(aId[i]),
			nodoTextoNombre = document.createTextNode(aNombre[i]),
			nodoTextoIcono = document.createTextNode(aIcono[i]),
			nodoTextoFecha = document.createTextNode(aFecha[i]),
			nodoTextoPersonas = document.createTextNode(aPersonas[i]);

		celdaId.appendChild(nodoTextoId);	
		celdaNombre.appendChild(nodoTextoNombre);
		celdaIcono.appendChild(nodoTextoIcono);
		celdaFecha.appendChild(nodoTextoFecha);
		celdaPersonas.appendChild(nodoTextoPersonas);

		fila.appendChild(celdaId);
		fila.appendChild(celdaNombre);
		fila.appendChild(celdaIcono);
		fila.appendChild(celdaFecha);
		fila.appendChild(celdaPersonas);	

		tbody.appendChild(fila);
		}

}