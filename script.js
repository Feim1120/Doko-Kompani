/* ============================================================
   DOKO KOMPANI – script.js  (Multi-Page Shared)
   ============================================================ */

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const translations = {

  // ----------------------------------------------------------------
  // SHQIP – Albanisch (Varianta e Maqedonisë Veriore)
  // Stil: natyral, profesional, i qartë – si një firmë e vërtetë
  // ----------------------------------------------------------------
  sq: {
    nav_home:     "Kryefaqja",
    nav_services: "Shërbimet",
    nav_gallery:  "Galeria",
    nav_about:    "Rreth nesh",
    nav_contact:  "Kontakt",

    hero_badge:    "Koroshisht · Strugë · Maqedoni e Veriut",
    hero_slogan:   "Punojmë me çelik. Dorëzojmë cilësi.",
    hero_call:     "Na telefono",
    hero_whatsapp: "Shkruaj në WhatsApp",
    hero_services: "Shiko shërbimet",

    stat_years:   "vjet punë",
    stat_projects:"projekte të realizuara",
    stat_quality: "cilësi e garantuar",
    stat_clients: "klientë të kënaqur",

    services_tag:  "Çfarë bëjmë",
    services_title:"Shërbimet tona",
    services_sub:  "Punime metalike dhe saldim – nga projekti te montimi, gjithçka në një vend.",
    s1_title:"Gardhe çeliku",
    s1_desc: "Gardhe metalike të forta dhe me pamje të mirë – për shtëpi private, biznese dhe prona të ndryshme.",
    s2_title:"Gardhe ballkoni",
    s2_desc: "Gardhe ballkoni moderne ose klasike – të sigurta, të qëndrueshme dhe me dizajn që i shkon shtëpisë.",
    s3_title:"Gardhe shkallësh",
    s3_desc: "Gardhe për shkallë të brendshme dhe të jashtme – punuar me kujdes dhe montuar saktë.",
    s4_title:"Porta hyrëse",
    s4_desc: "Porta metalike për hyrje, garazhe dhe prona private – manuale ose automatike, sipas dëshirës.",
    s5_title:"Mbajtëse dore",
    s5_desc: "Mbajtëse dore metalike për shkallë dhe rampa – praktike, të sigurta dhe me pamje të pastër.",
    s6_title:"Punime me porosi",
    s6_desc: "Nëse ke një ide, ne e bëjmë realitet. Projektojmë dhe prodhojmë çdo lloj konstruksioni metalik.",
    s6_badge:          "Me porosi",
    service_learn_more:"Lexo më shumë",
    services_more:     "Shiko të gjitha shërbimet",

    gallery_tag:      "Punë të realizuara",
    gallery_title:    "Galeria",
    gallery_sub:      "Disa nga projektet që kemi kryer – shiko vetë cilësinë e punës.",
    gallery_view_all: "Shiko të gjitha",

    about_tag:        "Kush jemi",
    about_title:      "Doko Kompani",
    about_years_label:"vjet në punë",
    about_p1:"Doko Kompani është një firmë familjare nga Koroshishti, afër Strugës. Punojmë në fushën e punimeve metalike dhe saldimit prej mbi 15 vitesh dhe i njohim mirë nevojat e klientëve tanë.",
    about_p2:"Prodhojmë gardhe çeliku, gardhe ballkoni, gardhe shkallësh, porta hyrëse, mbajtëse dore dhe çdo lloj konstruksioni metalik me porosi. Çdo punë e nisim dhe e përfundojmë me të njëjtin kujdes.",
    about_ceo:     "Gzim Doko",
    about_ceo_role:"Pronar & Menaxher",

    feat1_title:"Materiale cilësore",
    feat1_desc: "Përdorim vetëm materiale të mira – sepse klienti e meriton një punë që zgjat.",
    feat2_title:"Afate të respektuara",
    feat2_desc: "Mbajmë fjalën. Punën e dorëzojmë në kohën e rënë dakord.",
    feat3_title:"Firmë familjare",
    feat3_desc: "Jemi firmë lokale me reputacion të ndërtuar hap pas hapi, projekt pas projekti.",

    contact_tag:          "Kontakt",
    contact_title:        "Na kontaktoni",
    contact_sub:          "Shkruani ose telefononi – ju ofrojmë çmim pa asnjë detyrim.",
    contact_phone_label:  "Telefon",
    contact_email_label:  "E-mail",
    contact_address_label:"Adresa",
    contact_call_btn:     "Na telefono",
    contact_wa_btn:       "WhatsApp",

    form_name:    "Emri",
    form_email:   "E-mail",
    form_phone:   "Numri i telefonit",
    form_service: "Lloji i punës",
    form_message: "Çfarë keni nevojë?",
    form_send:    "Dërgo mesazhin",
    form_success: "Mesazhi u dërgua. Do t'ju kontaktojmë së shpejti – faleminderit!",

    cta_title:"Keni një projekt?",
    cta_sub:  "Na tregoni çfarë ju duhet dhe ju bëjmë një ofertë falas, pa asnjë detyrim.",

    footer_tagline:       "Punime metalike · Saldim · Koroshisht, Strugë",
    footer_nav_title:     "Faqet",
    footer_services_title:"Shërbimet",
    footer_contact_title: "Kontakt",
    footer_copy:          "© 2025 Doko Kompani. Të gjitha të drejtat e rezervuara.",
    wa_tooltip:           "Dërgoni mesazh",
  },

  // ----------------------------------------------------------------
  // МАКЕДОНСКИ – naturen, profesionalen jazik
  // ----------------------------------------------------------------
  mk: {
    nav_home:     "Почетна",
    nav_services: "Услуги",
    nav_gallery:  "Галерија",
    nav_about:    "За нас",
    nav_contact:  "Контакт",

    hero_badge:    "Корошишт · Струга · Северна Македонија",
    hero_slogan:   "Работиме со челик. Доставуваме квалитет.",
    hero_call:     "Јавете ни се",
    hero_whatsapp: "Пишете на WhatsApp",
    hero_services: "Погледнете ги услугите",

    stat_years:   "години искуство",
    stat_projects:"реализирани проекти",
    stat_quality: "гарантиран квалитет",
    stat_clients: "задоволни клиенти",

    services_tag:  "Што работиме",
    services_title:"Нашите услуги",
    services_sub:  "Метални работи и заварување – од идеја до монтажа, сè на едно место.",
    s1_title:"Метални огради",
    s1_desc: "Цврсти и убаво изработени метални огради за куќи, бизниси и приватни имоти.",
    s2_title:"Балконски огради",
    s2_desc: "Балконски огради по мерка – современ или класичен стил, безбедни и трајни.",
    s3_title:"Скалишни огради",
    s3_desc: "Огради за внатрешни и надворешни скали – прецизно изработени и монтирани.",
    s4_title:"Влезни порти",
    s4_desc: "Метални порти за влез, гаражи и имоти – рачни или автоматски, по ваша желба.",
    s5_title:"Рачки и потпирачи",
    s5_desc: "Метални потпирачи за скали и рампи – функционални, безбедни и уредни.",
    s6_title:"Работи по нарачка",
    s6_desc: "Имате идеја? Ние ја реализираме. Проектираме и изработуваме секаков вид метална конструкција.",
    s6_badge:          "По нарачка",
    service_learn_more:"Прочитај повеќе",
    services_more:     "Сите услуги",

    gallery_tag:      "Реализирани проекти",
    gallery_title:    "Галерија",
    gallery_sub:      "Дел од нашите изработки – убедете се сами во квалитетот.",
    gallery_view_all: "Погледни ги сите",

    about_tag:        "За нас",
    about_title:      "Дoko Компани",
    about_years_label:"години работа",
    about_p1:"Дoko Компани е семејна фирма од Корошишт, близу Струга. Повеќе од 15 години работиме со метал и заварување и добро ги познаваме потребите на нашите клиенти.",
    about_p2:"Изработуваме метални огради, балконски огради, скалишни огради, влезни порти, потпирачи и секаков вид метална конструкција по нарачка. Секоја работа ја завршуваме со иста посветеност.",
    about_ceo:     "Гзим Доко",
    about_ceo_role:"Сопственик и управител",

    feat1_title:"Квалитетни материјали",
    feat1_desc: "Користиме само добри материјали – клиентот заслужува работа која трае.",
    feat2_title:"Договорени рокови",
    feat2_desc: "Го држиме зборот. Работата ја предаваме во договорениот рок.",
    feat3_title:"Семејна фирма",
    feat3_desc: "Локална фирма со репутација изградена со години, проект по проект.",

    contact_tag:          "Контакт",
    contact_title:        "Контактирајте нè",
    contact_sub:          "Јавете се или пишете – ви правиме понуда без никаква обврска.",
    contact_phone_label:  "Телефон",
    contact_email_label:  "Е-пошта",
    contact_address_label:"Адреса",
    contact_call_btn:     "Јавете ни се",
    contact_wa_btn:       "WhatsApp",

    form_name:    "Ime",
    form_email:   "Е-пошта",
    form_phone:   "Телефон",
    form_service: "Вид на работа",
    form_message: "Што ви треба?",
    form_send:    "Испрати порака",
    form_success: "Пораката е примена. Ќе ве контактираме наскоро – ви благодариме!",

    cta_title:"Имате проект?",
    cta_sub:  "Кажете ни што ви треба и ви правиме бесплатна понуда без обврска.",

    footer_tagline:       "Метални работи · Заварување · Корошишт, Струга",
    footer_nav_title:     "Страници",
    footer_services_title:"Услуги",
    footer_contact_title: "Контакт",
    footer_copy:          "© 2025 Дoko Компани. Сите права се задржани.",
    wa_tooltip:           "Испратете порака",
  },

  // ----------------------------------------------------------------
  // ENGLISH – clean, professional, direct
  // ----------------------------------------------------------------
  en: {
    nav_home:     "Home",
    nav_services: "Services",
    nav_gallery:  "Gallery",
    nav_about:    "About",
    nav_contact:  "Contact",

    hero_badge:    "Koroshisht · Struga · North Macedonia",
    hero_slogan:   "Metalwork done right. Every time.",
    hero_call:     "Call us",
    hero_whatsapp: "WhatsApp",
    hero_services: "Our services",

    stat_years:   "years in business",
    stat_projects:"projects completed",
    stat_quality: "quality guaranteed",
    stat_clients: "satisfied clients",

    services_tag:  "What we do",
    services_title:"Our Services",
    services_sub:  "Steel fabrication and welding – from design to installation, all in one place.",
    s1_title:"Steel Fences",
    s1_desc: "Solid, well-finished metal fences for homes, businesses and private properties.",
    s2_title:"Balcony Railings",
    s2_desc: "Custom balcony railings in modern or classic style – safe, durable and good-looking.",
    s3_title:"Stair Railings",
    s3_desc: "Railings for indoor and outdoor staircases – precisely made and properly installed.",
    s4_title:"Entry Gates",
    s4_desc: "Metal gates for driveways, garages and properties – manual or automatic, your choice.",
    s5_title:"Handrails",
    s5_desc: "Metal handrails for stairs and ramps – functional, safe and neatly finished.",
    s6_title:"Custom Metalwork",
    s6_desc: "Got an idea? We'll make it happen. We design and build any kind of metal construction.",
    s6_badge:          "Custom order",
    service_learn_more:"Learn more",
    services_more:     "See all services",

    gallery_tag:      "Our work",
    gallery_title:    "Gallery",
    gallery_sub:      "A selection of completed projects – see the quality for yourself.",
    gallery_view_all: "View all",

    about_tag:        "About us",
    about_title:      "Doko Kompani",
    about_years_label:"years in business",
    about_p1:"Doko Kompani is a family-run metalwork business from Koroshisht, near Struga. We have been working with steel and welding for over 15 years and know what our clients need.",
    about_p2:"We produce steel fences, balcony railings, stair railings, entry gates, handrails and custom metal constructions of any kind. Every job gets the same attention, start to finish.",
    about_ceo:     "Gzim Doko",
    about_ceo_role:"Owner & Manager",

    feat1_title:"Good materials",
    feat1_desc: "We use quality steel and components – because the work should last.",
    feat2_title:"On time, every time",
    feat2_desc: "We stick to agreed deadlines and keep you informed throughout.",
    feat3_title:"Family business",
    feat3_desc: "A local company with a reputation built project by project, over many years.",

    contact_tag:          "Contact",
    contact_title:        "Get in touch",
    contact_sub:          "Call or write to us – we'll get back to you with a free quote, no strings attached.",
    contact_phone_label:  "Phone",
    contact_email_label:  "Email",
    contact_address_label:"Address",
    contact_call_btn:     "Call us",
    contact_wa_btn:       "WhatsApp",

    form_name:    "Name",
    form_email:   "Email",
    form_phone:   "Phone number",
    form_service: "Type of work",
    form_message: "What do you need?",
    form_send:    "Send message",
    form_success: "Message received. We'll be in touch soon – thank you!",

    cta_title:"Have a project in mind?",
    cta_sub:  "Tell us what you need and we'll send you a free quote.",

    footer_tagline:       "Metalwork & Welding · Koroshisht, Struga",
    footer_nav_title:     "Pages",
    footer_services_title:"Services",
    footer_contact_title: "Contact",
    footer_copy:          "© 2025 Doko Kompani. All rights reserved.",
    wa_tooltip:           "Send a message",
  },

  // ----------------------------------------------------------------
  // DEUTSCH – klar, handwerklich, vertrauenswürdig
  // ----------------------------------------------------------------
  de: {
    nav_home:     "Startseite",
    nav_services: "Leistungen",
    nav_gallery:  "Galerie",
    nav_about:    "Über uns",
    nav_contact:  "Kontakt",

    hero_badge:    "Koroshisht · Struga · Nordmazedonien",
    hero_slogan:   "Metallbau mit Erfahrung. Qualität, die man sieht.",
    hero_call:     "Jetzt anrufen",
    hero_whatsapp: "WhatsApp schreiben",
    hero_services: "Leistungen ansehen",

    stat_years:   "Jahre Erfahrung",
    stat_projects:"abgeschlossene Projekte",
    stat_quality: "Qualität garantiert",
    stat_clients: "zufriedene Kunden",

    services_tag:  "Was wir machen",
    services_title:"Unsere Leistungen",
    services_sub:  "Metallbau und Schweißarbeiten – von der Planung bis zur Montage, alles aus einer Hand.",
    s1_title:"Stahlzäune",
    s1_desc: "Stabile und sauber verarbeitete Metallzäune für Wohngrundstücke, Betriebe und private Außenanlagen.",
    s2_title:"Balkongeländer",
    s2_desc: "Balkongeländer nach Maß – modern oder klassisch, sicher befestigt und langlebig.",
    s3_title:"Treppengeländer",
    s3_desc: "Geländer für Innen- und Außentreppen – präzise gefertigt und fachgerecht montiert.",
    s4_title:"Einfahrtstore",
    s4_desc: "Metalltore für Einfahrten, Garagen und Grundstücke – manuell oder automatisch, nach Wunsch.",
    s5_title:"Handläufe",
    s5_desc: "Metallhandläufe für Treppen und Rampen – zweckmäßig, sicher und ordentlich verarbeitet.",
    s6_title:"Maßanfertigungen",
    s6_desc: "Sie haben eine Idee, wir setzen sie um. Wir planen und fertigen jede Art von Metallkonstruktion.",
    s6_badge:          "Maßanfertigung",
    service_learn_more:"Mehr erfahren",
    services_more:     "Alle Leistungen",

    gallery_tag:      "Unsere Arbeiten",
    gallery_title:    "Galerie",
    gallery_sub:      "Eine Auswahl abgeschlossener Projekte – überzeugen Sie sich selbst.",
    gallery_view_all: "Alle anzeigen",

    about_tag:        "Über uns",
    about_title:      "Doko Kompani",
    about_years_label:"Jahre im Betrieb",
    about_p1:"Doko Kompani ist ein familiengeführter Metallbaubetrieb aus Koroshisht bei Struga. Seit über 15 Jahren arbeiten wir mit Stahl und Schweißen – und kennen die Anforderungen unserer Kunden gut.",
    about_p2:"Wir fertigen Stahlzäune, Balkon- und Treppengeländer, Einfahrtstore, Handläufe und individuelle Metallkonstruktionen jeder Art. Jede Arbeit erledigen wir mit derselben Sorgfalt – von Anfang bis Ende.",
    about_ceo:     "Gzim Doko",
    about_ceo_role:"Inhaber & Geschäftsführer",

    feat1_title:"Solide Materialien",
    feat1_desc: "Wir verwenden nur guten Stahl und zuverlässige Komponenten – damit die Arbeit auch hält.",
    feat2_title:"Termintreue",
    feat2_desc: "Wir halten uns an Absprachen und informieren Sie, wenn sich etwas ändert.",
    feat3_title:"Familienbetrieb",
    feat3_desc: "Ein lokales Unternehmen mit einem Ruf, der über viele Jahre, Projekt für Projekt, gewachsen ist.",

    contact_tag:          "Kontakt",
    contact_title:        "Sprechen Sie uns an",
    contact_sub:          "Rufen Sie an oder schreiben Sie – wir erstellen Ihnen ein kostenloses Angebot, unverbindlich.",
    contact_phone_label:  "Telefon",
    contact_email_label:  "E-Mail",
    contact_address_label:"Adresse",
    contact_call_btn:     "Anrufen",
    contact_wa_btn:       "WhatsApp",

    form_name:    "Name",
    form_email:   "E-Mail",
    form_phone:   "Telefonnummer",
    form_service: "Art der Arbeit",
    form_message: "Was benötigen Sie?",
    form_send:    "Nachricht senden",
    form_success: "Nachricht erhalten. Wir melden uns in Kürze – vielen Dank!",

    cta_title:"Haben Sie ein Projekt?",
    cta_sub:  "Schildern Sie uns Ihr Vorhaben – wir schicken Ihnen ein kostenloses Angebot.",

    footer_tagline:       "Metallbau & Schweißarbeiten · Koroshisht, Struga",
    footer_nav_title:     "Seiten",
    footer_services_title:"Leistungen",
    footer_contact_title: "Kontakt",
    footer_copy:          "© 2025 Doko Kompani. Alle Rechte vorbehalten.",
    wa_tooltip:           "Nachricht schreiben",
  }
};

