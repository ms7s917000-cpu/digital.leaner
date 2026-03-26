# Déploiement et domaine personnalisé

Ce document explique comment héberger ton site statique et utiliser un nom de domaine personnalisé (par ex. `mon-site.com`). Tu peux suivre l’une des options ci-dessous.

---

## 1) Option GitHub Pages (recommandé, gratuit)

1. Crée un repository GitHub (par ex. `RobloxInjectorWebsite`).
2. Copie le contenu de `Website/` (index.html, styles.css, script.js, DOMAIN.md) dans ce repo.
3. Commit/Push sur la branche `main`.
4. GitHub > Settings > Pages. Sélectionne `main` / `/root` comme source. Enregistre.
5. Attends 1-2 min, puis teste l’URL publique : `https://<utilisateur>.github.io/<repo>/`.

### Domaine personnalisé sur GitHub Pages

1. Dans le repo > Settings > Pages > Custom domain : écris `mon-site.com`.
2. GitHub crée des valeurs DNS à mettre chez ton registrar.
3. Dans le panneau du registrar, crée :
   - `A` vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - `CNAME` pour `www` vers `<utilisateur>.github.io`. (ou .`@` selon DNS)
4. Ajoute un fichier `CNAME` à la racine du repo contenant `mon-site.com`.
5. GitHub active HTTPS automatiquement.

---

## 2) Option Netlify (plus simple encore)

1. Crée un compte sur https://www.netlify.com.
2. New site from Git → choisis le repo GitHub.
3. Build command : vide; Publish directory : `.`.
4. Après déploiement, dans Domain settings → Add custom domain.
5. Ajoute `mon-site.com` et suis les instructions DNS.
6. Netlify prend en charge HTTPS gratuit.

---

## 3) Option Cloudflare Pages

1. Crée un compte sur https://dash.cloudflare.com.
2. Pages → Create a project → connect GitHub.
3. Choisis repo `RobloxInjectorWebsite`.
4. Build config : default (`
command:fallback`, output dir: `.`)
5. Appelle ton domaine perso `xeno.mon-domaine.com` dans Domain settings.
6. Configure DNS Cloudflare (CNAME). Reset.

---

## 4) Déploiement local rapide sans domaine

1. Va dans le dossier : `cd c:\Users\Max\RobloxInjector\Website`.
2. Lancer un serveur local : `python -m http.server 8080`.
3. Ouvre : `http://localhost:8080`.

---

## 5) URL personnalisée automatique (option tunnel)

- Pour partage rapide sans paramétrage DNS, utilise [`ngrok`](https://ngrok.com):
  - `ngrok http 8080`
  - Puis copie l’URL publique générée (ex: `https://7f6c-xx-xx-xx-xx.ngrok.io`).

---

## Checklist à faire pour moi

- [x] Site statique créé dans `Website/`
- [x] Serveur local démarré sur `localhost:8080`
- [x] Fichier `DOMAIN.md` généré et explications complètes
- [ ] Ton propre domaine demandé au registrar
- [ ] DNS configuré (A/CNAME)
- [ ] Travis/Netlify/GitHub Pages connectés

---

## Conseils de sécurité

- Active HTTPS partout.
- Ne déploie jamais de code exécutable directement sur un site public sans sécurité.
- Vérifie les en-têtes `Content-Security-Policy` si tu veux durcir le site.
