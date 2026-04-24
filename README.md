# 🖤 Sean VNNG — Portfolio Cybersécurité

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

Portfolio personnel de **Sean Van Ngoc**, étudiant BUT Réseaux & Télécom option Cybersécurité, futur élève-ingénieur EFREI. Ce site présente un bilan de compétences structuré, des projets techniques et un parcours professionnel, le tout dans une interface minimaliste Noir & Blanc pensée pour la lisibilité et la rigueur.

---

## ✨ Fonctionnalités

### 🎨 UI/UX
- **Intro animée** — écran de démarrage avec initiales "SVN" et effet glitch CSS, entrée contrôlée par bouton
- **Curseur personnalisé** — remplace le curseur natif du navigateur, s'agrandit au survol des éléments interactifs
- **Barre de progression** — indicateur de lecture en haut de page, synchronisé avec le scroll
- **Animations Reveal** — apparition séquencée des éléments (fade + slide) via `IntersectionObserver`
- **Navigation active** — le lien de section courant est mis en évidence dynamiquement selon la position du scroll
- **Horloge en temps réel** — affiche l'heure de Paris dans la navbar, avec format adapté à la langue active

### 🌍 Internationalisation (i18n)
- Traduction **FR / EN** instantanée, sans rechargement de page
- Basée sur un dictionnaire `const T = {}` dans `script.js` avec une clé par `id` HTML
- La langue bascule via `toggleLang()` qui appelle `applyLang()` pour réécrire tous les `innerHTML`
- Le `document.title` et l'attribut `lang` de `<html>` sont également mis à jour

### 🌗 Thème Dark / Light
- Bascule via `toggleTheme()` : applique l'attribut `data-theme="dark"` sur `<html>`
- Le thème sombre ne réécrit que les variables CSS (`:root` → `[data-theme="dark"]`), tout le reste suit automatiquement
- Transitions fluides de 0.5s sur le fond et la couleur de texte

### 🖱️ Effets interactifs
- **Jitter au hover** sur les lignes du tableau de compétences : micro-déplacements aléatoires via `transform: translate()`
- **Effet glitch** sur les initiales SVN à l'intro (CSS `data-text` + pseudo-éléments)

---

## 📄 Sections du portfolio

| Section | Contenu |
|---|---|
| **Hero** | Présentation, téléchargement du dossier de preuves (ZIP), lien vers le portfolio |
| **01 — Démarche** | 4 étapes de bilan de compétences avec bloc synthèse sticky |
| **02 — Compétences** | Tableau d'autoévaluation des 6 compétences transverses avec preuves |
| **03 — Projets** | 4 projets techniques (PyTalk, Assistant Vocal, IPAM, Google Cloud) |
| **04 — Expérience** | Timeline du stage à Necker + centres d'intérêt / soft skills |

---

## 📂 Structure du projet

```
.
├── index.html    # Structure DOM, sections, textes par défaut (FR)
├── style.css     # Design system : variables CSS, thème dark, animations, responsive
├── script.js     # Dictionnaire i18n, logique thème/langue, curseur, scroll, horloge
└── README.md     # Documentation
```

---

## ⚙️ Stack technique

- **HTML5** — structure sémantique, commentaires détaillés sur chaque composant
- **CSS3 natif** — custom properties (`:root`), animations `@keyframes`, `IntersectionObserver` classes, responsive via media queries
- **JavaScript vanilla** — aucune dépendance, aucun build tool
- **Google Fonts** — polices `Sora` (principale) + `DM Mono` (monospace)
- **GitHub Pages** — hébergement statique avec CDN global

---

## 🚀 Lancer le projet

Aucune dépendance à installer. Le projet est 100 % statique.

**Option A — Direct :**
Double-cliquez sur `index.html`.

**Option B — Live Server (VS Code) :**
Clic droit sur `index.html` → `Open with Live Server`.

**Option C — Serveur local rapide :**
```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000
```

---

## 🎮 Personnalisation

### Modifier les textes (traductions)
Ouvrez `script.js` et éditez l'objet `T`. Chaque clé correspond à un `id` HTML :

```javascript
const T = {
  'hero-sub-strong': {
    fr: 'Votre texte en français',
    en: 'Your text in English'
  },
  // ...
};
```

### Changer les couleurs
Toutes les couleurs sont centralisées dans les variables CSS de `style.css` :

```css
:root {
  --fg:      #000000;   /* Texte principal */
  --bg:      #FFFFFF;   /* Fond */
  --surface: #F5F5F5;   /* Surfaces secondaires */
  --border:  #E0E0E0;   /* Bordures */
  --muted:   #888888;   /* Texte secondaire */
}
```

### Ajouter un projet
Dans `index.html`, section `<section id="projets">`, copiez une carte `.project-card` existante et adaptez les `id` des éléments texte, les tags et l'URL GitHub.

---

## 🔗 Liens

- **LinkedIn** — [linkedin.com/in/sean-van-ngoc](https://linkedin.com/in/sean-van-ngoc)
- **GitHub** — [github.com/seanvanngoc](https://github.com/seanvanngoc)
- **Contact** — sean.vanngoc@efrei.net

---

*Réalisé par Sean Van Ngoc — BUT2 R&T Cybersécurité · 2025*
