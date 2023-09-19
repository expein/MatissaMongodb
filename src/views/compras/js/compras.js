let op

const opcion = (opc)=>{
    op = opc;
}

const registrarCompra = ()=>{
    let tituloCompra = document.getElementById('tituloCompra')
    let formRegistrarCompra = document.getElementById('formRegistrarCompra')

    console.log(op);

    if(op == 'mostrar'){
        tituloCompra.style.display = 'none'
        formRegistrarCompra.style.display = 'block'
    }else if(op == 'ocultar'){
        tituloCompra.style.display = 'block'
        formRegistrarCompra.style.display = 'none'
    }
}


const verDetallesCompra = () =>{
    window.open('http://localhost:3000/detallesCompra/', 'detallesCompra', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=700,height=600,left = 390,top = 50')

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

    console.log(formDetalleCompra)

    let formClonado = formDetalleCompra.cloneNode(true)

    detallesCompra.appendChild(formClonado)

    formClonado.id = 'formClonado' + codigoDetalleSum

    const nuevaId = formClonado.id

    let nuevoForm = document.getElementById(nuevaId)

    nuevoForm.querySelector('#codigoDetalle').value = codigoDetalleSum

    console.log(detallesCompra)
    console.log(nuevaId)
}