/* état global de la page : langue et thème courant */
let lang  = 'fr';
let theme = 'light';

/* -------------------------------------------------------
   Dictionnaire de traduction FR / EN
   Chaque clé correspond à un id dans le HTML.
   applyLang() boucle dessus et injecte innerHTML.
------------------------------------------------------- */
const T = {
  introLabel:      { fr:'Entrer dans le portfolio',                                   en:'Enter portfolio' },
  'nav-link-1':    { fr:'Parcours',                                                   en:'Journey' },
  'nav-link-2':    { fr:'Compétences',                                                en:'Skills' },
  'nav-link-3':    { fr:'Projets',                                                    en:'Projects' },
  'nav-link-4':    { fr:'Expérience',                                                 en:'Experience' },
  'hero-eyebrow':  { fr:'Portfolio · Bilan de Compétences · 2025',                   en:'Portfolio · Skills Review · 2025' },
  'hero-sub-strong':{ fr:'Étudiant BUT Réseaux &amp; Télécom — option Cybersécurité', en:'BUT Networks &amp; Telecom Student — Cybersecurity Track' },
  'hero-sub-span': { fr:'Futur Élève-Ingénieur EFREI · Passion pour la sécurité des systèmes, l\'infrastructure réseau et l\'automatisation.', en:'Future EFREI Engineering Student · Passionate about system security, network infrastructure and automation.' },
  'hero-btn':      { fr:'↓ Télécharger le dossier de preuves (ZIP)',                 en:'↓ Download Evidence Folder (ZIP)' },
  'hero-ghost':    { fr:'Explorer le portfolio →',                                   en:'Explore portfolio →' },
  'hero-scroll':   { fr:'Défiler',                                                   en:'Scroll' },
  's01-label':     { fr:'01 — Approche réflexive',                                   en:'01 — Reflective Approach' },
  's01-title':     { fr:'La<br>Démarche',                                            en:'The<br>Approach' },
  'synth-label':   { fr:'Synthèse de trajectoire',                                   en:'Trajectory Summary' },
  'synth-t1':      { fr:'Introduction',                                              en:'Introduction' },
  'synth-p1':      { fr:'Ce portfolio est le fruit d\'une démarche active de capitalisation : chaque SAÉ, chaque TP et chaque stage constitue une trace tangible de progression, analysée ici avec recul critique.', en:'This portfolio is the result of an active capitalisation process: each SAÉ, lab session, and internship constitutes a tangible trace of progress, analysed here with critical hindsight.' },
  'synth-t2':      { fr:'Développement',                                             en:'Development' },
  'synth-p2':      { fr:'Ma trajectoire s\'articule autour de trois axes : montée en compétences techniques, acquisition de savoir-faire transversaux et confrontation terrain via le stage à Necker.', en:'My trajectory revolves around three axes: technical skill growth, transversal know-how acquisition, and real-world confrontation through the Necker internship.' },
  'synth-t3':      { fr:'Conclusion',                                                en:'Conclusion' },
  'synth-p3':      { fr:'La cybersécurité demande autant de rigueur méthodologique que de curiosité intellectuelle permanente. Je me projette à l\'EFREI avec la maturité nécessaire.', en:'Cybersecurity demands as much methodological rigour as permanent intellectual curiosity. I project myself to EFREI with the required maturity.' },
  'step1-h':       { fr:'Collecte des traces d\'apprentissage',                      en:'Collecting Learning Traces' },
  'step1-p':       { fr:'Inventaire systématique des comptes rendus de TP, rapports de SAÉ et livrables produits durant le BUT R&T.',  en:'Systematic inventory of lab reports, SAÉ reports and project deliverables produced during the BUT R&T.' },
  'step2-h':       { fr:'Analyse critique et mise en contexte',                      en:'Critical Analysis and Contextualisation' },
  'step2-p':       { fr:'Relecture active avec identification des compétences mobilisées, des difficultés rencontrées et des stratégies d\'adaptation.', en:'Active re-reading identifying mobilised skills, encountered difficulties and adaptation strategies.' },
  'step3-h': { fr:'Mise en évidence par la preuve',    en:'Evidence-Based Demonstration' },
  'step3-p': { fr:'Plutôt que de noter mes compétences, je les ancre dans des faits : chaque aptitude est justifiée par un livrable, une situation réelle ou un retour terrain. La preuve parle à ma place.', en:'Rather than rating my skills, I ground them in facts: each ability is backed by a deliverable, a real situation or field feedback. The evidence speaks for itself.' },
  'step4-h':       { fr:'Mise en récit et projection professionnelle',               en:'Narrative Building and Professional Projection' },
  'step4-p':       { fr:'Transformation du bilan en argumentaire cohérent, ancré dans des preuves concrètes, pour exprimer mon profil à l\'EFREI.', en:'Transforming the review into a coherent argument anchored in concrete evidence to express my profile to EFREI.' },
  's02-label':     { fr:'02 — Autoévaluation',                                       en:'02 — Self-Assessment' },
  's02-title':     { fr:'Compétences<br>Transverses',                                en:'Transversal<br>Skills' },
  'th1':           { fr:'Compétence',                                                en:'Skill' },
  'th2':           { fr:'Justification / Preuve',                                   en:'Evidence / Justification' },
  'c1n':           { fr:'Organiser son activité',                                    en:'Organising one\'s work' },
  'c1c':           { fr:'Autonomie &amp; Planification',                             en:'Autonomy &amp; Planning' },
  'c1p':           { fr:'Gestion autonome du parc informatique à l\'Hôpital Necker via SMAX — planification des déploiements SCCM en tenant compte des contraintes hospitalières.', en:'Autonomous IT fleet management at Necker Hospital via SMAX — planning SCCM deployments while accounting for hospital constraints.' },
  'c2n':           { fr:'Agir face aux imprévus',                                    en:'Handling unexpected situations' },
  'c2c':           { fr:'Résilience &amp; Adaptabilité',                             en:'Resilience &amp; Adaptability' },
  'c2p':           { fr:'Résolution en autonomie de pannes réseau non documentées lors du déploiement DPO/SCCM. Adaptation en temps réel sans supervision directe.', en:'Autonomous resolution of undocumented network failures during DPO/SCCM deployment. Real-time adaptation without direct supervision.' },
  'c3n':           { fr:'Travailler en équipe',                                      en:'Teamwork' },
  'c3c':           { fr:'Collaboration &amp; Communication',                         en:'Collaboration &amp; Communication' },
  'c3p':           { fr:'Coordination en binôme/groupe lors des SAÉ (IPAM, PyTalk). Gestion des divergences de rythme et répartition des rôles.', en:'Pair/group coordination during SAÉ projects (IPAM, PyTalk). Managing work-rhythm differences and role distribution.' },
  'c4n':           { fr:'Analyser et résoudre des problèmes',                        en:'Problem analysis &amp; solving' },
  'c4c':           { fr:'Pensée critique &amp; Méthode',                             en:'Critical Thinking &amp; Method' },
  'c4p':           { fr:'Débogage systématique des projets Python (PyTalk, Assistant-Vocal), documentation des chemins d\'erreur et des corrections.', en:'Systematic debugging of Python projects (PyTalk, Voice Assistant), documenting error paths and fixes.' },
  'c5n':           { fr:'Communiquer à l\'écrit',                                    en:'Written communication' },
  'c5c':           { fr:'Rédaction technique &amp; Documentation',                   en:'Technical Writing &amp; Documentation' },
  'c5p':           { fr:'Rédaction de rapports de stage structurés, comptes rendus de TP et documentation technique sur GitHub.', en:'Writing structured internship reports, lab reports and technical documentation on GitHub.' },
  'c6n':           { fr:'S\'adapter aux outils numériques',                          en:'Adapting to digital tools' },
  'c6c':           { fr:'Veille technologique &amp; Apprentissage',                  en:'Tech Watch &amp; Continuous Learning' },
  'c6p':           { fr:'Prise en main autonome de SMAX, SCCM, Microsoft DPO, Google Cloud, Ansible. Certifications Google Cloud en auto-formation.', en:'Autonomous onboarding of SMAX, SCCM, Microsoft DPO, Google Cloud, Ansible. Google Cloud certifications earned through self-study.' },
  'proof-lbl-1':   { fr:'Preuve :', en:'Evidence:' },
  'proof-lbl-2':   { fr:'Preuve :', en:'Evidence:' },
  'proof-lbl-3':   { fr:'Preuve :', en:'Evidence:' },
  'proof-lbl-4':   { fr:'Preuve :', en:'Evidence:' },
  'proof-lbl-5':   { fr:'Preuve :', en:'Evidence:' },
  'proof-lbl-6':   { fr:'Preuve :', en:'Evidence:' },
  's03-label':     { fr:'03 — SAÉ &amp; Réalisations',                               en:'03 — Projects &amp; Work' },
  's03-title':     { fr:'Projets<br>&amp; Traces',                                   en:'Projects<br>&amp; Traces' },
  'p1-desc':       { fr:'Application de messagerie client-serveur en Python utilisant les sockets TCP. Gestion des connexions multiples via threading, interface CLI et protocole maison.', en:'Client-server messaging application in Python using TCP sockets. Multi-connection handling via threading, CLI interface and custom protocol.' },
  'p1-lim-lbl':    { fr:'Limites identifiées',                                       en:'Identified Limitations' },
  'p1-lim':        { fr:'Absence de chiffrement TLS, scalabilité limitée. Piste : asyncio + TLS.',  en:'No TLS encryption, limited scalability. Improvement path: asyncio + TLS.' },
  'p1-gh':         { fr:'Voir sur GitHub',                                           en:'View on GitHub' },
  'p2-title':      { fr:'Assistant Vocal',                                           en:'Voice Assistant' },
  'p2-desc':       { fr:'Assistant vocal Python intégrant reconnaissance vocale, synthèse TTS et réponses dynamiques via API. Automatisation de tâches courantes.', en:'Python voice assistant integrating speech recognition, TTS synthesis and dynamic API responses. Task automation via voice commands.' },
  'p2-lim-lbl':    { fr:'Limites identifiées',                                       en:'Identified Limitations' },
  'p2-lim':        { fr:'Sensibilité au bruit, dépendance aux APIs tierces. En cours : Whisper local.',  en:'Sensitivity to noise, third-party API dependency. In progress: local Whisper model.' },
  'p2-gh':         { fr:'Voir sur GitHub',                                           en:'View on GitHub' },
  'p3-title': { fr:'Focus Tab',                                                                                                                            en:'Focus Tab' },
'p3-desc':  { fr:'Extension Chrome remplaçant le Nouvel Onglet : to-do list avec émojis et horaires, bloc-notes export PDF, météo géolocalisée et calendrier.', en:'Chrome extension replacing New Tab with a productivity dashboard: emoji to-do list, PDF-export notepad, geolocalised weather and monthly calendar.' },
'p3-lim-lbl': { fr:'Limites identifiées',                                                                                                               en:'Identified Limitations' },
'p3-lim':   { fr:'Synchronisation limitée au LocalStorage. Piste : Chrome Sync Storage multi-appareils.',                                               en:'Sync limited to LocalStorage. Path: Chrome Sync Storage for cross-device support.' },
'p3-gh':    { fr:'Voir sur GitHub',                                                                                                                      en:'View on GitHub' },
  'p4-title':      { fr:'Google Cloud Skills',                                       en:'Google Cloud Skills' },
  'p4-desc':       { fr:'Certifications Google Cloud Skills Boost : Compute Engine, VPC, IAM, Cloud Storage et sécurité GCP.', en:'Google Cloud Skills Boost certifications: Compute Engine, VPC, IAM, Cloud Storage and GCP security services.' },
  'p4-lim-lbl':    { fr:'Limites identifiées',                                       en:'Identified Limitations' },
  'p4-lim':        { fr:'Expérience limitée aux labs guidés. Objectif : production GCP.',  en:'Experience limited to guided labs. Goal: deploy to GCP production.' },
  'p4-gh':         { fr:'Voir sur GitHub',                                           en:'View on GitHub' },
  's04-label':     { fr:'04 — Terrain &amp; Identité',                               en:'04 — Field &amp; Identity' },
  's04-title':     { fr:'Expérience<br>&amp; Lifestyle',                             en:'Experience<br>&amp; Lifestyle' },
  'exp-h3':        { fr:'Stage · Hôpital Necker-Enfants Malades',                   en:'Internship · Necker-Enfants Malades Hospital' },
  'tl1-date':      { fr:'Phase 1 — Intégration',                                    en:'Phase 1 — Onboarding' },
  'tl1-title':     { fr:'Prise en main de l\'environnement',                         en:'Environment Onboarding' },
  'tl1-desc':      { fr:'Découverte de l\'infrastructure hospitalière : parc de milliers de postes, contraintes HDS, outil SMAX, CMDB.', en:'Discovery of hospital IT infrastructure: thousands of workstations, HDS regulatory constraints, SMAX ticketing tool, CMDB.' },
  'tl2-date':      { fr:'Phase 2 — Déploiement',                                    en:'Phase 2 — Deployment' },
  'tl2-title':     { fr:'Déploiement Microsoft DPO / SCCM',                         en:'Microsoft DPO / SCCM Deployment' },
  'tl2-desc':      { fr:'Déploiement et configuration de SCCM. Automatisation des mises à jour, gestion des collections et reporting.', en:'Deployment and configuration of SCCM. Update automation, collection management and reporting.' },
  'tl3-date':      { fr:'Phase 3 — Autonomie',                                      en:'Phase 3 — Autonomy' },
  'tl3-title':     { fr:'Gestion du parc via SMAX',                                 en:'Fleet Management via SMAX' },
  'tl3-desc':      { fr:'Traitement autonome des tickets. Interventions sur postes critiques avec protocoles de priorité stricts.', en:'Autonomous ticket handling. Intervention on critical workstations with strict priority protocols.' },
  'tl4-date':      { fr:'Bilan',                                                     en:'Wrap-up' },
  'tl4-title':     { fr:'Acquis terrain &amp; Compétences',                          en:'Field Experience &amp; Skills' },
  'tl4-desc':      { fr:'Maîtrise de SCCM, sécurité en environnement critique, gestion du stress dans un contexte hospitalier exigeant.', en:'Mastery of SCCM, security in critical environments, stress management in a demanding hospital context.' },
  'life-h3':       { fr:'Centres d\'intérêt · Soft Skills',                          en:'Interests · Soft Skills' },
  'life1-title':   { fr:'🏊 Natation',                                               en:'🏊 Swimming' },
  'life1-desc':    { fr:'Pratique régulière depuis l\'enfance. La natation m\'a enseigné la discipline de l\'entraînement itératif, la capacité à performer sous pression et la résilience.', en:'Regular practice since childhood. Swimming has taught me iterative training discipline, performing under pressure and resilience when facing plateaus.' },
  'lt1a':          { fr:'Discipline',                                                en:'Discipline' },
  'lt1b':          { fr:'Résilience',                                                en:'Resilience' },
  'lt1c':          { fr:'Régularité',                                                en:'Consistency' },
  'life2-title':   { fr:'📷 Photographie',                                           en:'📷 Photography' },
  'life2-desc':    { fr:'La photographie développe un regard analytique : anticipation des angles, maîtrise de la lumière — une attention au détail directement transposable en architecture logicielle.', en:'Photography develops an analytical eye: anticipating angles, mastering light — attention to detail directly transferable to software architecture.' },
  'lt2a':          { fr:'Sens du détail',                                            en:'Attention to detail' },
  'lt2b':          { fr:'Créativité',                                                en:'Creativity' },
  'lt2c':          { fr:'Précision',                                                 en:'Precision' },
  'footer-p1':     { fr:'Ce portfolio est hébergé sur <strong>GitHub Pages</strong> — performance CDN global, traçabilité Git, pertinence dans un profil cybersécurité.', en:'This portfolio is hosted on <strong>GitHub Pages</strong> — global CDN performance, Git traceability, relevance for a cybersecurity profile.' },
  'footer-p2':     { fr:'Le parti pris <strong>Noir &amp; Blanc</strong> maximise la lisibilité et reflète la rigueur exigée en environnement de sécurité.', en:'The <strong>Black &amp; White</strong> approach maximises readability and reflects the rigour required in security environments.' },
  'footer-mail':   { fr:'Mail',                                                      en:'Email' },
  'footer-r1':     { fr:'BUT R&amp;T Cybersécurité',                                 en:'BUT Networks &amp; Telecom — Cybersecurity' },
  'footer-r2':     { fr:'Futur Élève-Ingénieur EFREI',                              en:'Future EFREI Engineering Student' },
};

