/* =============================================
   SOBRE INTERACTIVO - JAVASCRIPT
   ============================================= */

/**
 * Alternar la apertura/cierre del sobre con scroll automático
 */
function toggleEnvelope() {
    const envelope = document.getElementById('envelope');
    const isOpening = !envelope.classList.contains('open');
    
    envelope.classList.toggle('open');
    
    // Scroll automático cuando se abre el sobre
    if (isOpening) {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'  // Scroll suave
            });
        }, 400);  // Espera a que la animación esté halfway
    }
}

/**
 * Cerrar el sobre si se hace clic fuera de él
 */
document.addEventListener('click', function(e) {
    const container = document.querySelector('.container');
    const envelope = document.getElementById('envelope');
    
    if (!container.contains(e.target) && envelope.classList.contains('open')) {
        envelope.classList.remove('open');
        
        // Scroll de vuelta al centro cuando se cierra
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight / 2 - window.innerHeight / 2,
                behavior: 'smooth'
            });
        }, 400);
    }
});

/**
 * Abrir/cerrar con la tecla Enter o Espacio
 */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();  // Evita scroll con espacio
        const envelope = document.getElementById('envelope');
        const isOpening = !envelope.classList.contains('open');
        
        envelope.classList.toggle('open');
        
        if (isOpening) {
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 400);
        }
    }
});

/**
 * Opcional: Scroll automático al cargar la página (centrado)
 */
window.addEventListener('load', function() {
    window.scrollTo({
        top: document.body.scrollHeight / 2 - window.innerHeight / 2,
        behavior: 'auto'
    });
});