/* ============================================================
   LANGUAGE SYSTEM
   ============================================================ */
let currentLang = 'sq';

function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.lang === lang)
  );

  document.documentElement.lang = lang;
  try { localStorage.setItem('dk_lang', lang); } catch(e) {}
}

/* ============================================================
   HEADER SCROLL
   ============================================================ */
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mainNav.classList.remove('open');
    });
  });
  // Close on outside click
  document.addEventListener('click', e => {
    if (!header.contains(e.target)) {
      hamburger.classList.remove('open');
      mainNav.classList.remove('open');
    }
  });
}

/* ============================================================
   ACTIVE NAV LINK
   ============================================================ */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkPage = href.split('/').pop();
    link.classList.toggle('active', linkPage === path || (path === '' && href.includes('index')));
  });
}
setActiveNav();

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const img = lightbox.querySelector('.lightbox-img');
  const info = lightbox.querySelector('.lightbox-info');
  const close = lightbox.querySelector('.lightbox-close');
  const prev = lightbox.querySelector('.lightbox-prev');
  const next = lightbox.querySelector('.lightbox-next');

  let items = [];
  let current = 0;

  function openLightbox(index) {
    items = [...document.querySelectorAll('.gallery-item[data-src]')];
    current = index;
    showImage();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function showImage() {
    if (!items[current]) return;
    img.src = items[current].dataset.src;
    img.alt = items[current].dataset.title || '';
    if (info) info.textContent = items[current].dataset.title || '';
  }

  document.querySelectorAll('.gallery-item[data-src]').forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    img.src = '';
  }

  close?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  prev?.addEventListener('click', () => { current = (current - 1 + items.length) % items.length; showImage(); });
  next?.addEventListener('click', () => { current = (current + 1) % items.length; showImage(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') { current = (current - 1 + items.length) % items.length; showImage(); }
    if (e.key === 'ArrowRight') { current = (current + 1) % items.length; showImage(); }
  });
}

