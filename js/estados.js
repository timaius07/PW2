	var aIdO = [],
	    aDescripcion = [],
	    aOrden = [];

	if (localStorage.getItem('id_estado') != null) {
		aIdO= JSON.parse(localStorage.getItem('id_estado'));
		aDescripcion = JSON.parse(localStorage.getItem('descrp_tarea'));
	    aOrden = JSON.parse(localStorage.getItem('orden_tarea'));
	}

	var elementoBotonRegistrar = document.querySelector('#btnRegistrarOrd');
	elementoBotonRegistrar.addEventListener ('click' , registrarOrden);

	function registrarOrden() {
		var sId = document.querySelector('#txtId').value,
		sDescrip = document.querySelector('#txtDescrip').value,
		sOrden = document.querySelector('#txtOrden').value;
		
		aIdO.push(sId);
		aDescripcion.push(sDescrip);
		aOrden.push(sOrden);
	


		localStorage.setItem ('id_estado', JSON.stringify(aIdO));
		localStorage.setItem ('descrp_tarea', JSON.stringify(aDescripcion));
		localStorage.setItem ('orden_tarea', JSON.stringify(aOrden));



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
