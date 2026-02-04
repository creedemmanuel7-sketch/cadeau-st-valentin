// ========================================
// CONFIGURATION DES DATES
// ========================================
const dateRencontre = new Date(2018, 9, 15, 7, 30); // Octobre 2018
const dateOfficielle = new Date(2023, 10, 26, 9, 0); // 26 novembre 2023 (mois 10 car janvier = 0)

// ========================================
// ÉCRAN D'ACCUEIL
// ========================================
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('mainContent');
const bgMusic = document.getElementById('bgMusic');
const heartPulse = document.querySelector('.heart-pulse');

// Clic sur le cœur pour démarrer
heartPulse.addEventListener('click', () => {
    // Masquer l'écran d'accueil
    welcomeScreen.classList.add('hidden');
    
    // Afficher le contenu principal
    setTimeout(() => {
        mainContent.classList.add('visible');
    }, 800);
    
    // Lancer la musique (si elle existe)
    if (bgMusic) {
        bgMusic.play().catch(err => {
            console.log('Autoplay bloqué par le navigateur:', err);
        });
    }
    
    // Effet confetti de bienvenue
    confettiWelcome();
});

// ========================================
// COMPTEUR EN TEMPS RÉEL
// ========================================
function updateCountdown() {
    const now = new Date();
    
    function getDiff(targetDate) {
        const diff = now - targetDate;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        
        return {
            days,
            hours,
            minutes,
            seconds,
            formatted: `${days} jours, ${hours}h ${minutes}m ${seconds}s`
        };
    }
    
    const sinceStart = getDiff(dateRencontre);
    const sinceOfficial = getDiff(dateOfficielle);
    
    // Mise à jour avec animation
    const countSinceStart = document.getElementById('countSinceStart');
    const countOfficial = document.getElementById('countOfficial');
    
    if (countSinceStart) {
        countSinceStart.innerHTML = sinceStart.formatted;
    }
    
    if (countOfficial) {
        countOfficial.innerHTML = sinceOfficial.formatted;
    }
}

// Mise à jour chaque seconde
setInterval(updateCountdown, 1000);
updateCountdown(); // Premier appel immédiat

// ========================================
// ANIMATIONS AU SCROLL (Simple AOS)
// ========================================
function animateOnScroll() {
    const elements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => {
        observer.observe(el);
    });
}

// Lancer l'animation au chargement
window.addEventListener('load', animateOnScroll);

// ========================================
// BOUTON SURPRISE - CONFETTI
// ========================================
const surpriseBtn = document.getElementById('surpriseBtn');

surpriseBtn.addEventListener('click', () => {
    // Animation du bouton
    surpriseBtn.style.transform = 'scale(0.9)';
    setTimeout(() => {
        surpriseBtn.style.transform = 'scale(1)';
    }, 100);
    
    // Pluie de cœurs pendant 5 secondes
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        // Cœurs depuis la gauche
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 },
            colors: ['#ff4b4b', '#ff8585', '#ffb3b3'],
            shapes: ['circle'],
            scalar: 1.2,
            gravity: 1,
            drift: 0
        });
        
        // Cœurs depuis la droite
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 },
            colors: ['#ff4b4b', '#ff8585', '#ffb3b3'],
            shapes: ['circle'],
            scalar: 1.2,
            gravity: 1,
            drift: 0
        });
        
        // Cœurs depuis le haut (effet pluie)
        confetti({
            particleCount: 1,
            angle: 90,
            spread: 45,
            origin: { x: Math.random(), y: 0 },
            colors: ['#ff4b4b', '#ff8585', '#ffb3b3'],
            shapes: ['circle'],
            scalar: 1.5,
            gravity: 0.5,
            drift: Math.random() * 0.5 - 0.25
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
});

// ========================================
// CONFETTI DE BIENVENUE
// ========================================
function confettiWelcome() {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 100,
            origin: { x: 0 },
            colors: ['#ff4b4b', '#ff8585', '#ffb3b3', '#ffffff']
        });
        
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 100,
            origin: { x: 1 },
            colors: ['#ff4b4b', '#ff8585', '#ffb3b3', '#ffffff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// ========================================
// EFFET PARALLAX LÉGER SUR LES PHOTOS
// ========================================
window.addEventListener('scroll', () => {
    const photos = document.querySelectorAll('.photo-card');
    const scrolled = window.pageYOffset;
    
    photos.forEach((photo, index) => {
        const speed = 0.05 + (index % 3) * 0.02; // Vitesse variable
        const yPos = -(scrolled * speed);
        photo.style.transform = `translateY(${yPos}px)`;
    });
});

// ========================================
// EASTER EGG: Double clic sur le titre
// ========================================
const mainTitle = document.querySelector('.main-title');
let clickCount = 0;

if (mainTitle) {
    mainTitle.addEventListener('click', () => {
        clickCount++;
        
        if (clickCount === 2) {
            // Message secret
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#ff4b4b', '#ff8585', '#ffb3b3']
            });
            
            alert('💖 Je t\'aime plus que tout ! 💖');
            clickCount = 0;
        }
        
        // Reset après 1 seconde
        setTimeout(() => {
            clickCount = 0;
        }, 1000);
    });
}

// ========================================
// GESTION DU VOLUME MUSIQUE (optionnel)
// ========================================
if (bgMusic) {
    bgMusic.volume = 0.3; // 30% du volume
}

// ========================================
// SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// CONSOLE MESSAGE (Easter Egg)
// ========================================
console.log('%c💖 Cette page a été créée avec amour 💖', 
    'font-size: 20px; color: #ff4b4b; font-weight: bold;');
console.log('%cPour la personne la plus spéciale au monde ❤️', 
    'font-size: 14px; color: #ff8585;');