/* cache la page d'intro avec une transition CSS (voir #intro-page.hide dans style.css) */
function enterSite() {
  const intro = document.getElementById('intro-page');
  intro.classList.add('hide');
  setTimeout(() => intro.style.display = 'none', 950);
}

/* -------------------------------------------------------
   Curseur personnalisé avec inertie
   Au lieu de téléporter le curseur directement, on
   l'approche progressivement de la souris à chaque frame.
   Le 0.18 contrôle la "viscosité" du mouvement.
------------------------------------------------------- */
(function initCursor() {
  const cursor = document.getElementById('cursor');
  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    if (cx === 0) { cx = mx; cy = my; } // premier positionnement instantané
  });

  function loop() {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    requestAnimationFrame(loop);
  }
  loop();

  /* agrandir le curseur au survol des éléments interactifs */
  document.querySelectorAll('a, button, .lifestyle-card, .demarche-step, .timeline-item').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('big'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
  });

  document.addEventListener('mouseleave', () => cursor.classList.add('hidden'));
  document.addEventListener('mouseenter', () => cursor.classList.remove('hidden'));
})();

/* barre de progression : calcul simple scroll/hauteurTotale */
window.addEventListener('scroll', () => {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  const pct = (scrollY / (document.body.scrollHeight - innerHeight)) * 100;
  bar.style.width = Math.min(pct, 100) + '%';
}, { passive: true });

