	var aIdP = [],
	    aNombre = [],
	    aAvatar = [];

	if (localStorage.getItem('id_persona') != null) {
		aIdP= JSON.parse(localStorage.getItem('id_persona'));
		aNombre = JSON.parse(localStorage.getItem('nombre_persona'));
	    aAvatar = JSON.parse(localStorage.getItem('avatar_persona'));
	}

	var elementoBotonRegistrar = document.querySelector('#btnRegistrarPers');
	elementoBotonRegistrar.addEventListener ('click' , registrarPersona);

	function registrarPersona() {
		var sId = document.querySelector('#txtId').value,
		sNombre = document.querySelector('#txtNombre').value,
		sAvatar = document.querySelector('#txtAvatar').value;
		
		aIdP.push(sId);
		aNombre.push(sNombre);
		aAvatar.push(sAvatar);
	


		localStorage.setItem ('id_persona', JSON.stringify(aIdP));
		localStorage.setItem ('nombre_persona', JSON.stringify(aNombre));
		localStorage.setItem ('avatar_persona', JSON.stringify(aAvatar));



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
