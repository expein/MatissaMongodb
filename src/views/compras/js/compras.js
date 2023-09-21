let op

const opcion = (opc)=>{
    op = opc;
}

const registrarCompra = ()=>{
    let tituloCompra = document.getElementById('tituloCompra')
    let formRegistrarCompra = document.getElementById('formRegistrarCompra')

    if(op == 'mostrar'){
        tituloCompra.style.display = 'none'
        formRegistrarCompra.style.display = 'block'
    }else if(op == 'ocultar'){
        tituloCompra.style.display = 'block'
        formRegistrarCompra.style.display = 'none'
    }
}

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


const verDetallesCompra = () =>{
    //window.open('http://localhost:3000/detallesCompra/', 'detallesCompra', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=700,height=600,left = 390,top = 50')

    let todoLosDetalles = document.querySelectorAll('.todosLosDetalles')

    let num = 1

    todoLosDetalles.forEach(obj => {
        
    })
}

const cerrar = () => {
  window.close();
};

let codigoDetalleSum = 1

const AgregarDetalleCompra = ()=>{
    let formDetalleCompra = document.getElementById('formDetalleCompra')
    let detallesCompra = document.getElementById('detallesCompra')
    let cantidadDetalles = document.getElementById("cantidadDetalles");

    codigoDetalleSum += 1

    cantidadDetalles.value = codigoDetalleSum;


    let formClonado = formDetalleCompra.cloneNode(true)

    detallesCompra.appendChild(formClonado)

    formClonado.id = 'formClonado' + codigoDetalleSum

    const nuevaId = formClonado.id

    let nuevoForm = document.getElementById(nuevaId)

    nuevoForm.querySelector('#codigoDetalle').value = codigoDetalleSum
}