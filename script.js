function validateForm() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    alert(nombre+ " "+apellido+". Hemos recibido tu mensaje. Te contactaremos pronto, en el correo: " + email + ".");
}
const procesaTodo =(event) =>{
    event.preventDefault();

    const datos = new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());

    console.log(JSON.stringify(datosCompletos));
}

formulario.addEventListener('submit', procesaTodo);
formulario.addEventListener('submit', validateForm);