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

    // Evento para el registro de usuario
    document.getElementById("registro-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores ingresados por el usuario
        var email = document.getElementById("inputEmail").value;
        var password = document.getElementById("inputPassword").value;

        // Guardar los datos del usuario en el almacenamiento local
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("Usuario registrado correctamente. Puede iniciar sesión ahora.");
    });

    // Evento para iniciar sesión y comprar
document.getElementById("inicio-sesion-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener el cómic seleccionado almacenado localmente
    const comicSeleccionado = localStorage.getItem("comicSeleccionado");

    // Verificar si se ha seleccionado un cómic
    if (!comicSeleccionado) {
        alert("No se ha seleccionado ningún cómic para comprar.");
        return;
    }

    // Aquí puedes agregar la lógica para iniciar sesión
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simulación de inicio de sesión exitoso
        if (email === "usuario@example.com" && password === "contraseña") {
            // Realizar la compra y actualizar el stock del cómic seleccionado
            alert("¡Compra realizada con éxito!");
            // Actualizar el stock del cómic seleccionado en el servidor o en el almacenamiento local
            // Ejemplo: restar 1 al stock del cómic seleccionado

            // Limpiar el cómic seleccionado del almacenamiento local después de la compra
            localStorage.removeItem("comicSeleccionado");
        } else {
            alert("Correo electrónico o contraseña incorrectos. Por favor, inténtelo de nuevo.");
        }
    });

        // Evento para comprar como invitado
    document.getElementById("comprar-inv").addEventListener("click", function() {
        // Obtener el cómic seleccionado almacenado localmente
        const comicSeleccionado = localStorage.getItem("comicSeleccionado");

        // Verificar si se ha seleccionado un cómic
        if (!comicSeleccionado) {
            alert("No se ha seleccionado ningún cómic para comprar.");
            return;
        }

        // Obtener el stock actual del cómic seleccionado
        let stock = parseInt(localStorage.getItem(comicSeleccionado));

        // Verificar si hay stock disponible
        if (stock <= 0) {
            alert("¡El cómic seleccionado está agotado!");
            return;
        }

        // Simular la compra restando -1 al stock del cómic seleccionado
        stock -= 1;

        // Actualizar el stock del cómic seleccionado en el almacenamiento local
        localStorage.setItem(comicSeleccionado, stock.toString());

        // Mostrar una alerta de cómic comprado
        alert("¡Cómic comprado!");
    });
});