/* rétrécissement de la nav après 60px de scroll */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', scrollY > 60);
}, { passive: true });

/* -------------------------------------------------------
   Animations au scroll via IntersectionObserver
   Quand un élément entre dans le viewport, on lui ajoute
   .visible — le CSS s'occupe du reste (transitions).
------------------------------------------------------- */
const revealSelectors = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale', '.reveal-clip', '.section-title'];
const allReveal = document.querySelectorAll(revealSelectors.join(','));

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target); // on arrête d'observer une fois l'animation jouée
    }
  });
}, { threshold: 0.1 });

allReveal.forEach(el => io.observe(el));

/* effet parallaxe sur le texte de fond du hero */
const heroBg = document.querySelector('.hero-bg-text');
window.addEventListener('scroll', () => {
  if (heroBg) heroBg.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.14}px))`;
}, { passive: true });

/* -------------------------------------------------------
   Effet de tilt 3D sur les cartes projets
   On calcule la position de la souris dans la carte (0 à 1)
   et on la convertit en rotation X/Y légère.
------------------------------------------------------- */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 6;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * 6;
    card.style.transform = `translateY(-3px) rotateX(${-y}deg) rotateY(${x}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform .6s cubic-bezier(.16,1,.3,1), border-color .4s';
  });
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform .15s ease-out, border-color .4s'; // réactif au mouvement
  });
});

