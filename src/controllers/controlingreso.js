let usuarioBaseDatos="Santposa"
let contrasenaBaseDatos="12345"


let botonFormulario=document.getElementById("botonIngreso")
let cajaFormularioNombre=document.getElementById("nombre")
let cajaFormularioPassword=document.getElementById("password")

//DETECTANDO EVENTOS CON JS
botonFormulario.addEventListener("click",function(evento){

    evento.preventDefault()
    
    //1.capturamos la informacion del formulario
    let nombreUsuario=cajaFormularioNombre.value
    let passwordUsario=cajaFormularioPassword.value

    //validando los datos del uusuario
    if(usuarioBaseDatos==nombreUsuario && contrasenaBaseDatos==passwordUsario){
        Swal.fire({
            title: "Bienvenido "+ nombreUsuario + "!",
            text: "Tus credenciales son correctas!",
            icon: "success"
        })

        setTimeout(function(){
            sessionStorage.setItem("nombre",nombreUsuario)
            sessionStorage.setItem("password",passwordUsario)
            window.location.href="./views/home.html"
        },1000)
        


    }else{
        Swal.fire({
            icon: "error",
            title: nombreUsuario +" No Estas Autorizado Para Realizar Esta Consulta",
            text: "Verifica tus credenciales!",
            text: "Contáctate con www.consultasydevoluciones.com",
            
          });
    }

})