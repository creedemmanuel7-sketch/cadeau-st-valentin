# 💖 Love Landing Page - Guide d'Installation

## 📁 Structure des Fichiers

Voici comment organiser tes fichiers :

```
love-page/
│
├── index.html          ← Fichier principal
├── style.css           ← Styles et animations
├── script.js           ← JavaScript et interactions
│
├── images/             ← Dossier pour tes photos
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   ├── photo6.jpg
│   ├── photo7.jpg
│   ├── photo8.jpg
│   ├── photo9.jpg
│   ├── photo10.jpg
│   └── photo11.jpg
│
└── music/              ← Dossier pour la musique (optionnel)
    └── background.mp3
```

## 🎵 Pour la Musique de Fond

1. **Trouve une musique douce** (suggestions) :
   - "A Thousand Years" - Christina Perri
   - "Perfect" - Ed Sheeran (instrumental)
   - "All of Me" - John Legend
   - Ou n'importe quelle musique romantique en MP3

2. **Télécharge-la en MP3**

3. **Place-la dans** `music/background.mp3`

4. **Si tu n'as pas de musique** :
   - La page fonctionnera quand même parfaitement !
   - Il n'y aura juste pas de son de fond

## 📸 Pour les Photos

1. **Renomme tes 11 photos** :
   - `photo1.jpg` → `photo11.jpg`

2. **Place-les dans le dossier** `images/`

3. **Format recommandé** :
   - JPG ou PNG
   - Taille raisonnable (pas plus de 2 MB par photo)

## 🚀 Comment Lancer la Page ?

### Option 1 : Sur ton ordinateur
1. Double-clique sur `index.html`
2. Ça s'ouvrira dans ton navigateur web

### Option 2 : Hébergement gratuit en ligne
Pour partager un lien à ta copine :

#### A. Avec GitHub Pages (GRATUIT)
1. Crée un compte sur [github.com](https://github.com)
2. Crée un nouveau repository public
3. Upload tous les fichiers
4. Va dans Settings → Pages
5. Active GitHub Pages
6. Tu auras un lien type : `https://tonnom.github.io/love-page`

#### B. Avec Netlify (GRATUIT + FACILE)
1. Va sur [netlify.com](https://netlify.com)
2. Drag & drop ton dossier complet
3. Tu obtiens un lien instantanément !

#### C. Avec Vercel (GRATUIT)
1. Va sur [vercel.com](https://vercel.com)
2. Upload ton projet
3. Lien disponible en quelques secondes

## ✨ Fonctionnalités

### 1. Écran d'Accueil Animé
- Un grand cœur qui bat
- Elle doit cliquer dessus pour commencer
- Musique démarre automatiquement (si présente)

### 2. Compteur en Temps Réel
- Compte depuis votre première rencontre (Octobre 2018)
- Compte depuis votre date officielle (26 novembre 2023)
- Se met à jour chaque seconde !

### 3. Galerie Photos avec Animations
- 11 photos avec tes légendes
- Effet polaroid (rotation légère)
- Animation au survol
- Apparition progressive au scroll

### 4. Bouton Surprise
- Pluie de cœurs pendant 5 secondes
- Animation fun et romantique

### 5. Easter Eggs Cachés
- Double-clique sur le titre "Notre Histoire ❤️"
- Message secret dans la console du navigateur

## 🎨 Personnalisation

### Changer les Couleurs
Dans `style.css`, modifie les variables en haut :
```css
:root {
    --primary-color: #ff4b4b;    /* Couleur principale */
    --secondary-color: #ff8585;  /* Couleur secondaire */
    --bg-color: #fff5f5;         /* Fond */
}
```

### Changer les Dates
Dans `script.js`, ligne 4-5 :
```javascript
const dateRencontre = new Date(2018, 9, 15, 7, 30);
const dateOfficielle = new Date(2023, 10, 26, 9, 0);
```

### Ajouter/Modifier des Photos
Dans `index.html`, modifie la section `photo-gallery` :
```html
<div class="photo-card" data-aos="fade-up">
    <img src="images/photo1.jpg" alt="Notre souvenir" class="love-img">
    <p class="caption">Ta légende ici ❤️</p>
</div>
```

## 📱 Responsive Design

La page s'adapte automatiquement :
- ✅ Ordinateur
- ✅ Tablette
- ✅ Téléphone

## 🐛 Problèmes Courants

### La musique ne se lance pas ?
→ Les navigateurs bloquent l'autoplay. C'est normal, elle se lancera après le clic sur le cœur.

### Les photos ne s'affichent pas ?
→ Vérifie que :
1. Le dossier s'appelle exactement `images`
2. Les noms sont `photo1.jpg`, `photo2.jpg`, etc.
3. Les fichiers sont bien en JPG ou PNG

### Les animations ne marchent pas ?
→ Utilise un navigateur récent :
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅

## 💝 Conseils pour la Surprise

1. **Ne lui dis pas** que c'est une page web avant !
2. **Envoie-lui le lien** avec un message mystérieux
3. **Exemple** : "J'ai quelque chose de spécial pour toi... Clique ici : [LIEN]"
4. **Ou** : Ouvre la page sur ton téléphone et donne-lui

## 🎁 Bonus

### Ajouter un Message Final
À la fin de `index.html`, avant `</div>` (ligne de fermeture du container), ajoute :
```html
<div class="final-message">
    <h2>💖 Un dernier mot... 💖</h2>
    <p>Ton message personnel super romantique ici !</p>
</div>
```

## 📞 Besoin d'Aide ?

Si quelque chose ne marche pas :
1. Ouvre la console du navigateur (F12)
2. Cherche les erreurs en rouge
3. Vérifie que tous les fichiers sont au bon endroit

## 🎉 C'est Prêt !

Tu as maintenant une page web romantique professionnelle avec :
- ✨ Animations fluides
- 💖 Compteur en temps réel
- 📸 Galerie de photos
- 🎵 Musique de fond (optionnelle)
- 🎊 Effets confetti
- 📱 Design responsive

**Amuse-toi bien et j'espère qu'elle va adorer ! ❤️**