/* -------------------------------------------------------
   TextScramble : effet de "déchiffrement" de texte
   Les caractères se randomisent avant de révéler le vrai
   texte, lettre par lettre. Utilisé sur les labels de section.
------------------------------------------------------- */
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#%^&';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const old = this.el.textContent;
    const len = Math.max(old.length, newText.length);
    const promise = new Promise(res => this.resolve = res);
    this.queue = [];
    for (let i = 0; i < len; i++) {
      const from  = old[i] || '';
      const to    = newText[i] || '';
      const start = Math.floor(Math.random() * 12);
      const end   = start + Math.floor(Math.random() * 12);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameReq);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let out = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      const { from, to, start, end } = this.queue[i];
      if (this.frame >= end)        { complete++; out += to; }
      else if (this.frame >= start) { out += this.chars[Math.floor(Math.random() * this.chars.length)]; }
      else                          { out += from; }
    }
    this.el.textContent = out;
    if (complete === this.queue.length) { this.resolve(); }
    else { this.frameReq = requestAnimationFrame(this.update); this.frame++; }
  }
}

/* on attache le scramble à chaque label de section via un observer dédié */
document.querySelectorAll('.section-label').forEach(el => {
  const original = el.textContent;
  const scrambler = new TextScramble(el);
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => scrambler.setText(original), 150);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  obs.observe(el);
});

