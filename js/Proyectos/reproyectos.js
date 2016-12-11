	var personas = [];
	var tareas = [];
	var proyectos = [];
	var estadotareas = [];
		var Persister = {
		load: function(key, default_value) {
			return localStorage.getItem(key) || default_value;
		},
		
		loadObj: function(key, default_value) {
			var json_string = this.load(key, default_value);
			return JSON.parse(json_string);
		}
	};

	$(document).ready(function() {
			load_personas();	
	});

		//carga el nombre del encargado a realizar las tareas
	function load_personas() {
		proyectos = Persister.loadObj('proyectos', "[]");
		$('#rproyectos').html('');
		for (var i = 0; i < proyectos.length; i++) {
			$('#rproyectos').append('<option value ='+i+'>' + proyectos[i].nombre + '</option>');
		}
	}

	$(document).ready(function() {

		$('#Generar').click(function(event) {	
			personas = Persister.loadObj('personas', "[]");
			tareas = Persister.loadObj('tareas',"[]");
			proyectos = Persister.loadObj('proyectos',"[]");
			estadotareas = Persister.loadObj('estadotareas',"[]");
			$('#tblrPersonas').html('');
			$('#tblrPersonas').append("<th>Tarea</th>",
                        "<th>Estado</th>",
                        "<th>Encargado</th>");
			var proyecto = "";
			var data = new Array();
			var a = $('#rproyectos').val();
			var desproy ="";
			var personaenc ="";
			var estado = "";
			desproy = proyectos[a].id;
			proyecto = proyectos[a].nombre;
			var tarea = "";
			var pro = false;
			var tar = false;
			var pos = 0;
			for (var i = 0; i < tareas.length; i++) {
				if (tareas[i].idproyecto == desproy){
					if (pro ==false){
						for (var h = 0; h < personas.length; h++) {	
							if (tareas[i].pencargado == personas[h].id){
								personaenc = personas[h].nombre;
								pro=true;
							}	
					  	}	
					}	
					if (tar ==false){
						for (var y = 0; y < estadotareas.length; y++) {		
							if (tareas[i].descestado == estadotareas[y].orden){
								estado = estadotareas[y].orden;
								tar=true
							}			
						}	
					}	
				if (pro==true & tar ==true){
					$('#tblrPersonas').append("<tr><td>"+tareas[i].descripcion+
					"</td><td>"+estado+"</td><td>"+personaenc +"</td></tr>");	
        			data.push ({ name: tareas[i].descripcion , y: 20 });
        			pro=false;
					tar =false;	
				}else{
					pro=false;
					tar =false;
				}		
			}
			
			}	
			draw_chart('graph-container', data);	
		});
	});	

	document.getElementById("Generar").addEventListener("click", function(event){
    	event.preventDefault()
	});	
	

function draw_chart(selector, data) {
	Highcharts.chart(selector, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Tareas realizadas por Persona'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: data
        }]
    });
}
