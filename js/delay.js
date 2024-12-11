// delay.js

// Función para simular un retraso antes de ejecutar la siguiente función
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Llamada a la función de retraso (por ejemplo, 2 segundos)
delay(2000).then(() => {
    console.log('Retraso completado');
});
