function agregarTarea() {
  let tarea = document.getElementById("tarea").value;

  if (tarea !== "") {
    let li = document.createElement("li");
    li.classList.add("list-group-item");

    li.appendChild(document.createTextNode(tarea));

    let botonEliminar = document.createElement("button");
    botonEliminar.classList.add(
      "btn",
      "btn-danger",
      "btn-sm",
      "float-right",
      "ml-2"
    );
    botonEliminar.appendChild(document.createTextNode("Eliminar"));

    botonEliminar.addEventListener("click", function () {
      this.parentNode.remove();
    });

    li.appendChild(botonEliminar);

    document.getElementById("lista-tareas").appendChild(li);

    document.getElementById("tarea").value = "";
  }
}
