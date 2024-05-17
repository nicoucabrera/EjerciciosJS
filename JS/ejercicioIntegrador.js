function agregarTarea() {
    //Obtenbemos el valor del campo de la tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    if(nuevaTareaTexto === ""){
        alert("Por favor, Ingrese una tarea")
        return
    }
    //Crear elemento en la lista
    let nuevaTarea = document.createElement("li")

    nuevaTarea.textContent = nuevaTareaTexto + " "

    //Crear boton eliminar
    let botonEliminar = document.createElement("button")
    botonEliminar.textContent = "eliminar"
    botonEliminar.onclick = function() {nuevaTarea.remove()}

    //Agregar boton de eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar)

    //agregar el elemento/tarea a la lista

    document.getElementById("listaTareas").appendChild(nuevaTarea)

    //limpiar cuadro de texto de la tarea
    document.getElementById("nuevaTarea").value = ""

}