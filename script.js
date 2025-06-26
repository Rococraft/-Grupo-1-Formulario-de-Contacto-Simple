const formulario = document.querySelector('#formulario');

const procesaTodo =(event) =>{
    event.preventDefault();

    const datos = new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());

    console.log(datosCompletos);
}