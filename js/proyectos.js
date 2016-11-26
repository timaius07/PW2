	var aId = [],
	    aNombre = [],
	    aIcono = [],
	    aFecha = [],
	    aPersonas = [];

	if (localStorage.getItem('id_proyecto') != null) {
		aId= JSON.parse(localStorage.getItem('id_proyecto'));
		aNombre = JSON.parse(localStorage.getItem('nombre_proy'));
	    aIcono = JSON.parse(localStorage.getItem('icono_proy'));
	    aFecha = JSON.parse(localStorage.getItem('fecha_proy'));
	    aPersonas = JSON.parse(localStorage.getItem('personas_proy'));
	}

	var elementoBotonRegistrar = document.querySelector('#btnRegistrar');
	elementoBotonRegistrar.addEventListener ('click' , registrarProyecto);

	function registrarProyecto() {
		var sId = document.querySelector('#txtId').value,
		sNombre = document.querySelector('#txtNombre').value,
		sIcono = document.querySelector('#txtIcono').value,
		sFecha = document.querySelector('#txtFecha').value,
		sPersomas = document.querySelector('#txtPersonas').value;
		
		aId.push(sId);
		aNombre.push(sNombre);
		aIcono.push(sIcono);
		aFecha.push(sFecha);
		aPersonas.push(sPersomas);

		localStorage.setItem ('id_proyecto', JSON.stringify(aId));
		localStorage.setItem ('nombre_proy', JSON.stringify(aNombre));
		localStorage.setItem ('icono_proy', JSON.stringify(aIcono));
		localStorage.setItem ('fecha_proy', JSON.stringify(aFecha));
		localStorage.setItem ('personas_proy', JSON.stringify(aPersonas));



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

 }
