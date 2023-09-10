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

function backPage(){
    window.location="/compras";
}