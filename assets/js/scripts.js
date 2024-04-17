// script.js

// Espera a que el documento HTML esté completamente cargado antes de ejecutar el código JavaScript
document.addEventListener("DOMContentLoaded", () => {
    // Obtén los botones
    const botones = document.querySelectorAll('.comics button');
    
    // Agrega un evento de clic a cada botón
    botones.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            // Redirige a la página correspondiente según el índice del botón
            if (index === 0) {
                window.location.href = 'BNH.html';
            } else if (index === 1) {
                window.location.href = 'CSM.html';
            } else if (index === 2) {
                window.location.href = 'INV.html';
            }
        });
    });

    // Obtén el enlace "Home" en la barra de navegación
    const enlaceHome = document.querySelector('.nav-link.active');

    // Agrega un evento de clic al enlace "Home"
    enlaceHome.addEventListener('click', () => {
        // Redirige a la página index.html
        window.location.href = 'index.html';
    });
});
