// Modifica l'effetto smoke per farlo partire dal centro durante il preloader
(function() {
    'use strict';
    
    // Funzione per creare TANTISSIMO fumo dal centro
    function createMassiveSmoke() {
        const canvas = document.getElementById('tcg-smoke-cursor');
        if (!canvas || !window.splatSmoke) return;
        
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        // Crea fumo dal centro - ridotto per performance!
        const layers = [
            { count: 20, radius: 200, speed: 700 },
            { count: 15, radius: 140, speed: 600 },
            { count: 10, radius: 80, speed: 500 }
        ];
        
        layers.forEach((layer, layerIndex) => {
            for (let i = 0; i < layer.count; i++) {
                const angle = (Math.PI * 2 * i) / layer.count + (layerIndex * 0.3);
                const offsetX = Math.cos(angle) * layer.radius;
                const offsetY = Math.sin(angle) * layer.radius;
                
                const dx = offsetX / layer.radius * layer.speed;
                const dy = offsetY / layer.radius * layer.speed;
                
                const color = {
                    r: 10.0,
                    g: 10.0,
                    b: 10.0
                };
                
                window.splatSmoke(centerX, centerY, dx, dy, color);
            }
        });
    }
    
    // Funzione per creare piccole nuvole di fumo casuali sparse
    function createRandomSmoke() {
        const canvas = document.getElementById('tcg-smoke-cursor');
        if (!canvas || !window.splatSmoke) return;
        
        // Crea 1-2 piccole nuvole casuali
        const numClouds = Math.floor(Math.random() * 2) + 1;
        
        for (let cloud = 0; cloud < numClouds; cloud++) {
            // Posizione casuale ma preferibilmente vicino al centro
            const randomX = canvas.width * (0.3 + Math.random() * 0.4);
            const randomY = canvas.height * (0.3 + Math.random() * 0.4);
            
            // Piccola nuvola con poche particelle
            const particleCount = 6;
            const radius = 25 + Math.random() * 15;
            
            for (let i = 0; i < particleCount; i++) {
                const angle = (Math.PI * 2 * i) / particleCount;
                const offsetX = Math.cos(angle) * radius;
                const offsetY = Math.sin(angle) * radius;
                
                const dx = offsetX / radius * 250; // Ridotto da 400 a 250
                const dy = offsetY / radius * 250;
                
                const color = {
                    r: 8.0 + Math.random() * 2.0,
                    g: 8.0 + Math.random() * 2.0,
                    b: 8.0 + Math.random() * 2.0
                };
                
                window.splatSmoke(randomX, randomY, dx, dy, color);
            }
        }
    }
    
    // Effetto continuo di fumo durante il caricamento
    let smokeInterval;
    
    function startSmokeEffect() {
        const canvas = document.getElementById('tcg-smoke-cursor');
        if (!canvas) return;
        
        // Attendi che smoke-animation.js sia pronto
        const waitForSmoke = setInterval(() => {
            if (window.splatSmoke) {
                clearInterval(waitForSmoke);
                
                // ESPLOSIONE INIZIALE - ridotta per performance
                for (let i = 0; i < 8; i++) {
                    setTimeout(() => {
                        createMassiveSmoke();
                    }, i * 30);
                }
                
                // Continua a creare fumo ogni 60ms
                smokeInterval = setInterval(() => {
                    if (document.querySelector('.loader-wrap') && 
                        window.getComputedStyle(document.querySelector('.loader-wrap')).display !== 'none') {
                        createMassiveSmoke();
                    }
                }, 60);
                
                // FERMA il fumo centrale dopo 2 secondi
                setTimeout(() => {
                    if (smokeInterval) {
                        clearInterval(smokeInterval);
                    }
                }, 2000);
                
                // Fumo casuale sparse ogni 400ms - continua fino alla fine
                const randomSmokeInterval = setInterval(() => {
                    if (document.querySelector('.loader-wrap') && 
                        window.getComputedStyle(document.querySelector('.loader-wrap')).display !== 'none') {
                        createRandomSmoke();
                    }
                }, 400);
                
                // Esplosioni BONUS solo nei primi 2 secondi
                const boostIntervals = [500, 1000, 1500];
                boostIntervals.forEach(time => {
                    setTimeout(() => {
                        for (let i = 0; i < 5; i++) {
                            setTimeout(() => createMassiveSmoke(), i * 20);
                        }
                    }, time);
                });
                
                // Pulisci anche l'intervallo del fumo casuale
                window.addEventListener('load', function() {
                    setTimeout(() => {
                        clearInterval(randomSmokeInterval);
                    }, 10000);
                });
            }
        }, 100);
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
