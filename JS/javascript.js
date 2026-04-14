//Track the toggle state
let isActive = false;

//Get elements 
const box = document.getElementById('fondomenu')
 const btn = document.getElementById('ham')

 //Click event
 btn.addEventListener('click', function () {
    if (!isActive) {
        //first click action
        document.getElementById('fondomenu').style.display = "none"
    } else {
        //second click reverses the action
        document.getElementById('fondomenu').style.display = "block"
    }

    //flip the state
    isActive = !isActive;
 });

 
 const boton = document.getElementById("ham");
 const menu = document.getElementById("fondomenu");
 
 boton.addEventListener("click", () => {
   menu.classList.toggle("activo");
 });


 const cards = document.querySelectorAll('.cardsexpo');

function checkCardsInView() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Si el div está al menos 50px dentro de la ventana
        if (rect.top < windowHeight - 50 && rect.bottom > 50) {
            card.classList.add('active'); // agrega la clase para cambiar fondo
        } else {
            card.classList.remove('active'); // remueve la clase cuando sale de la vista
        }
    });
}

// Ejecutar al hacer scroll y al cargar la página
window.addEventListener('scroll', checkCardsInView);
window.addEventListener('load', checkCardsInView);


document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("btnExhibir");
    const curtain = document.getElementById("curtain");
    const fade = document.getElementById("fade");

    btn.addEventListener("click", function (e) {
        e.preventDefault(); // evita irse directo

        // activar telón
        curtain.classList.add("active");

        // activar sombra
        setTimeout(() => {
            fade.classList.add("active");
        }, 400);

        // redirigir después
        setTimeout(() => {
            window.location.href = "exhibir.html";
        }, 1200);
    });

});