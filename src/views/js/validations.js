// Validar Usuario

function valid(){
    let user = document.getElementById("usuario").value;
    let email = document.getElementById("correo").value;
    let rol = document.getElementById("role").value;
    let pass = document.getElementById("password").value;
    let expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (user == "" || email == "" || pass == "" ) {
        alert("Campos vacíos");
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

function validarCompra(){
    let id = document.getElementById("idC").value;
    let date = document.getElementById("dateCompra").value;
    let cost = document.getElementById("totalCost").value;
    let prod = document.getElementById("prod").value;

    if (id == "" || date == "" || cost == ""){
        alert ("Faltan datos en la compra.");
        return false;
    }else if (prod == "noSelect"){
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
    window.location="/compras";
}