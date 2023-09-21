// Validar Usuario



function validarUsuario(){
    
    let user = document.getElementById("usuario").value;
    let email = document.getElementById("correo").value;
    let rol = document.getElementById("role").value;
    let pass = document.getElementById("password").value;
    let expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (user == "" || email == "" || pass == "" ) {
        Swal.fire(
                '¡Alerta!', 'Campos vacios', 'info'
            );
        return false;
    }else if (rol == "noSelect") {
        Swal.fire(
                '¡Alerta!', 'Seleccione el rol', 'info'
            );
        return false;
    }else if (!expression.test(email)){
        Swal.fire(
                '¡Alerta!', 'Correo inválido', 'info'
            );
        return false;
    }else {
        event.preventDefault();
        Swal.fire({
            title: '¿Desea registrar el usuario?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#232323',
            confirmButtonText: 'Registrar'
        }).then((result) => {
            if (result.isConfirmed) {
                let form = document.getElementById("form");
                form.submit();
            }
        });
    }
}

// Validar Compras

function validarCompra(){
    let id = document.getElementById("idC").value;
    let date = document.getElementById("dateCompra").value;
    let factu = document.getElementById('factu').value;
    let proveedor = document.getElementById('proveedor').value;
    let product = document.getElementById("prod").value;
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;


    if (id == "" || date == "" || cost == "" || factu == "" || precio == '' || cantidad == ''){
        alert ("Faltan datos en la compra.");
        return false;
    }else if (product == "noSelect" || proveedor == 'noSelect'){
        alert("Seleccione producto");
        return false;
    }else {
        let confir = confirm("¿Desea registrar la compra?");
        return confir;
    }
}

function validarEdit(){
    let id = document.getElementById("idC").value;
    let date = document.getElementById("dateCompra").value;

    if (id == "" || date == "" ){
        alert ("Faltan datos en la compra.");
        return false;
    }else {
        let confir = confirm("¿Desea editar la compra?");
        return confir;
    }
}

// validar Servicio

function validarServicio(){
    let idServicio = document.getElementById("IDServicio").value;
    let idEmpleado = document.getElementById("IDEmpleado").value;
    let idCita = document.getElementById("IDCita").value;
    let nombreServicio = document.getElementById("nombreServicio").value;
    let precioServicio = document.getElementById("precioServicio").value;
    let nombreEmpleado = document.getElementById("nombreEmpleado").value;
    let duracionServicio = document.getElementById("duracionServicio").value;
    let estadoCita = document.getElementById("estadoCita").value;
    let fechaCita = document.getElementById("fechaCita").value;

    if(idCita == "" || nombreServicio == "" || precioServicio == "" || nombreEmpleado == "" || duracionServicio == "" || estadoCita == "" || fechaCita == ""){
        alert('Falta completar los campos');
        return false;
    }else if (idEmpleado == "noSelect"){
        alert("No se ha seleccionado empleado");
        return false;
    }else if (idServicio == "noSelect"){
        alert ('No se ha seleccionado servicio');
        return false;
    }else {
        confir = confirm("¿Desea crear el servicio?");
        return confir;
    }
}
// validar Venta

function validarVentaServicio(){
    let idVentaServicio = document.getElementById("idVentaServicio").value;
    let idCliente = document.getElementById("idCliente").value;
    let idCita = document.getElementById("idCita").value;
    let costoTotalCita = document.getElementById("costoTotalCita").value;
    let fechaVentaServicio = document.getElementById("fechaVentaServicio").value;
    let formaPagoServicio = document.getElementById("formaPagoServicio").value;
    let estadoVentaServicio = document.getElementById("estadoVentaServicio").value;

    if (idVentaServicio == "" || idCliente == "" || idCita == "" || fechaRegistro == "" || costoTotalCita == "" || fechaVentaServicio == "") {
        alert("Hay campos sin completar");
        return false;
    }else if (formaPagoServicio == "noSelect"){
        alert("Elegir forma de pago");
        return false;
    }else if (estadoVentaServicio == "noSelect"){
        alert("Elegir estado de la venta");
        return false;
    }else {
        let confir = confirm("¿Desea registrar la venta?");
        return confir;
    }
}

function validarVentaPedido(){
    let idVentaPedido = document.getElementById("idVentaPedido").value;
    let idPedido = document.getElementById("idPedido").value;
    let fechaPedido = document.getElementById("fechaPedido").value;
    let idDetallePedido = document.getElementById("idDetallePedido").value;
    let cantidadProducto = document.getElementById("cantidadProducto").value;
    let precioUnitario = document.getElementById("precioUnitario").value;
    let idProducto = document.getElementById("idProducto").value;
    let fechaVentaPedido = document.getElementById("fechaVentaPedido").value;
    let formaPagoPedido = document.getElementById("formaPagoPedido").value;
    let estadoVentaPedido = document.getElementById("estadoVentaPedido").value;

    if (idVentaPedido == "" || idPedido == "" || fechaPedido == "" || idDetallePedido == "" || cantidadProducto == "" || precioUnitario == "" || idProducto == "" || fechaVentaPedido == "" ) {
        alert("Hay campos sin completar");
        return false;
    }else if (formaPagoPedido == "noSelect"){
        alert("Seleccione forma de pago");
        return false;
    }else if (estadoVentaPedido == "noSelect"){
        alert("Seleccione estado de la venta");
        return false;
    }else {
        let confir = confirm("¿Desea registrar la venta?");
        return confir;
    }
}

function validarRol(){
    let nombreRol = document.getElementById("rol").value;
    let estadoRol = document.getElementById("rolStat").value;
    if (nombreRol == ""){
        Swal.fire(
            '¡Alerta!', 'El rol debe tener nombre', 'info'
        );
        return false;
    }else if (estadoRol == "noSelect"){
        Swal.fire(
            '¡Alerta!', 'Seleccione el estado del rol', 'info'
        );
        return false;
    }else{
        event.preventDefault();
        Swal.fire({
            title: '¿Desea crear el nuevo rol?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#232323',
            confirmButtonText: 'Crear'
        }).then((result) => {
            if (result.isConfirmed) {
                let form = document.getElementById("form");
                form.submit();
            }
        });
    }
}

function eliminarUser(){
    let confir = confirm("¿Desea eliminar el usuario?");
    return confir;
}

function eliminarRol(){
    let confir = confirm("¿Desea eliminar el rol?");
    return confir;
}

function proof(){
    let confir = confirm("Quiere un msj?");
    if (confir){
        alert("Mensaje enviado correctamente");
        return true;
    }else{
        return false;
    }
}

function delteCompra(){
    let confir = confirm("¿Desea eliminar la compra?");
    if (confir){
        return true;
    }else{
        return false;
    }
}



function backPage(){
    window.location="/profile";
}