/* ============================================================
   GALLERY FILTER
   ============================================================ */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(item => {
        const show = cat === 'all' || item.dataset.category === cat;
        item.style.display = show ? '' : 'none';
      });
    });
  });
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const t = translations[currentLang];
    const successEl = document.getElementById('formSuccess');

    // Simulate submit (replace with real backend/formspree endpoint)
    const btn = form.querySelector('[type=submit]');
    const origText = btn.textContent;
    btn.textContent = '...';
    btn.disabled = true;

    setTimeout(() => {
      form.style.display = 'none';
      if (successEl) {
        successEl.style.display = 'block';
        successEl.textContent = t?.form_success || 'Message sent!';
      }
    }, 1200);
  });
}

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
function animateCounters() {
  document.querySelectorAll('.count-up').forEach(el => {
    const target = parseInt(el.dataset.target || el.textContent);
    const suffix = el.dataset.suffix || '';
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = target / (duration / step);

    const timer = setInterval(() => {
      start = Math.min(start + increment, target);
      el.textContent = Math.floor(start) + suffix;
      if (start >= target) clearInterval(timer);
    }, step);
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Language
  let savedLang = 'sq';
  try {
    const stored = localStorage.getItem('dk_lang');
    if (stored && translations[stored]) savedLang = stored;
  } catch(e) {}
  applyLanguage(savedLang);

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  // Features
  initReveal();
  initLightbox();
  initGalleryFilter();
  initContactForm();

  // Counter observer
  const statsSection = document.querySelector('.stats-strip, .hero-stats');
  if (statsSection) {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateCounters();
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(statsSection);
  }

  // Lazy loading images
  if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback IntersectionObserver
    const lazyObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.src = e.target.dataset.src;
          lazyObs.unobserve(e.target);
        }
      });
    });
    document.querySelectorAll('img[data-src]').forEach(img => lazyObs.observe(img));
  }
});
