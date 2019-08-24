## CRUDS
Los usuarios deben ser capaces de crear, editar, eliminar y listar en tablas html
las siguientes entidades:
• Proyectos: Los atributos del objeto proyecto que serán mostrados en la
tabla son: id, nombre, icono, fecha de inicio, número de personas asociadas
al proyecto.
• Personas: Atributos de las personas: id, nombre, avatar
• Estados de tareas: Atributos de los estados de tarea son: id, descripción y
orden.

## Vista de Visualizacion del Proyecto


• Cada proyecto debe tener una vista donde el usuario puede saber el estado
del proyecto.
• Debe haber una columna con cada estado que haya sido configurado.
• Debe ser posible crear una tarea dentro del proyecto.
• Debe ser posible cambiar el estado de cada tarea si uno arrastra la tarea de
una columna a otra.
• Debe ser posible editar o eliminar cualquier tarea en la vista.
• Debe ser posible des-hacer una eliminación de una tarea.
• Debe ser posible asignar y des-asignar tareas a personas previamente


## Reportes


Deben existir al menos los siguientes reportes:
• Reporte de tareas por persona.
• Reporte de tareas por estado.
• Reporte de tareas por proyecto.
Es importante mencionar que cada reporte debe contar una tabla html que
muestre los reportes acompañada de un gráfico circular que represente los
números que se muestran en la tabla.
Almacenamiento:
• Todos los datos deben ser almacenados utilizando localStorage en el
navegador del usuario.
