// Selección de elementos del DOM para manipularlos
const rangeGreen = document.getElementById('range-green');
const rangeRed = document.getElementById('range-red');
const stripeGreen = document.getElementById('stripe-green');
const stripeRed = document.getElementById('stripe-red');
const hexGreen = document.getElementById('hex-green');
const hexRed = document.getElementById('hex-red');
const mainFlag = document.getElementById('main-flag');

// Variables para almacenar los colores actuales en formato Hex
let currentGreen = "#000000";
let currentRed = "#000000";

/**
 * Función auxiliar para convertir un número decimal a hexadecimal de 2 dígitos
 */
function toHex(n) {
    const h = Math.max(0, Math.min(255, n)).toString(16);
    return h.length === 1 ? "0" + h : h;
}

/**
 * Actualiza el resplandor neón exterior de la bandera
 * Combina el blanco central con los colores dinámicos de los extremos
 */
function updateFlagNeon() {
    mainFlag.style.boxShadow = `
        0 0 15px #fff, 
        -20px 0 40px ${currentGreen}, 
        20px 0 40px ${currentRed}
    `;
}

/**
 * Gestiona el cambio en la franja verde: desde negro hasta verde brillante
 */
function updateGreen() {
    const intensity = parseInt(rangeGreen.value);
    const g = Math.floor((intensity / 100) * 255);
    currentGreen = `#00${toHex(g)}00`.toUpperCase();
    
    stripeGreen.style.backgroundColor = currentGreen;
    hexGreen.textContent = currentGreen;
    hexGreen.style.color = intensity > 40 ? '#00ff88' : '#fff';
    
    updateFlagNeon();
}

/**
 * Gestiona el cambio en la franja roja: desde negro hasta rojo brillante
 */
function updateRed() {
    const intensity = parseInt(rangeRed.value);
    const r = Math.floor((intensity / 100) * 255);
    currentRed = `#${toHex(r)}0000`.toUpperCase();
    
    stripeRed.style.backgroundColor = currentRed;
    hexRed.textContent = currentRed;
    hexRed.style.color = intensity > 40 ? '#ff0044' : '#fff';
    
    updateFlagNeon();
}

// Escuchadores de eventos para detectar movimiento en los sliders
rangeGreen.addEventListener('input', updateGreen);
rangeRed.addEventListener('input', updateRed);

// Llamada inicial para renderizar la página con los colores por defecto
updateGreen();
updateRed();