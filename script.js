document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto de Scroll Reveal
    const observerOptions = { threshold: 0.2 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 2. Interactividad Capas OSI
    const layers = document.querySelectorAll('.pro-layer');
    
    layers.forEach(layer => {
        layer.addEventListener('click', () => {
            // Si ya está activa, la cerramos
            if(layer.classList.contains('active')) {
                layer.classList.remove('active');
            } else {
                // Cerramos las demás y abrimos la actual
                layers.forEach(l => l.classList.remove('active'));
                layer.classList.add('active');
                
                // Efecto de sonido visual o vibración (opcional)
                console.log(`Explorando Capa ${layer.dataset.layer}`);
            }
        });
    });
});