// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtener elementos
    const envelope = document.getElementById('envelope');
    const letterContainer = document.getElementById('letterContainer');
    const instruction = document.getElementById('instruction');
    const closeBtn = document.getElementById('closeBtn');
    
    // Función para abrir el sobre
    function openEnvelope() {
        console.log('Abriendo sobre...'); // Para debug
        
        envelope.classList.add('open');
        letterContainer.classList.add('visible');
        instruction.classList.add('hidden');
        closeBtn.classList.add('visible');
        
        // Scroll hacia arriba
        setTimeout(function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 300);
    }
    
    // Función para cerrar el sobre
    function closeEnvelope() {
        console.log('Cerrando sobre...'); // Para debug
        
        envelope.classList.remove('open');
        letterContainer.classList.remove('visible');
        instruction.classList.remove('hidden');
        closeBtn.classList.remove('visible');
        
        // Scroll de vuelta al centro
        setTimeout(function() {
            window.scrollTo({
                top: document.body.scrollHeight / 2 - window.innerHeight / 2,
                behavior: 'smooth'
            });
        }, 300);
    }
    
    // Añadir event listeners
    envelope.addEventListener('click', openEnvelope);
    closeBtn.addEventListener('click', closeEnvelope);
    
    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && closeBtn.classList.contains('visible')) {
            closeEnvelope();
        }
    });
    
    // Centrar página al cargar
    window.scrollTo({
        top: document.body.scrollHeight / 2 - window.innerHeight / 2,
        behavior: 'auto'
    });
    
    console.log('Página cargada correctamente'); // Para debug
});