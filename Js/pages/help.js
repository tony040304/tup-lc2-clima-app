function limpiarForm() {
    let formulario = document.getElementById("form-ayuda");
    formulario.reset()
}

function send(){
  let mail = document.getElementById("mensaje");
  validarEmail(mail);
}

function validarEmail(email) {
  let error = document.getElementById("mensaje");
  expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if ( !expr.test(email) ){
      error.style.display = "block";
      setInterval(function(){
          error.style.display = "none";
      }, 2000);
  }
}