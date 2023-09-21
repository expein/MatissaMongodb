function cambiarEstadoUser(id){
    let user = document.getElementById(id);
    alert(id);
    if(!user.checked){
        let confir = confirm("¿Desea inhabilitar el usuario?");
        if (!confir){
            user.cheked = true;
        }
        return confir;
        
        
    }else{
        let confir = confirm("¿Desea habilitar el usuario?");
        if (confir){
            user.cheked = false;
        }
        return confir;
    }
}