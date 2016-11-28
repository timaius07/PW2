llenarTablaOrden();

function llenarTablaOrden() {
	var tbody = document.querySelector('#tblOrdenT tbody');

	tbody.innerHTML = '';
	
	var aIdO= JSON.parse(localStorage.getItem('id_estado')),
		aDescripcion = JSON.parse(localStorage.getItem('descrp_tarea')),
	    aOrden = JSON.parse(localStorage.getItem('orden_tarea')); 

	var nCantidadOrd = aIdO.length;
	
	for (var i = 0; i < nCantidadOrd ; i++) {
		
		var fila = document.createElement('tr');

		var celdaId = document.createElement('td'),
			celdaDescrp = document.createElement('td'),
			celdaOrden = document.createElement('td');
		
		var nodoTextoId = document.createTextNode(aIdO[i]),
			nodoTextoDescrp = document.createTextNode(aDescripcion[i]),
			nodoTextoOrden = document.createTextNode(aOrden[i]);

		celdaId.appendChild(nodoTextoId);	
		celdaDescrp.appendChild(nodoTextoDescrp);
		celdaOrden.appendChild(nodoTextoOrden);

		fila.appendChild(celdaId);
		fila.appendChild(celdaDescrp);
		fila.appendChild(celdaOrden);	

		tbody.appendChild(fila);
		}

}		