/* -------------------------------------------------------
   Horloge Paris en temps réel
   On convertit l'heure locale en heure Europe/Paris via
   toLocaleString, puis on formate selon la langue active.
------------------------------------------------------- */
function updateClock() {
  const now   = new Date();
  const paris = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
  const h  = paris.getHours();
  const mm = String(paris.getMinutes()).padStart(2, '0');
  const ss = String(paris.getSeconds()).padStart(2, '0');

  let txt;
  if (lang === 'en') {
    const h12 = h % 12 || 12;
    txt = `${h12}:${mm}:${ss} ${h < 12 ? 'AM' : 'PM'}`;
  } else {
    txt = `${String(h).padStart(2, '0')}:${mm}:${ss}`;
  }
  const el = document.getElementById('navClock');
  if (el) el.textContent = txt;
}
setInterval(updateClock, 1000);
updateClock();

/* bascule dark/light : on change l'attribut data-theme sur <html> */
function toggleTheme() {
  theme = theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : '');
  const btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = theme === 'dark' ? '◑ Mode' : '◐ Mode';
}

/* -------------------------------------------------------
   Changement de langue
   On parcourt le dictionnaire T et on remplace innerHTML
   de chaque élément ciblé par son id.
------------------------------------------------------- */
function applyLang(l) {
  Object.entries(T).forEach(([id, map]) => {
    const el  = document.getElementById(id);
    if (!el) return;
    const val = map[l];
    if (val !== undefined) el.innerHTML = val;
  });
  document.documentElement.lang = l;
  document.getElementById('langBtn').textContent = l === 'fr' ? 'FR / EN' : 'EN / FR';
  document.title = l === 'fr' ? 'Sean Van Ngoc — Cybersécurité' : 'Sean Van Ngoc — Cybersecurity';
  updateClock(); // mettre à jour le format de l'heure immédiatement
}

