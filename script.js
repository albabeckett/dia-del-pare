/* =============================================
   SOBRE INTERACTIVO - JAVASCRIPT CORREGIDO
   ============================================= */

/**
 * Abrir el sobre (desaparece y muestra la carta)
 */
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letterContainer = document.getElementById('letterContainer');
    const instruction = document.getElementById('instruction');
    const closeBtn = document.getElementById('closeBtn');
    
    // Ocultar sobre
    envelope.classList.add('open');
    
    // Mostrar carta
    letterContainer.classList.add('visible');
    
    // Ocultar instrucción
    instruction.classList.add('hidden');
    
    // Mostrar botón de cerrar
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
    const letterContainer = document.getElementById('letterContainer');
    const instruction = document.getElementById('instruction');
    const closeBtn = document.getElementById('closeBtn');
    
    // Mostrar sobre
    envelope.classList.remove('open');
    
    // Ocultar carta
    letterContainer.classList.remove('visible');
    
    // Mostrar instrucción
    instruction.classList.remove('hidden');
    
    // Ocultar botón de cerrar
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