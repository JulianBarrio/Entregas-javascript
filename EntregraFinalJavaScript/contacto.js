
// formulario si esta completo se envia sino tira error

const btnEnviar = document.getElementById('btnEnviar')


btnEnviar.addEventListener('click', enviarForm)

function enviarForm(e) {
    e.preventDefault()
    if (document.getElementById('nombre').value== '' || document.getElementById('mail').value== '' || document.getElementById('mensaje').value== ''){
        swal({
            title: "Error",
            text: "complete todos los datos",
            icon: "error",
          });
          
    } else  {
        swal({
            title: "Mensaje enviado",
            text: "gracias por contactarnos, responderemos a la brevedad",
            icon: "success",
          });
          
    }
  
}