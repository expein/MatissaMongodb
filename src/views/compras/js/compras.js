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