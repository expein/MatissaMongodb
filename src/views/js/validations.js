// Validar Usuario
function valid(){
    let id = document.getElementById("idUser").value;
    let user = document.getElementById("usuario").value;
    let email = document.getElementById("correo").value;
    let rol = document.getElementById("role").value;
    let pass = document.getElementById("password").value;
    let expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (id == "" || user == "" || email == "" || pass == "" ) {
        alert("Campos vacíos");
        return false;
    }else if (isNaN(id)){
        alert("El ID debe ser numérico.");
        return false;
    }else if (rol == "noSelect") {
        alert("Seleccione Rol");
        return false;
    }else if (!expression.test(email)){
        alert("Correo inválido");
        return false;
    }else {
        let result = confirm("¿Desea registrar el usuario?");
        return result;
    }
}

// Validar Compras

function validacionCompra(event){
  event.preventDefault();
    let date = document.getElementById("dateCompra").value;
    let factu = document.getElementById('factu').value;
    let proveedor = document.getElementById('proveedor').value;
    let product = document.getElementById("prod").value;
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;

    let verificar = validarCompra(date, factu, proveedor, product, precio, cantidad)

    if(verificar === true){
      Swal.fire({
          title: "¿Estás seguro?",
          text: "¿Quieres registrar la compra?",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Sí, registrar",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Enviado", "La compra ha sido registrada.", "success");
            document.getElementById("formularioCompra").submit();
          } else if (result.isDismissed) {
            Swal.fire("Cancelado", "La compra no se ha registrado", "info");
          }
        });
    }else{
      return false
    }
}

const validarCompra = (date, factu, proveedor, product, precio, cantidad) =>{

        let validate = true;

        if (
          date == "" ||
          factu == "" ||
          precio == "" ||
          cantidad == ""
        ) {
          Swal.fire({
            title: 'Faltan campos por llenar',
            icon: 'warning'
          })
          validate = false
        } else if (product == "noSelect" || proveedor == "noSelect") {
          Swal.fire({
            title: 'Falta campos por seleccionar',
            icon: 'warning'
          })
          validate = false
        }else if(isNaN(precio, cantidad)){
          Swal.fire({
            title: 'El precio y cantidad deben ser numericos',
            icon: 'warning'
          })
          validate = false
        }

        return validate
}

// validar Producto

function validacionProducto(event) {
  event.preventDefault();
  let nombreProducto = document.getElementById("nombreProducto").value;
  let precioVenta = document.getElementById("precioVenta").value;

  let verificar = validarProducto(nombreProducto, precioVenta);

  if (verificar === true) {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¿Quieres registrar el producto?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí, registrar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Enviado", "El producto ha sido registrado.", "success");
          document.getElementById("formularioProducto").submit();
        } else if (result.isDismissed) {
          Swal.fire("Cancelado", "El producto no se ha registrado", "info");
        }
      });
  } else {
    return false;
  }
}

const validarProducto = (nombreProducto, precioVenta) => {
  let validate = true;

  if (nombreProducto == "" || precioVenta == "") {
    Swal.fire({
      title: "Faltan campos por llenar",
      icon: "warning",
    });
    validate = false;
  } else if (isNaN(precioVenta)) {
    Swal.fire({
      title: "El precio debe ser numerico",
      icon: "warning",
    });
    validate = false;
  }

  return validate;
};

// validar Proveedor

function validacionProveedor(event) {
  event.preventDefault();
  let tipoProveedor = document.getElementById("tipoProveedor").value;
  let nombreProveedor = document.getElementById("nombreProveedor").value;
  let contacto = document.getElementById("contacto").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;

  let verificar = validarProveedor(tipoProveedor, nombreProveedor, contacto, direccion, telefono);

  if (verificar === true) {
          Swal.fire({
        title: "¿Estás seguro?",
        text: "¿Quieres registrar el proveedor?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí, registrar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Enviado", "El proveedor ha sido registrado.", "success");
          document.getElementById("formularioProveedor").submit();
        } else if (result.isDismissed) {
          Swal.fire("Cancelado", "El proveedor no se ha registrado", "info");
        }
      });
  } else {
    return false;
  }
}

const validarProveedor = (tipoProveedor, nombreProveedor, contacto, direccion, telefono) => {
  let validate = true;

  if (nombreProveedor == "" || contacto == "" || direccion == "" || telefono == "") {
    Swal.fire({
      title: "Faltan campos por llenar",
      icon: "warning",
    });
    validate = false;
  }else if (tipoProveedor == "noSelect") {
    Swal.fire({
      title: "Faltan campos por seleccionar",
      icon: "warning",
    });
    validate = false;
  } else if (isNaN(telefono)) {
    Swal.fire({
      title: "El telefono debe ser numerico",
      icon: "warning",
    });
    validate = false;
  }

  return validate;
};

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

const MensajeDeExito = () => {
  Swal.fire({
    title: "Registro exitoso",
    icon: "success",
  });
};