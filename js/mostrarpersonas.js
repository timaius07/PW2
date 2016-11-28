llenarTablaPers();

function llenarTablaPers() {
	var tbody = document.querySelector('#tblPersonas tbody');

	tbody.innerHTML = '';
	
	var aIdP= JSON.parse(localStorage.getItem('id_persona')),
		aNombre = JSON.parse(localStorage.getItem('nombre_persona')),
	    aAvatar = JSON.parse(localStorage.getItem('avatar_persona')); 

	var nCantidadPers = aIdP.length;
	
	for (var i = 0; i < nCantidadPers ; i++) {
		
		var fila = document.createElement('tr');

		var celdaId = document.createElement('td'),
			celdaNombre = document.createElement('td'),
			celdaAvatar = document.createElement('td');
		
		var nodoTextoId = document.createTextNode(aIdP[i]),
			nodoTextoNombre = document.createTextNode(aNombre[i]),
			nodoTextoAvatar = document.createTextNode(aAvatar[i]);

		celdaId.appendChild(nodoTextoId);	
		celdaNombre.appendChild(nodoTextoNombre);
		celdaAvatar.appendChild(nodoTextoAvatar);

		fila.appendChild(celdaId);
		fila.appendChild(celdaNombre);
		fila.appendChild(celdaAvatar);	

		tbody.appendChild(fila);
		}

}		