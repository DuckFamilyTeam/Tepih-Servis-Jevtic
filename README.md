# Tepih Servis Jevtić — Premium Astro Website

Ultra-premium, production-ready Astro sajt za Tepih Servis Jevtić. Luxury gold + ivory dizajn, SEO optimizacija i maksimalne performanse.

---

## 🚀 Brzi start

```bash
# Instalirajte zavisnosti
npm install

# Pokrenite development server
npm run dev

# Build za produkciju
npm run build

# Preview build-a
npm run preview
```

---

## 📁 Struktura projekta

```
tepih-servis-jevtic/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── About.astro
│   │   ├── Process.astro
│   │   ├── Gallery.astro
│   │   ├── Locations.astro
│   │   ├── Testimonials.astro
│   │   ├── FAQ.astro
│   │   ├── CTABanner.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro           ← Glavna stranica
│   │   ├── galerija.astro        ← Galerija radova
│   │   └── [location].astro      ← 11 lokalnih SEO stranica
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## 🌐 Deploy na Vercel

### Metod 1 — Vercel CLI (preporučeno)

```bash
# Instalirajte Vercel CLI
npm i -g vercel

# Deploy
vercel

# Produkcijski deploy
vercel --prod
```

### Metod 2 — GitHub + Vercel Dashboard

1. Push projekat na GitHub:
```bash
git init
git add .
git commit -m "initial commit: Tepih Servis Jevtić website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tepih-servis-jevtic.git
git push -u origin main
```

2. Idite na [vercel.com](https://vercel.com) → **New Project**
3. Importujte GitHub repozitorijum
4. Vercel automatski detektuje Astro — kliknite **Deploy**
5. Podesite custom domenu: `Settings → Domains`

### Environment varijable (ako budu potrebne)

Kreirajte `.env` fajl u root-u:
```env
# Primer — trenutno nije potrebno
PUBLIC_SITE_URL=https://tepihservisjevtic.rs
```

---

## 🔍 SEO Stranice

Sajt generiše sledeće stranice:

| URL | Svrha |
|-----|-------|
| `/` | Glavna stranica |
| `/galerija` | Galerija radova |
| `/pranje-tepiha-borca` | Lokalna SEO — Borča |
| `/pranje-tepiha-ovca` | Lokalna SEO — Ovča |
| `/pranje-tepiha-krnjaca` | Lokalna SEO — Krnjača |
| `/pranje-tepiha-padinska-skela` | Lokalna SEO — Padinska Skela |
| `/pranje-tepiha-kovilovo` | Lokalna SEO — Kovilovo |
| `/pranje-tepiha-zemun` | Lokalna SEO — Zemun |
| `/pranje-tepiha-altina` | Lokalna SEO — Altina |
| `/pranje-tepiha-zemun-polje` | Lokalna SEO — Zemun Polje |
| `/pranje-tepiha-batajnica` | Lokalna SEO — Batajnica |
| `/pranje-tepiha-bezanijska-kosa` | Lokalna SEO — Bežanijska Kosa |
| `/pranje-tepiha-novi-beograd` | Lokalna SEO — Novi Beograd |
| `/sitemap-index.xml` | Automatski generisan sitemap |
| `/robots.txt` | Crawl direktive |

---

## 🎨 Dizajn sistem

### Boje
- `--ivory: #FAF7F2` — Pozadina
- `--gold: #C9A84C` — Primarni akcenat
- `--gold-light: #E8C97A` — Svetliji zlatni ton
- `--gold-dark: #A07830` — Tamniji zlatni ton
- `--charcoal: #1A1814` — Tamna pozadina / tekst
- `--champagne: #F5E6C8` — Sekundarni akcenat

### Tipografija
- **Serif**: Cormorant Garamond — naslovi, luksuzan feel
- **Sans**: Jost — body tekst, navigacija, UI elementi

---

## 📈 Preporuke za dalju SEO optimizaciju

### Odmah po lansiranju

1. **Google Search Console** — Dodajte sajt i verifikujte vlasništvo
2. **Google Business Profile** — Kreirajte ili ažurirajte profil sa URL-om sajta
3. **Sitemap submission** — Submitujte `/sitemap-index.xml` u GSC

### Kratkoročno (1-3 meseca)

4. **Lokalne citacije** — Dodajte firmu na: Yellowpages.rs, Infostud, Mojtepih.rs, Yell.com
5. **Recenzije** — Zamolite zadovoljne klijente da ostave Google recenzije
6. **Instagram SEO** — Koristite lokalne hashtag-ove: #pranjetepiha #borča #beograd
7. **Slike sa alt tagovima** — Zamenite Unsplash slike stvarnim fotografijama Vaših radova
8. **Page Speed** — Testirajte na PageSpeed Insights i primenite preporuke

### Dugoročno (3-6 meseci)

9. **Blog sekcija** — Dodajte blog sa korisnim tekstovima:
   - "Koliko često treba prati tepih?"
   - "Kako ukloniti mrlju od vina sa tepiha?"
   - "Pranje tepiha pre ili posle renoviranja?"
10. **Backlinks** — Kontaktirajte lokalne blogove i portale za saradnju
11. **Structured data** — Dodajte `Review` schema markup sa ocenama
12. **Video sadržaj** — Snimite kratke video klipove procesa pranja (za Instagram Reels i YouTube Shorts)

### Ključne reči za praćenje

- `pranje tepiha Beograd` — glavni target
- `tepih servis Borča` — lokalna ključna reč
- `dubinsko pranje tepiha Beograd`
- `pranje tepiha cena Beograd`
- `pranje tepiha sa dostavom Beograd`
- `pranje tepiha Zemun`, `pranje tepiha Novi Beograd`, itd.

### Alati za praćenje

- [Google Search Console](https://search.google.com/search-console) — besplatno
- [Google Analytics 4](https://analytics.google.com) — besplatno
- [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) — besplatno
- [PageSpeed Insights](https://pagespeed.web.dev) — besplatno

---

## 🖼️ Slike — zamena placeholder fotografija

Sve slike su trenutno sa Unsplash. Pre lansiranja:

1. Snimite profesionalne fotografije:
   - Ekipa na radu
   - Pre/posle pranja
   - Prostorije servisa
   - Vozilo za dostavu
   
2. Optimizujte slike pre uploada:
   ```bash
   # Preporučeni alat: Squoosh (squoosh.app)
   # Format: WebP
   # Kvalitet: 80-85%
   # Maksimalna širina: 1920px za hero, 800px za kartice
   ```

3. Zamenite URL-ove u komponentama sa lokalnim putanjama:
   ```
   /images/hero.webp
   /images/gallery/tepih-1.webp
   /images/about.webp
   ```

---

## 📞 Kontakt informacije sajta

- **Telefon 1**: +381 60 042 5222
- **Telefon 2**: +381 63 896 6351
- **Email**: autopranje77@gmail.com
- **Instagram**: @autopranje_tepihservisjevtic
- **Adresa**: Borča, Beograd, Srbija

---

*Sajt razvijen kao premium Astro projekat optimizovan za brzinu, SEO i konverzije.*
