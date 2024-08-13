//el document es el html, getelementbyid es el elemento que tiene un id al que le quiero obtener, 
//addeventlistener es a ese elemento que obtuve quiero agregarle un evento, 
//entre parentesis pongo como primero argumento el disparador, es decir lo que el usuario hace, 
//y el 2do argumento es lo que se ejecuta cuando el usuario realiza algo

document.getElementById("SaludoDelDiv").addEventListener("click", ElDivSaluda);

function ElDivSaluda(){
    alert('Hola! Soy el div');
}
