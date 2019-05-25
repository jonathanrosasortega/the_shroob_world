function validar(){
    var TextareaNombre=document.getElementById("TextareaNombre").value;
    var TextareaApellidos=document.getElementById("TextareaApellidos").value;
    var eMail=document.getElementById("eMail").value;
    var fechaNacimiento=document.getElementById("fechaNacimiento").value;
    var provincia=document.getElementById("provincia").value;
    
    var valido=true; // si todo va bien después de todas las comprobaciones, sigue a true

    if (TextareaNombre.length==0||parseInt(TextareaNombre)){
        document.getElementById("nombreHelp").style.visibility="visible";
        valido=false;
    }

    if (TextareaApellidos.length==0||parseInt(TextareaApellidos)){
        document.getElementById("apellidosHelp").style.visibility="visible";
        valido=false;
    }

    if (!(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(eMail))) {
        document.getElementById("emailHelp").style.visibility="visible";
        valido=false;
    }

    if (fechaNacimiento==""){
        document.getElementById("fechaNacimientoHelp").style.visibility="visible";
        valido=false;
    }

    if (provincia==0){ 
        document.getElementById("provinciaHelp").style.visibility="visible";
        valido=false;
    }
    
    if (!aceptarTOS.checked){
        document.getElementById("aceptarTOSHelp").style.visibility="visible";
        valido=false;
    }
    return valido;  // devuelve false si alguna comprobación ha fallado
}

function quitarError(msg){
    document.getElementById(msg).style.visibility="hidden";
}
