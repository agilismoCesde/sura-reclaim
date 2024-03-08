

let botonFormulario=document.getElementById("botonIngreso")
let cajaFormularioNombre=document.getElementById("nombre")
let cajaFormularioEmail=document.getElementById("email")
let cajaFormularioTelefono=document.getElementById("telefono")

//DETECTANDO EVENTOS CON JS
botonFormulario.addEventListener("click",function(evento){

    evento.preventDefault()
    
    //1.capturamos la informacion del formulario
    let nombreUsuario=cajaFormularioNombre.value
    let correoUsuario=cajaFormularioEmail.value
    let telefonoUsario=cajaFormularioTelefono.value

    //validando los datos del uusuario
    if(nombreUsuario=="" || correoUsuario=="" || telefonoUsario==""){
        Swal.fire({
            title: "Error "+nombreUsuario,
            text: "Uno o más campos están incompletos",
            icon: "error"
        })

            


    }else{
        Swal.fire({
            icon: "success",
            title: "Actualización exitosa",
            text: "Tus datos han sido actualizados con éxito.",
            
          });
    }

})