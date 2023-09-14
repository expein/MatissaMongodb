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

let codigoDetalleSum = 1

const AgregarDetalleCompra = ()=>{
    let formDetalleCompra = document.getElementById('formDetalleCompra')
    let detallesCompra = document.getElementById('detallesCompra')

    codigoDetalleSum += 1

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