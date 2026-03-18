/* =============================================
   SOBRE INTERACTIVO - JAVASCRIPT
   ============================================= */

/**
 * Abrir el sobre (desaparece y muestra la carta)
 */
function toggleEnvelope() {
    const envelope = document.getElementById('envelope');
    const instruction = document.getElementById('instruction');
    const closeBtn = document.getElementById('closeBtn');
    
    envelope.classList.add('open');
    instruction.classList.add('hidden');
    closeBtn.classList.add('visible');
    
    // Scroll suave hacia arriba para ver la carta completa
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 300);
}

/**
 * Cerrar la carta (vuelve a mostrar el sobre)
 */
function closeEnvelope() {
    const envelope = document.getElementById('envelope');
    const instruction = document.getElementById('instruction');
    const closeBtn = document.getElementById('closeBtn');
    
    envelope.classList.remove('open');
    instruction.classList.remove('hidden');
    closeBtn.classList.remove('visible');
    
    // Scroll de vuelta al centro
    setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight / 2 - window.innerHeight / 2,
            behavior: 'smooth'
        });
    }, 300);
}

/**
 * Cerrar con la tecla Escape
 */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const closeBtn = document.getElementById('closeBtn');
        if (closeBtn.classList.contains('visible')) {
            closeEnvelope();
        }
    }
});

/**
 * Centrar la página al cargar
 */
window.addEventListener('load', function() {
    window.scrollTo({
        top: document.body.scrollHeight / 2 - window.innerHeight / 2,
        behavior: 'auto'
    });
});