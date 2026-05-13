# Doko Kompani – Webseite Anleitung / Udhëzuesi i Faqes

## 📁 Dateistruktur / Struktura e dosjeve

```
doko-kompani/
├── index.html                    ← Startseite / Ballina
├── about.html                    ← Über uns / Rreth nesh
├── services.html                 ← Leistungen / Shërbimet
├── gallery.html                  ← Galerie / Galeria
├── contact.html                  ← Kontakt / Kontakt
├── stahlzaeune-struga.html       ← Unterseite Stahlzäune
├── balkongelaender-struga.html   ← Unterseite Balkongeländer
├── treppengelaender-struga.html  ← Unterseite Treppengeländer
├── einfahrtstore-struga.html     ← Unterseite Einfahrtstore
├── style.css                     ← Alle Styles (geteilt)
├── script.js                     ← Alle Funktionen (geteilt)
└── images/
    ├── logo.png                  ← Logo (optional)
    ├── favicon.svg               ← Favicon
    ├── hero-bg.jpg               ← Hero Hintergrundbild
    ├── gallery/
    │   ├── fence-1.jpg           ← Galerie Bilder
    │   ├── fence-2.jpg
    │   ├── fence-3.jpg
    │   ├── balcony-1.jpg
    │   ├── balcony-2.jpg
    │   ├── balcony-3.jpg
    │   ├── gate-1.jpg
    │   ├── gate-2.jpg
    │   ├── gate-3.jpg
    │   ├── stair-1.jpg
    │   ├── stair-2.jpg
    │   ├── stair-3.jpg
    │   ├── custom-1.jpg
    │   ├── custom-2.jpg
    │   └── custom-3.jpg
    ├── services/
    │   ├── fences/
    │   │   ├── fence-1.jpg       ← Hauptbild Stahlzäune
    │   │   ├── fence-2.jpg
    │   │   ├── fence-3.jpg
    │   │   └── fence-4.jpg
    │   ├── balcony/
    │   │   ├── balcony-1.jpg
    │   │   ├── balcony-2.jpg
    │   │   ├── balcony-3.jpg
    │   │   └── balcony-4.jpg
    │   ├── stairs/
    │   │   ├── stair-1.jpg
    │   │   ├── stair-2.jpg
    │   │   ├── stair-3.jpg
    │   │   └── stair-4.jpg
    │   └── gates/
    │       ├── gate-1.jpg
    │       ├── gate-2.jpg
    │       ├── gate-3.jpg
    │       └── gate-4.jpg
    └── about/
        ├── workshop.jpg          ← Werkstattbild / Foto punishtes
        └── gzim-doko.jpg         ← Foto Geschäftsführer (optional)
```

---

## 🖼️ Bilder einsetzen / Si të vendosësh fotot

### Schritt 1 – Bilder vorbereiten
- Empfohlene Größe: **1600×1000px** für Galerie, **1200×900px** für Services
- Format: **JPG** (Qualität 80%) für beste Balance aus Größe und Qualität
- Benennung: genau wie im Schema oben (z.B. `fence-1.jpg`)

### Schritt 2 – Galerie-Bilder einsetzen (gallery.html)
In jeder `.gallery-item` div findest du:
```html
<!-- <img src="images/gallery/fence-1.jpg" alt="..." loading="lazy"> -->
<div class="gallery-placeholder-box">...</div>
```
➜ Lösche die `<div class="gallery-placeholder-box">` Zeilen  
➜ Entferne das `<!--` und `-->` um den `<img>` Tag

### Schritt 3 – Service-Bilder einsetzen
Gleich wie oben – suche nach `<!-- <img src="images/services/...` und aktiviere das Bild.

### Schritt 4 – Hero-Bild (Startseite)
In `index.html` im `hero-image-side` div:
```html
<!-- Replace with your hero image: <img src="images/hero-bg.jpg" ...> -->
<div class="hero-img-placeholder">...</div>
```
➜ Tausche das Placeholder-div durch: `<img src="images/hero-bg.jpg" alt="Doko Kompani" loading="eager">`

### Schritt 5 – Logo einsetzen
In jedem `<header>` findest du:
```html
<!-- Replace with: <img src="images/logo.png" alt="Doko Kompani" class="logo-img"> -->
<span class="logo-dk">DK</span>
<span class="logo-text">Doko Kompani</span>
```
➜ Falls du ein Logo hast: Ersetze die zwei `<span>` Zeilen durch das `<img>` Tag.

---

## 📞 Telefonnummer ändern / Ndrysho numrin e telefonit

Suche und ersetze überall: `+38970123456`  
Ersetze mit deiner echten Nummer, z.B. `+38971234567`

Wichtig – beide Formate ersetzen:
- `href="tel:+38970123456"` → `href="tel:+38971234567"`
- `href="https://wa.me/38970123456"` → `href="https://wa.me/38971234567"`

---

## 🌐 Sprachen / Gjuhët

Die Website unterstützt automatisch 4 Sprachen:
- 🇦🇱 **SQ** – Albanisch (Standard)
- 🇲🇰 **МК** – Mazedonisch
- 🇬🇧 **EN** – Englisch
- 🇩🇪 **DE** – Deutsch

Texte anpassen: In `script.js` findest du das `translations` Objekt – dort alle Texte für alle Sprachen.

---

## 🚀 Hosting auf IONOS

1. Alle Dateien + `images/` Ordner hochladen
2. `index.html` wird automatisch als Startseite erkannt
3. Kein Server-Setup nötig – reines HTML/CSS/JS
4. SSL aktivieren in IONOS Verwaltung (empfohlen)

---

## ➕ Neue Galerie-Bilder hinzufügen

In `gallery.html` – neues Item am Ende von `#galleryGrid` einfügen:
```html
<div class="gallery-item" data-category="fences" data-src="images/gallery/fence-neues.jpg" data-title="Beschreibung">
  <img src="images/gallery/fence-neues.jpg" alt="..." loading="lazy">
  <div class="gallery-overlay">
    <div class="gallery-overlay-tag">Zäune</div>
    <div class="gallery-overlay-title">Neues Bild</div>
  </div>
</div>
```
Kategorien: `fences` · `balcony` · `gates` · `stairs` · `custom`  
Optionale Klassen: `.tall` (hohes Bild) · `.wide` (breites Bild)

---

## 📱 Kontaktformular (contact.html)

Das Formular simuliert aktuell den Versand. Für echten E-Mail-Versand:

**Option A – Formspree (kostenlos, einfach):**
1. Konto erstellen auf formspree.io
2. Im `<form>` Tag ändern: `action="https://formspree.io/f/DEIN-CODE"` und `method="POST"` hinzufügen

**Option B – IONOS E-Mail Formular:**
IONOS bietet PHP-Mail-Scripts – einfach in der IONOS Hilfe nach "Kontaktformular PHP" suchen.

---

*Doko Kompani – Metallbau & Schweißarbeiten – Koroshisht, Struga, North Macedonia*  
*Geschäftsführer: Gzim Doko*
