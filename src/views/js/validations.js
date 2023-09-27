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

function validacionCompra(){
    let date = document.getElementById("dateCompra").value;
    let factu = document.getElementById('factu').value;
    let proveedor = document.getElementById('proveedor').value;
    let product = document.getElementById("prod").value;
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;

    let verificar = validarCompra(date, factu, proveedor, product, precio, cantidad)

    if(verificar === true){
        let op = confirm('¿Estas seguro de hacer esta acción?')
        return op
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
          alert("Faltan datos en la compra.");
          validate = false
        } else if (product == "noSelect" || proveedor == "noSelect") {
          alert("Seleccione producto");
          validate = false;
        }else if(isNaN(precio)){
          alert('El precio no es numerico')
          validate = false
        }

        return validate
}

// validar Producto

function validacionProducto() {
  let nombreProducto = document.getElementById("nombreProducto").value;
  let desc = document.getElementById("desc").value;
  let precioVenta = document.getElementById("precioVenta").value;

  let verificar = validarProducto(nombreProducto, desc, precioVenta);

  if (verificar === true) {
    let op = confirm("¿Estas seguro de hacer esta acción?");
    return op;
  } else {
    return false;
  }
}

const validarProducto = (nombreProducto, desc, precioVenta) => {
  let validate = true;

  if (nombreProducto == "" || desc == "" || precioVenta == "") {
    alert("Faltan datos en la compra.");
    validate = false;
  } else if (isNaN(precioVenta)) {
    alert("El precio no es numerico");
    validate = false;
  }

  return validate;
};

// validar Proveedor

function validacionProveedor() {
  let tipoProveedor = document.getElementById("tipoProveedor").value;
  let nombreProveedor = document.getElementById("nombreProveedor").value;
  let contacto = document.getElementById("contacto").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;

  let verificar = validarProveedor(tipoProveedor, nombreProveedor, contacto, direccion, telefono);

  if (verificar === true) {
    let op = confirm("¿Estas seguro de hacer esta acción?");
    return op;
  } else {
    return false;
  }
}

const validarProveedor = (tipoProveedor, nombreProveedor, contacto, direccion, telefono) => {
  let validate = true;

  if (nombreProveedor == "" || contacto == "" || direccion == "" || telefono == "") {
    alert("Faltan datos");
    validate = false;
  }else if (tipoProveedor == "noSelect") {
    alert("Seleccione el tipo de proveedor");
    validate = false;
  } else if (isNaN(telefono)) {
    alert("El telefono debe ser numerico");
    validate = false;
  }

  return validate;
};

// validar Servicio

function validacionServicio(event){
  event.preventDefault();

  let nombreServicio = document.getElementById("nombreServicio").value;
  let duracionServicio = document.getElementById("duracionServicio").value;
  let precioServicio = document.getElementById("precioServicio").value;

  let verificar = validarServicio(nombreServicio, duracionServicio, precioServicio)
 //formularioServicio
  if(verificar === true){
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres registrar el servicio?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, registrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Enviado", "El servicio ha sido registrado.", "success");
        document.getElementById("formularioServicio").submit();
      } else if (result.isDismissed) {
        Swal.fire("Cancelado", "El Servicio no se ha registrado", 'error');
      }
    });
  }else{
    return false
  }
}

const validarServicio  = (nombreServicio, duracionServicio, precioServicio) => {
  let validate = true;

  if (nombreServicio == "" || duracionServicio == "" || precioServicio == "") {
    Swal.fire({
      title: "Faltan campos por llenar",
      icon: "warning",
    });
    validate = false
  } else if (isNaN(precioServicio)) {
    Swal.fire({
      title: 'El precio del servicio debe ser numerico',
      icon: 'warning'
    })
    validate = false
  }

  return validate
}

// Validar empleado

const validacionEmpleado = (event) => {
 event.preventDefault();

  let nombresEmpleado = document.getElementById("nombresEmpleado").value;
  let apellidosEmpleado = document.getElementById("apellidosEmpleado").value;
  let genero = document.getElementById("genero").value;
  let fechaContrato = document.getElementById("fechaContrato").value;
  let fechaNacimiento = document.getElementById("fechaNacimiento").value;
  let correo = document.getElementById("correo").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;


  let verificar = validarEmpleado(nombresEmpleado, apellidosEmpleado, genero, fechaContrato, fechaNacimiento, correo, direccion, telefono)
  if(verificar === true){
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres registrar el empleado?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, registrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Enviado", "El servicio ha sido registrado.", "success");
        document.getElementById("formularioEmpleado").submit();
      } else if (result.isDismissed) {
        Swal.fire("Cancelado", "El Servicio no se ha registrado", 'error');
      }
    });
  }else{
    return false
  }
}

const validarEmpleado = (nombresEmpleado, apellidosEmpleado, genero, fechaContrato, fechaNacimiento, correo, direccion, telefono) => {
  let validate = true;
  let expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (
    nombresEmpleado == "" ||
    apellidosEmpleado == "" ||
    fechaContrato == "" ||
    fechaNacimiento == "" ||
    correo == "" ||
    direccion == "" ||
    telefono == ""
  ) {
    Swal.fire({
      title: "Faltan campos por llenar",
      icon: "warning",
    });
    validate = false;
  }else if(genero == 'noSelect'){
    Swal.fire({
      title: "Seleccione un genero",
      icon: "warning",
    });
    validate = false;
  }else if(isNaN(telefono)){
    Swal.fire({
      title: "El telefono debe ser numerico",
      icon: "warning",
    });
    validate = false;
  }else if(!expression.test(correo)){
    Swal.fire({
      title: "El correo esta mal ingresado",
      icon: "warning",
    });
    validate = false;
  }

  return validate
}

// validar Venta

function validarVentaServicio(){
    let idEmpleado = document.getElementById("idEmpleado").value;
    let idCliente = document.getElementById("idCliente").value;
    let idCita = document.getElementById("idCita").value;
    let costoTotalCita = document.getElementById("costoTotalCita").value;
    let idServicio = document.getElementById("idServicio").value;
    let fechaVentaServicio = document.getElementById("fechaVentaServicio").value;
    let formaPagoServicio = document.getElementById("formaPago").value;
    let estadoVentaServicio = document.getElementById("estadoVentaServicio").value;

    if (formaPagoServicio == "" ||idServicio == "" || idCliente == "" || idCita == "" || costoTotalCita == "" || fechaVentaServicio == "") {
        alert("Hay campos sin completar");
        return false;
    }else if (formaPagoServicio == "noSelect"){
        alert("Elegir forma de pago");
        return false;
    }else if (estadoVentaServicio == "noSelect"){
        alert("Elegir estado de la venta");
        return false;
    }else {
      confir = confirm("¿Desea crear la Venta ?");
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