/* =============================================
   SOBRE INTERACTIVO - JAVASCRIPT
   ============================================= */

/**
 * Alternar la apertura/cierre del sobre
 */
function toggleEnvelope() {
    const envelope = document.getElementById('envelope');
    envelope.classList.toggle('open');
}

/**
 * Cerrar el sobre si se hace clic fuera de él
 */
document.addEventListener('click', function(e) {
    const container = document.querySelector('.container');
    const envelope = document.getElementById('envelope');
    
    if (!container.contains(e.target) && envelope.classList.contains('open')) {
        envelope.classList.remove('open');
    }
});

/**
 * Opcional: Abrir/cerrar con la tecla Enter o Espacio
 */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const envelope = document.getElementById('envelope');
        envelope.classList.toggle('open');
    }
});