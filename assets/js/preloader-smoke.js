// Modifica l'effetto smoke per farlo partire dal centro durante il preloader
(function() {
    'use strict';
    
    // Funzione per creare splat di fumo dal centro
    function createCenterSmoke() {
        const canvas = document.getElementById('tcg-smoke-cursor');
        if (!canvas) return;
        
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        // Crea multipli splat che partono dal centro verso l'esterno
        const splatCount = 48;
        const radius = 60;
        
        for (let i = 0; i < splatCount; i++) {
            const angle = (Math.PI * 2 * i) / splatCount;
            const dx = Math.cos(angle) * radius;
            const dy = Math.sin(angle) * radius;
            
            // Simula un movimento mouse dal centro verso l'esterno
            const pointer = {
                x: centerX,
                y: centerY,
                dx: dx * 0.5,
                dy: dy * 0.5,
                down: true,
                moved: true,
                color: [255, 255, 255] // Colore bianco per il fumo
            };
            
            // Questo dovrebbe interagire con lo smoke-animation.js esistente
            if (window.splatPointer) {
                window.splatPointer(pointer);
            }
        }
    }
    
    // Effetto continuo di fumo durante il caricamento
    let smokeInterval;
    
    function startSmokeEffect() {
        const canvas = document.getElementById('tcg-smoke-cursor');
        if (!canvas) return;
        
        // Crea fumo iniziale più intenso
        createCenterSmoke();
        setTimeout(() => {
            createCenterSmoke();
        }, 40);
        setTimeout(() => {
            createCenterSmoke();
        }, 100);
        setTimeout(() => {
            createCenterSmoke();
        }, 180);
        
        // Continua a creare fumo dal centro ogni 80ms
        smokeInterval = setInterval(() => {
            if (document.querySelector('.loader-wrap') && 
                window.getComputedStyle(document.querySelector('.loader-wrap')).display !== 'none') {
                createCenterSmoke();
            }
        }, 80);
    }
    
    // Avvia l'effetto quando il DOM è pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startSmokeEffect);
    } else {
        startSmokeEffect();
    }
    
    // Pulisci l'intervallo quando il preloader viene chiuso
    window.addEventListener('load', function() {
        setTimeout(() => {
            if (smokeInterval) {
                clearInterval(smokeInterval);
            }
        }, 10000);
    });
    
})();
