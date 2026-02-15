const rangeGreen = document.getElementById('range-green');
const rangeRed = document.getElementById('range-red');
const stripeGreen = document.getElementById('stripe-green');
const stripeRed = document.getElementById('stripe-red');
const hexGreen = document.getElementById('hex-green');
const hexRed = document.getElementById('hex-red');
const mainFlag = document.getElementById('main-flag');

// Variables para guardar el color actual y actualizar el neón global
let currentGreen = "#000000";
let currentRed = "#000000";

function toHex(n) {
    const h = Math.max(0, Math.min(255, n)).toString(16);
    return h.length === 1 ? "0" + h : h;
}

/**
 * Actualiza el resplandor neón de la bandera combinando ambos colores
 */
function updateFlagNeon() {
    // Aplicamos una sombra blanca interna y dos sombras externas (una verde y una roja)
    mainFlag.style.boxShadow = `
        0 0 15px #fff, 
        -20px 0 40px ${currentGreen}, 
        20px 0 40px ${currentRed}
    `;
}

function updateGreen() {
    const intensity = parseInt(rangeGreen.value);
    const g = Math.floor((intensity / 100) * 255);
    currentGreen = `#00${toHex(g)}00`.toUpperCase();
    
    stripeGreen.style.backgroundColor = currentGreen;
    hexGreen.textContent = currentGreen;
    hexGreen.style.color = intensity > 40 ? '#00ff88' : '#fff';
    
    updateFlagNeon();
}

function updateRed() {
    const intensity = parseInt(rangeRed.value);
    const r = Math.floor((intensity / 100) * 255);
    currentRed = `#${toHex(r)}0000`.toUpperCase();
    
    stripeRed.style.backgroundColor = currentRed;
    hexRed.textContent = currentRed;
    hexRed.style.color = intensity > 40 ? '#ff0044' : '#fff';
    
    updateFlagNeon();
}

rangeGreen.addEventListener('input', updateGreen);
rangeRed.addEventListener('input', updateRed);

// Inicialización
updateGreen();
updateRed();