function toggleLang() {
  lang = lang === 'fr' ? 'en' : 'fr';
  applyLang(lang);
}

/* -------------------------------------------------------
   Jitter sur les noms de compétences au hover
   Petits déplacements aléatoires appliqués en boucle
   sur un court délai, puis reset.
------------------------------------------------------- */
document.querySelectorAll('.comp-table tbody tr').forEach(row => {
  let jitterTO;
  row.addEventListener('mouseenter', () => {
    const name = row.querySelector('.comp-name');
    if (!name) return;
    let i = 0;
    function tick() {
      const dx = (Math.random() - 0.5) * 2;
      const dy = (Math.random() - 0.5) * 1.5;
      name.style.transform = `translate(${dx}px,${dy}px)`;
      i++;
      if (i < 6) jitterTO = setTimeout(tick, 40);
      else name.style.transform = '';
    }
    tick();
  });
  row.addEventListener('mouseleave', () => {
    clearTimeout(jitterTO);
    const name = row.querySelector('.comp-name');
    if (name) name.style.transform = '';
  });
});

/* -------------------------------------------------------
   Lien actif dans la nav
   L'IntersectionObserver surveille chaque section et
   souligne le lien nav correspondant quand elle est visible.
------------------------------------------------------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-center a');

const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-center a[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObs.observe(s));

/* FAIT PAR SEAN VAN NGOC BUT2 R&T */