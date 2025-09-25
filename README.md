# Tunisia Green Building Council - Landing Page

Une page d'accueil moderne et élégante pour le Tunisia Green Building Council, annonçant que le site est en construction et sera bientôt en ligne.

## Fonctionnalités

- **Design moderne** : Interface utilisateur élégante avec des animations fluides
- **Bilingue** : Contenu en français et en anglais
- **Compteur de temps** : Affichage en temps réel du temps restant jusqu'au lancement (20 octobre 2025)
- **Réseaux sociaux** : Liens vers les plateformes sociales de TGBC
- **Responsive** : Optimisé pour tous les appareils (desktop, tablette, mobile)

## Installation

1. Assurez-vous d'avoir Node.js installé sur votre système
2. Clonez ou téléchargez ce projet
3. Ouvrez un terminal dans le dossier du projet
4. Installez les dépendances :

```bash
npm install
```

## Lancement

Pour démarrer l'application en mode développement :

```bash
npm start
```

L'application s'ouvrira automatiquement dans votre navigateur à l'adresse `http://localhost:3000`

## Build de production

Pour créer une version de production :

```bash
npm run build
```

Les fichiers optimisés seront créés dans le dossier `build/`

## Structure du projet

```
src/
├── components/
│   ├── CountdownTimer.js      # Composant du compteur de temps
│   ├── CountdownTimer.css     # Styles du compteur
│   ├── LandingPage.js         # Page principale
│   ├── LandingPage.css        # Styles de la page principale
│   ├── SocialMedia.js         # Composant des réseaux sociaux
│   └── SocialMedia.css        # Styles des réseaux sociaux
├── App.js                     # Composant racine
├── App.css                    # Styles globaux
├── index.js                   # Point d'entrée
└── index.css                  # Styles de base
```

## Personnalisation

### Modifier la date de lancement

Pour changer la date de lancement, modifiez la ligne suivante dans `src/components/CountdownTimer.js` :

```javascript
const targetDate = new Date('2025-10-20T00:00:00').getTime();
```

### Modifier les réseaux sociaux

Éditez le tableau `socialLinks` dans `src/components/SocialMedia.js` pour ajouter ou modifier les liens sociaux.

### Modifier les couleurs

Les couleurs principales sont définies dans les fichiers CSS. La couleur verte principale est `#4ade80`.

## Technologies utilisées

- React 18
- CSS3 avec animations
- Google Fonts (Inter)
- Responsive Design

## Support

Pour toute question ou problème, contactez l'équipe de développement.
