// Sistema di traduzione IT/EN
const translations = {
    it: {
        // Menu
        "nav-home": "Home",
        "nav-about": "Chi siamo",
        "nav-menu": "Menu",
        "nav-contact": "Contattaci",
        "nav-location": "Dove trovarci",
        
        // Banner
        "welcome": "Benvenuti!",
        "banner-tagline": "Spezie che sussurrano storie,<br> aromi che raccontano terre lontane.",
        
        // Chi siamo
        "about-title": "Chi siamo",
        "about-text-1": "Ogni piatto ha una conseguenza. Per questo cuciniamo con intenzione, scegliendo ingredienti locali, stagionali e sostenibili. Rispettiamo la terra, chi la coltiva e chi la nutre.",
        "about-text-2": "Crediamo che ciò che cucini torni indietro. Meglio farlo delizioso!",
        "about-text-3": "Noi scegliamo di mettere sapore, etica e bellezza. Cotto con Karma è più di una cucina: <span>è un modo di vivere.</span> Mangia bene. Vivi meglio.",
        
         // Feature boxes
        "feature-1-title": "Cucina Pulita e Sicura",
        "feature-1-text": "Ogni piatto nasce in un ambiente curato e igienico, dove i sapori indiani incontrano la tradizione italiana per regalarti un'esperienza unica e sicura.",
        "feature-2-title": "Ingredienti Freschi",
        "feature-2-text": "Solo prodotti freschi e selezionati, scelti con cura per esaltare ogni aroma e ogni spezia, un viaggio tra l'India e l'Italia in ogni morso.",
        "feature-3-title": "Chef Esperti",
        "feature-3-text": "I nostri chef combinano tecniche indiane e italiane per creare piatti ricchi di gusto, sapori intensi e presentazioni sorprendenti.",
        "feature-4-title": "Eventi e Feste",
        "feature-4-text": "Porta la magia dei nostri sapori a casa tua o in azienda: eventi personalizzati che uniscono il meglio dell'India e dell'Italia.",
        
        // Menu section
        "menu-subtitle": "Special selection",
        "menu-title": "Dal <span>Nostro Menu</span>",
        "download-menu": "Scarica qui il menù",
        "download-allergens": "Scarica qui gli allergeni",
        
        // Menu tabs
        "tab-antipasti": "Antipasti",
        "tab-contorni": "Contorni",
        "tab-biryani": "Biryani e dosa",
        "tab-secondi": "Secondi",
        "tab-dolci": "Dolci",
        "tab-pane": "Pane",
        "tab-altro": "Altro",
        
        // Contattaci
        "contact-subtitle": "Prenotazioni",
        "contact-title": "Un amore tra <span>spezie</span> e <span>tradizioni.</span>",
        "contact-text": "Contattaci per maggiori informazioni",
        "special-request": "Richiesta <br> <span>speciale</span>",
        "special-request-text": "Saremo pronti a stupirvi.",
        "send-email": "Invia email",
        
        // Recensioni
        "review-title": "Tra spezie <span>indiane</span><br> e cuore <span>italiano</span>",
        "review-text": "Spezie che susciteranno storie, che raccontano terre lontane",
        
        // Footer
        "address-title": "Indirizzo",
        "call-title": "Chiamaci",
        "hours-title": "Orari",
        "hours-text": "Dal martedì al venerdì: <br> 11:00-15:00 <br> 17:00-19:30 <br> Sabato: 10:30-18 <br> Chiuso domenica e lunedì",
        
        // Mobile menu
        "contact-info": "Contatti"
    },
    en: {
        // Menu
        "nav-home": "Home",
        "nav-about": "About us",
        "nav-menu": "Menu",
        "nav-contact": "Contact us",
        "nav-location": "Find us",
        
        // Banner
        "welcome": "Welcome!",
        "banner-tagline": "Spices that whisper stories,<br> aromas that tell of distant lands.",
        
        // Chi siamo
        "about-title": "About us",
        "about-text-1": "Every dish has a consequence. That's why we cook with intention, choosing local, seasonal and sustainable ingredients. We respect the earth, those who cultivate it and those who nourish it.",
        "about-text-2": "We believe that what you cook comes back to you. Better make it delicious!",
        "about-text-3": "We choose to put flavor, ethics and beauty. Cotto con Karma is more than a kitchen: <span>it's a way of life.</span> Eat well. Live better.",
        
        // Feature boxes
        "feature-1-title": "Clean and Safe Kitchen",
        "feature-1-text": "Every dish is born in a well-kept and hygienic environment, where Indian flavors meet Italian tradition to give you a unique and safe experience.",
        "feature-2-title": "Fresh Ingredients",
        "feature-2-text": "Only fresh and selected products, carefully chosen to enhance every aroma and spice, a journey between India and Italy in every bite.",
        "feature-3-title": "Expert Chefs",
        "feature-3-text": "Our chefs combine Indian and Italian techniques to create dishes rich in taste, intense flavors and surprising presentations.",
        "feature-4-title": "Events and Parties",
        "feature-4-text": "Bring the magic of our flavors to your home or company: personalized events that combine the best of India and Italy.",
        
        // Menu section
        "menu-subtitle": "Special selection",
        "menu-title": "From <span>Our Menu</span>",
        "download-menu": "Download the menu here",
        "download-allergens": "Download allergens list here",
        
        // Menu tabs
        "tab-antipasti": "Starters",
        "tab-contorni": "Side dishes",
        "tab-biryani": "Biryani and dosa",
        "tab-secondi": "Main courses",
        "tab-dolci": "Desserts",
        "tab-pane": "Bread",
        "tab-altro": "Other",
        
        // Contattaci
        "contact-subtitle": "Reservations",
        "contact-title": "A love between <span>spices</span> and <span>traditions.</span>",
        "contact-text": "Contact us for more information",
        "special-request": "Special <br> <span>request</span>",
        "special-request-text": "We will be ready to amaze you.",
        "send-email": "Send email",
        
        // Recensioni
        "review-title": "Between <span>Indian</span> spices<br> and <span>Italian</span> heart",
        "review-text": "Spices that will evoke stories, telling of distant lands",
        
        // Footer
        "address-title": "Address",
        "call-title": "Call us",
        "hours-title": "Hours",
        "hours-text": "Tuesday to Friday: <br> 11:00-15:00 <br> 17:00-19:30 <br> Saturday: 10:30-18 <br> Closed Sunday and Monday",
        
        // Mobile menu
        "contact-info": "Contact Info"
    }
};

// Funzione per cambiare lingua
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Aggiorna stato bandierine
    document.querySelectorAll('.lang-flag').forEach(flag => {
        flag.classList.remove('active');
    });
    document.querySelector(`.lang-flag[data-lang="${lang}"]`)?.classList.add('active');
}

// Inizializza lingua al caricamento della pagina
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('language') || 'it';
    setLanguage(savedLang);
    
    // Click handler per bandierine
    document.querySelectorAll('.lang-flag').forEach(flag => {
        flag.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
