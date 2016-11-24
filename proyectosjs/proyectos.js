$(document).ready(function() {
	//mostramos por defecto la primera página
	$('#page_1').show();
	$('.col-md-11 a').click(function(event) {
		event.preventDefault();
		//ocultamos todas las secciones
		$('.starter-template').hide();
		//quitamos todas las clases active de todos los elementos li
		$('div').removeClass('active');
		//agregamos la clase active al li padre
		$(this).parent().addClass('active');
		//capturamos el valor del href del elemento cliqueado
		var current_page = $(this).attr('href');
		//mostramos la página con el id seleccionado
		$(current_page).show();
	});


	$('#btn_add').click(function(event) {
		var animal = $('#proyecto').val();
		$('#lista_proyectos').append('<td>' + animal + ' <button>X</button> </td>');
		$('#animal').val('');
		$('#animal').focus();
	});

	$('#btn_reset').click(function(event) {
		$('#lista_animales').html('');
	});

	$('#lista_animales').on('click', 'button', function(event) {
		event.preventDefault();
		$(this).parent().remove();
		/* Act on the event */
	});


    $(document).ready(function(){
      var date_input=$('input[name="date"]'); //our date input has the name "date"
      var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
      var options={
        format: 'dd/mm/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
      };
      date_input.datepicker(options);
    })
});