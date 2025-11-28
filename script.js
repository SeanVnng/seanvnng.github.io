document.addEventListener("DOMContentLoaded", function() {
    
// --- 0. DICTIONNAIRE DE TRADUCTION ---
    const translations = {
        fr: {
            nav_work: "Projets",
            nav_about: "Profil",
            nav_contact: "Contact",
            hero_status: "START : 09/2025",
            hero_subtitle_1: "Étudiant en Réseaux & Télécoms.",
            hero_subtitle_2: "Je conçois des infrastructures",
            hero_word_1: "résilientes",
            hero_subtitle_3: "et des interfaces",
            hero_word_2: "précises",
            hero_scroll: "Scroll pour explorer",
            section_projects: "Projets",
            proj_1_title: "Assistant Vocal IA",
            proj_2_title: "Architecture Sécurisée",
            proj_3_title: "Extension Chrome - ToDoList",
            proj_4_title: "Carte Interactive – Data Visualization",
            proj_5_title: "Caméra IA – Détection en Temps Réel",
            
            section_profile: "Profil",
            bio_line_1: "Technicien curieux.",
            bio_line_2: "Développeur",
            bio_word_1: "pragmatique",

            bio_desc_1: "Actuellement étudiant en 2e année de BUT R&T, spécialité ",
            bio_a_1: "Cybersécurité", // Mot clé 1
            bio_desc_2: ". J’aime optimiser et sécuriser les systèmes. En 2025, je vise une ",
            bio_a_2: "école d’ingénieur", // Mot clé 2
            bio_desc_3: " orientée ",
            bio_a_3: "Cybersécurité", // Mot clé 3
            bio_desc_4: " ou ",
            bio_a_4: "Intelligence Artificielle", // Mot clé 4
            bio_desc_5: " afin de travailler sur des projets à fort impact.",

            btn_cv: "Télécharger CV",
            section_stack: "Stack Technique",
            btn_see_all: "Voir tout",
            lang_btn: "EN"
        },
        en: {
            nav_work: "Work",
            nav_about: "About",
            nav_contact: "Contact",
            hero_status: "START : 09/2025",
            hero_subtitle_1: "Network & Telecom Student.",
            hero_subtitle_2: "I design",
            hero_word_1: "resilient",
            hero_subtitle_3: "infrastructures and",
            hero_word_2: "precise",
            hero_scroll: "Scroll to explore",
            section_projects: "Selected Work",
            proj_1_title: "AI Voice Assistant",
            proj_2_title: "Secure Architecture",
            proj_3_title: "Productivity Suite",
            proj_4_title: "Interactive Map – Data Viz",
            proj_5_title: "AI Camera – Real Time Detection",

            section_profile: "About",
            bio_line_1: "Curious technician.",
            bio_line_2: "Pragmatic",
            bio_word_1: "developer",

            bio_desc_1: "Currently a 2nd year BUT R&T student specializing in ",
            bio_a_1: "Cybersecurity",
            bio_desc_2: ". I enjoy optimizing and securing systems. In 2025, I aim for an ",
            bio_a_2: "engineering school",
            bio_desc_3: " focused on ",
            bio_a_3: "Cybersecurity",
            bio_desc_4: " or ",
            bio_a_4: "Artificial Intelligence",
            bio_desc_5: " to work on high-impact projects.",
            
            btn_cv: "Download Resume",
            section_stack: "Tech Stack",
            btn_see_all: "See all",
            lang_btn: "FR"
        }
    };

    let currentLang = localStorage.getItem('lang') || 'fr';

    function updateLanguage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[currentLang][key]) {
                // Si c'est un input placeholder, on le traite différemment (pas le cas ici)
                // Sinon on change le texte
                el.innerText = translations[currentLang][key];
            }
        });

        // Met à jour le texte du bouton de langue
        const langBtn = document.getElementById('lang-toggle');
        if(langBtn) langBtn.innerText = translations[currentLang].lang_btn;
        
        // Met à jour la balise HTML lang
        document.documentElement.lang = currentLang;
    }

    // Init Langue au chargement
    updateLanguage();

    // Bouton de changement de langue
    const langToggleBtn = document.getElementById('lang-toggle');
    if(langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'fr' ? 'en' : 'fr';
            localStorage.setItem('lang', currentLang);
            updateLanguage();
        });
    }


    // --- 1. LOADER SÉQUENCE ---
    const loader = document.getElementById('loader');
    const loaderText = document.getElementById('loader-text');
    setTimeout(() => { if(loaderText) loaderText.classList.add('in'); }, 200);
    setTimeout(() => { if(loaderText) { loaderText.classList.remove('in'); loaderText.classList.add('out'); } }, 1200);
    setTimeout(() => { if(loader) loader.classList.add('slide-out'); }, 1600);

    // --- 2. ICONS & SCROLL ---
    if (typeof lucide !== 'undefined') lucide.createIcons();
    try {
        if (typeof Lenis !== 'undefined') {
            const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true, smoothTouch: false });
            function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
            requestAnimationFrame(raf);
        }
    } catch (e) {}

    // --- 3. SCROLL REVEAL ---
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // --- 4. DARK MODE ---
    const themeBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    }
    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    // --- 5. TIME ---
    function updateTime() {
        const display = document.getElementById('time-display');
        if(display) {
            const now = new Date();
            display.textContent = `PARIS ${now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`;
        }
    }
    updateTime(); setInterval(updateTime, 1000);

    // --- 6. MENU MOBILE ---
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');
    if(menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            const isHidden = menu.classList.toggle('hidden');
            document.body.style.overflow = isHidden ? '' : 'hidden';
        });
        links.forEach(l => l.addEventListener('click', () => {
            menu.classList.add('hidden');
            document.body.style.overflow = '';
        }));
    }

    if (history.scrollRestoration) history.scrollRestoration = 'manual';
    window.scrollTo(0,0);

});

