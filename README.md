# Ride'n'Rest

Site vitrine **Ride'n'Rest** : planification d’itinéraires vélo et réservation de nuitées.

- **Stack :** Vite, React 19, TypeScript, Tailwind CSS
- **Pages :** Accueil, Contact (formulaire Formspree), Mentions légales

## Prérequis

- Node.js (v18+ recommandé)

## Installation et lancement

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Scripts

| Commande        | Description              |
|-----------------|--------------------------|
| `npm run dev`   | Serveur de développement |
| `npm run build` | Build de production      |
| `npm run preview` | Aperçu du build       |

## Structure

- `App.tsx` — Point d’entrée et routage par `pathname` (/, /contact, /mentions-legales)
- `components/` — Header, Hero, étapes, témoignages, Contact, Footer, Mentions légales
- `public/images/` — Images et assets statiques

## Déploiement

Le build est généré dans `dist/`. Déployable sur Vercel, Netlify, GitHub Pages, etc.

---

Dépôt : [ridenrest-web](https://github.com/Guicom/ridenrest-web)
