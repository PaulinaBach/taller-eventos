document.getElementById("SaludoDelDiv").addEventListener("click", ElDivSaluda);

document.getElementById("boton").addEventListener('click', function(event) {
    event.stopPropagation(); // Detener la propagación del evento
    alert('Hola!');
});

function ElDivSaluda(){
    alert('Hola! Soy el div');
}
