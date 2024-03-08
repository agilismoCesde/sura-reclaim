
let cajaTipoDocumento=document.getElementById("tipoDocumento")
let cajaNumeroIdentificacion=document.getElementById("numeroIdentificacion")
let cajaPrefijo=document.getElementById("prefijo")
let cajaFactura=document.getElementById("factura")
let cajaCausal=document.getElementById("causal")
let mensajeBienvenida=document.getElementById("usuarioPersonal")


let botonFormularioConsulta=document.getElementById("botonIngreso")

//DETECTANDO EVENTOS CON JS
botonFormularioConsulta.addEventListener("click",function(evento){

    evento.preventDefault()
    
    //1.capturamos la informacion del formulario
    let tipoDocumento=cajaTipoDocumento.value
    let numeroIdentificacion=cajaNumeroIdentificacion.value
    let prefijo=cajaPrefijo.value
    let factura=cajaFactura.value
    let causal=cajaCausal.value

    console.log(tipoDocumento)
    console.log(numeroIdentificacion)
    console.log(prefijo)
    console.log(factura)
    console.log(causal)

    //validando los datos del uusuario
    if(tipoDocumento=="" || numeroIdentificacion=="" || prefijo=="" || factura=="" || causal=="" ){
     
        Swal.fire({
            icon: "error",
            title: "Verifica la información",
            text: "Uno o más campos se encuentran vacíos",
            
          });
    }

    else {
        Swal.fire({
            icon: "success",
            title: "Listo!",
            text: "Información suministrada con éxito",
            
          });
    }

})

let nombreBanner = sessionStorage.getItem("nombre")
console.log(nombreBanner)

let nombreEtiquetaBanner = document.getElementById("nombreEtiquetaBanner")

nombreEtiquetaBanner.textContent = "Hola " + nombreBanner + "!"