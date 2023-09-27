let op;

const opcion = (opc) => {
  op = opc;
};

const registrar = () => {
  let tituloPrincipal = document.getElementById("tituloPrincipal");
  let formRegistrar = document.getElementById("formRegistrar");

  if (op == "mostrar") {
    tituloPrincipal.style.display = "none";
    formRegistrar.style.display = "block";
  } else if (op == "ocultar") {
    tituloPrincipal.style.display = "block";
    formRegistrar.style.display = "none";
  }
};

const buscador = () => {
  const inputBuscar = document.getElementById("buscar");
  const tabla = document.getElementById("tabla");
  const filas = tabla.getElementsByTagName("tr");

  const valorBuscado = inputBuscar.value.toLowerCase();

  for (let i = 1; i < filas.length; i++) {
    const fila = filas[i];
    const celdas = fila.getElementsByTagName("td");
    let encontrado = false;

    for (let j = 0; j < celdas.length; j++) {
      const textoCelda = celdas[j].textContent.toLowerCase();
      if (textoCelda.includes(valorBuscado)) {
        encontrado = true;
        break;
      }
    }

    if (encontrado) {
      fila.style.display = "";
    } else {
      fila.style.display = "none";
    }
  }
};