// Referencias a los elementos del HTML
const rangeGreen = document.getElementById('range-green');
const rangeRed = document.getElementById('range-red');
const stripeGreen = document.getElementById('stripe-green');
const stripeRed = document.getElementById('stripe-red');
const hexGreen = document.getElementById('hex-green');
const hexRed = document.getElementById('hex-red');
const mainFlag = document.getElementById('main-flag');

// Variables globales para rastrear el color actual de cada lado
let currentGreen = "#000000";
let currentRed = "#000000";

/**
 * Función auxiliar: Convierte un número (0-255) a texto Hexadecimal (00-FF)
 */
function toHex(n) {
    const h = Math.max(0, Math.min(255, n)).toString(16);
    return h.length === 1 ? "0" + h : h;
}

/**
 * Actualiza dinámicamente el resplandor Neón de la bandera 
 * basándose en los colores elegidos por el usuario.
 */
function updateFlagNeon() {
    // Sombra 1: Brillo blanco interno
    // Sombra 2: Resplandor verde a la izquierda
    // Sombra 3: Resplandor rojo a la derecha
    mainFlag.style.boxShadow = `
        0 0 15px #fff, 
        -25px 0 50px ${currentGreen}, 
        25px 0 50px ${currentRed}
    `;
}

/**
 * Lógica para el color Verde: Calcula el brillo de 0 (negro) a 255 (máximo)
 */
function updateGreen() {
    const intensity = parseInt(rangeGreen.value);
    const g = Math.floor((intensity / 100) * 255); // Escala el valor del slider
    
    currentGreen = `#00${toHex(g)}00`.toUpperCase(); // Construye el código Hex
    
    stripeGreen.style.backgroundColor = currentGreen; // Cambia el color de la franja
    hexGreen.textContent = currentGreen; // Muestra el texto Hex
    
    updateFlagNeon(); // Sincroniza el neón de la bandera
}

/**
 * Lógica para el color Rojo: Calcula el brillo de 0 (negro) a 255 (máximo)
 */
function updateRed() {
    const intensity = parseInt(rangeRed.value);
    const r = Math.floor((intensity / 100) * 255);
    
    currentRed = `#${toHex(r)}0000`.toUpperCase();
    
    stripeRed.style.backgroundColor = currentRed;
    hexRed.textContent = currentRed;
    
    updateFlagNeon();
}

// Escuchadores de eventos: Se disparan cada vez que mueves la barrita
rangeGreen.addEventListener('input', updateGreen);
rangeRed.addEventListener('input', updateRed);

// Ejecución inicial para establecer los colores al cargar la página
updateGreen();
updateRed();