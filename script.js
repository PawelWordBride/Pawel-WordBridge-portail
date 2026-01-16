// Helpers
const $ = (sel) => document.querySelector(sel);

function setError(fieldName, message) {
  const el = document.querySelector(`[data-error-for="${fieldName}"]`);
  if (el) el.textContent = message || "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// =========================
// i18n (sans JSON) : dictionnaire + application
// =========================
const I18N = {
  fr: {
    page_title: "Traduction & Cours — PL ↔ FR",
    meta_description:
      "Traduction polonais ↔ français et cours personnalisés. Devis rapide, tarifs accessibles.",

    brand_top: "Retour en haut de page",
    brand_logo_alt: "Logo Traduction et Cours polonais français",
    brand_text: "Traduction & Cours",
    nav_main_aria: "Navigation principale",
    burger_open: "Ouvrir le menu",

    nav_services: "Services",
    nav_tarifs: "Tarifs",
    nav_faq: "FAQ",
    nav_devis: "Devis",

    hero_badge: "Devis gratuit • Réponse rapide • Travail soigné",
    hero_title_html: "Traduction polonais ↔ français<br/>et cours sur-mesure, simples et efficaces.",
    hero_lead:
      "Pour tes démarches, ton travail, ou ton apprentissage : je t’aide avec une approche claire, accessible et professionnelle.",
    cta_quote: "Obtenir un devis",
    cta_services: "Voir les services",
    cta_book_free: "🎯 Réserver une séance d’évaluation gratuite (15–30 min)",


    stat_reply: "réponse",
    stat_confidential: "confidentiel",

    hero_summary_aria: "Résumé des offres",
    hero_summary_title: "Résumé",
    hero_summary_text: "Traduction, cours et relecture : simple, clair, efficace.",
    hero_list_1: "Traduction : documents perso & pro",
    hero_list_2: "Cours : polonais / français (selon ton choix)",
    hero_list_3: "Support : visio + exercices pratiques",
    hero_contact_btn_html: "Me contacter →",

    services_title: "Services",
    services_subtitle: "Une page simple, des offres claires",

    svc1_title: "Traduction PL ↔ FR",
    svc1_text:
      "CV, lettres, démarches administratives, emails pros, pages web… Je respecte la terminologie et le style.",
    svc1_b1: "Devis rapide",
    svc1_b2: "Relecture",
    svc1_b3: "Livraison propre (PDF/Word)",

    svc2_title: "Cours personnalisés",
    svc2_text:
      "Objectifs : conversation, grammaire, vocabulaire utile. Méthode progressive et concrète.",
    svc2_b1: "Visio / présentiel (selon distance du 78)",
    svc2_b2: "Exercices + suivi",
    svc2_b3: "Rythme adaptable",

    svc3_title: "Relecture & correction",
    svc3_text:
      "Tu as déjà un texte ? Je corrige, j’améliore la fluidité et je propose des reformulations.",
    svc3_b1: "Orthographe & style",
    svc3_b2: "Clarté",
    svc3_b3: "Version finale propre",

    how_title: "Comment ça marche",
    how_1_html: "<strong>Tu m’envoies</strong> ton besoin + ton fichier",
    how_2_html: "<strong>Je réponds</strong> avec devis + délai",
    how_3_html: "<strong>Je livre</strong> et on ajuste si nécessaire",

    pricing_title: "Tarifs",
    pricing_subtitle: "Affichage en fourchettes de prix",

    p1_title: "Traduction",
    p1_value_html: "à partir de <strong>10€</strong>",
    p1_note: "Selon volume, complexité, délai.",
    p1_b1: "Devis gratuit",
    p1_b2: "1 révision incluse",
    p1_b3: "Formats Word/PDF",

    p2_title: "Cours",
    p2_value_html: "à partir de <strong>20€</strong> / heure",
    p2_note: "Packs personnalisés possibles (ex. 5 h / 10 h).",
    p2_b1: "Objectifs définis ensemble",
    p2_b2: "Exercices + supports",
    p2_b3: "Suivi entre les séances",
    p2_b4_html:
      "<strong>Option conversation (messages) :</strong> correction continue <span class=\"muted\">(+5 €)</span>",

    p3_title: "Relecture",
    p3_value_html: "à partir de <strong>10€</strong>",
    p3_note: "Selon longueur et niveau d’intervention.",
    p3_b1: "Corrections",
    p3_b2: "Amélioration du style",
    p3_b3: "Suggestions claires",

    benefit_html: "<strong>-25%</strong> accordés sur la première prestation",

    faq_title: "FAQ",
    faq_subtitle: "Questions fréquentes",
    faq_q1: "Quels formats acceptes-tu ?",
    faq_a1: "Word, PDF, texte, Google Docs.",
    faq_q2: "Quels sont les délais ?",
    faq_a2: "Ça dépend du volume. Je propose toujours un délai clair au moment du devis.",
    faq_q3: "Comment se passent les cours ?",
    faq_a3_html:
      "Les cours se déroulent en visio ou en présentiel (selon la distance, secteur 78), via <strong>Discord</strong> ou <strong>WhatsApp</strong>. Nous définissons ensemble un objectif clair, puis je propose des exercices personnalisés avec corrections détaillées.",
    faq_a3b_html:
      "<strong>Option conversation :</strong> échanges par messages avec correction continue, pour <strong>+5 €</strong>.",
    faq_q4: "Comment payer ?",
    faq_a4:
      "Le paiement s’effectue par virement bancaire (ou autre moyen, selon votre préférence). Pour les prestations de volume important, un acompte peut être demandé.",

    contact_title: "Contact / Devis",
    contact_text:
      "Dis-moi ce dont tu as besoin (traduction ou cours). Je réponds vite avec une proposition claire.",
    chip_location: "📍 France, Yvelines / visio",
    chip_reply: "🕒 Réponse sous 24h",
    chip_discord_html: "🎧 Discord : <strong>pawelwordbridge</strong>",

    form_name: "Nom",
    form_name_ph: "Ton nom",
    form_email: "Email",
    form_email_ph: "ton@email.com",
    form_need: "Ton besoin",
    need_choose: "Choisir…",
    need_t_pl_fr: "Traduction PL → FR",
    need_t_fr_pl: "Traduction FR → PL",
    need_course_pl: "Cours de polonais",
    need_course_fr: "Cours de français",
    need_proof: "Relecture / correction",
    form_msg: "Message",
    form_msg_ph: "Décris ton besoin (volume, délai, objectif…)",
    form_send: "Envoyer",

    socials_title: "Réseaux sociaux",
    socials_subtitle: "Suivre mon activité et échanger",
    social_discord_desc: "Pseudo : pawelwordbridge",
    social_tiktok_desc: "Mes vidéos",
    social_insta_desc: "Mes vidéos",

    footer_copy_html: "© <span id=\"year\"></span> — Traduction & Cours PL ↔ FR",
    footer_top: "Haut de page",
    footer_contact: "Contact",

    lang_title: "Choisissez la langue",
    lang_subtitle: "Choose your language • Wybierz język",
    lang_note: "Votre choix sera mémorisé sur cet appareil.",

    free_session_info:
  "Une séance d’évaluation gratuite (15 à 30 minutes) est proposée avant tout engagement, afin de définir votre niveau et de vous orienter vers le parcours le plus adapté.",

  },

  en: {
    page_title: "Translation & Lessons — PL ↔ FR",
    meta_description: "Polish ↔ French translation and tailored lessons. Fast quote, fair pricing.",

    brand_top: "Back to top",
    brand_logo_alt: "Translation and lessons logo",
    brand_text: "Translation & Lessons",
    nav_main_aria: "Main navigation",
    burger_open: "Open menu",

    nav_services: "Services",
    nav_tarifs: "Pricing",
    nav_faq: "FAQ",
    nav_devis: "Quote",

    hero_badge: "Free quote • Fast reply • Careful work",
    hero_title_html: "Polish ↔ French translation<br/>and tailored lessons, simple and effective.",
    hero_lead:
      "For your paperwork, work, or learning: I help with a clear, accessible, professional approach.",
    cta_quote: "Get a quote",
    cta_services: "See services",
    cta_book_free: "🎯 Book a free assessment session (15–30 min)",

    stat_reply: "reply",
    stat_confidential: "confidential",

    hero_summary_aria: "Offer summary",
    hero_summary_title: "Summary",
    hero_summary_text: "Translation, lessons and proofreading: simple, clear, effective.",
    hero_list_1: "Translation: personal & professional documents",
    hero_list_2: "Lessons: Polish / French (your choice)",
    hero_list_3: "Support: video calls + practical exercises",
    hero_contact_btn_html: "Contact me →",

    services_title: "Services",
    services_subtitle: "Simple page, clear offers",

    svc1_title: "PL ↔ FR Translation",
    svc1_text:
      "CVs, letters, administrative documents, professional emails, web pages… I respect terminology and style.",
    svc1_b1: "Fast quote",
    svc1_b2: "Proofreading",
    svc1_b3: "Clean delivery (PDF/Word)",

    svc2_title: "Personalized lessons",
    svc2_text: "Goals: conversation, grammar, useful vocabulary. Progressive, concrete method.",
    svc2_b1: "Video / in person (depending on distance)",
    svc2_b2: "Exercises + follow-up",
    svc2_b3: "Flexible pace",

    svc3_title: "Proofreading & editing",
    svc3_text: "Already have a text? I correct, improve flow, and suggest rewrites.",
    svc3_b1: "Spelling & style",
    svc3_b2: "Clarity",
    svc3_b3: "Final clean version",

    how_title: "How it works",
    how_1_html: "<strong>You send</strong> your need + file",
    how_2_html: "<strong>I reply</strong> with quote + deadline",
    how_3_html: "<strong>I deliver</strong> and we adjust if needed",

    pricing_title: "Pricing",
    pricing_subtitle: "Displayed as price ranges",

    p1_title: "Translation",
    p1_value_html: "from <strong>€10</strong>",
    p1_note: "Depends on volume, complexity, deadline.",
    p1_b1: "Free quote",
    p1_b2: "1 revision included",
    p1_b3: "Word/PDF formats",

    p2_title: "Lessons",
    p2_value_html: "from <strong>€20</strong> / hour",
    p2_note: "Custom packs possible (e.g., 5 h / 10 h).",
    p2_b1: "Goals defined together",
    p2_b2: "Exercises + materials",
    p2_b3: "Follow-up between sessions",
    p2_b4_html:
      "<strong>Conversation option (messages):</strong> ongoing correction <span class=\"muted\">(+€5)</span>",

    p3_title: "Proofreading",
    p3_value_html: "from <strong>€10</strong>",
    p3_note: "Depends on length and level of intervention.",
    p3_b1: "Corrections",
    p3_b2: "Style improvement",
    p3_b3: "Clear suggestions",

    benefit_html: "<strong>-25%</strong> on your first service",

    faq_title: "FAQ",
    faq_subtitle: "Common questions",
    faq_q1: "Which formats do you accept?",
    faq_a1: "Word, PDF, text, Google Docs.",
    faq_q2: "What are the deadlines?",
    faq_a2: "Depends on volume. I always confirm a clear deadline when quoting.",
    faq_q3: "How do lessons work?",
    faq_a3_html:
      "Lessons take place online or in person (depending on distance), via <strong>Discord</strong> or <strong>WhatsApp</strong>. We define a clear goal, then I provide tailored exercises with detailed corrections.",
    faq_a3b_html:
      "<strong>Conversation option:</strong> message exchanges with ongoing correction, for <strong>+€5</strong>.",
    faq_q4: "How can I pay?",
    faq_a4:
      "Payment is by bank transfer (or another method, depending on your preference). For large volumes, a deposit may be required.",

    contact_title: "Contact / Quote",
    contact_text:
      "Tell me what you need (translation or lessons). I’ll reply quickly with a clear proposal.",
    chip_location: "📍 France (Yvelines) / online",
    chip_reply: "🕒 Reply within 24h",
    chip_discord_html: "🎧 Discord: <strong>pawelwordbridge</strong>",

    form_name: "Name",
    form_name_ph: "Your name",
    form_email: "Email",
    form_email_ph: "you@email.com",
    form_need: "Your need",
    need_choose: "Choose…",
    need_t_pl_fr: "Translation PL → FR",
    need_t_fr_pl: "Translation FR → PL",
    need_course_pl: "Polish lessons",
    need_course_fr: "French lessons",
    need_proof: "Proofreading / editing",
    form_msg: "Message",
    form_msg_ph: "Describe your needs (volume, deadline, goal…)",
    form_send: "Send",

    socials_title: "Social networks",
    socials_subtitle: "Follow my activity and chat",
    social_discord_desc: "Username: pawelwordbridge",
    social_tiktok_desc: "My videos",
    social_insta_desc: "My videos",

    footer_copy_html: "© <span id=\"year\"></span> — Translation & Lessons PL ↔ FR",
    footer_top: "Back to top",
    footer_contact: "Contact",

    lang_title: "Choose a language",
    lang_subtitle: "Choose your language • Wybierz język",
    lang_note: "Your choice will be saved on this device.",

    free_session_info:
  "A free assessment session (15 to 30 minutes) is offered before any commitment, in order to evaluate your level and guide you toward the most suitable learning path.",

  },

  pl: {
    page_title: "Tłumaczenia & Lekcje — PL ↔ FR",
    meta_description:
      "Tłumaczenia polski ↔ francuski i lekcje dopasowane. Szybka wycena, przystępne ceny.",

    brand_top: "Wróć na górę strony",
    brand_logo_alt: "Logo tłumaczeń i lekcji",
    brand_text: "Tłumaczenia & Lekcje",
    nav_main_aria: "Nawigacja główna",
    burger_open: "Otwórz menu",

    nav_services: "Usługi",
    nav_tarifs: "Cennik",
    nav_faq: "FAQ",
    nav_devis: "Wycena",

    hero_badge: "Bezpłatna wycena • Szybka odpowiedź • Staranna praca",
    hero_title_html:
      "Tłumaczenia polski ↔ francuski<br/>i lekcje szyte na miarę — prosto i skutecznie.",
    hero_lead:
      "Dokumenty, praca lub nauka: pomogę Ci w jasny, przystępny i profesjonalny sposób.",
    cta_quote: "Poproś o wycenę",
    cta_services: "Zobacz usługi",
    cta_book_free: "🎯 Umów bezpłatną sesję wstępną (15–30 min)",

    stat_reply: "odpowiedź",
    stat_confidential: "poufne",

    hero_summary_aria: "Podsumowanie oferty",
    hero_summary_title: "Podsumowanie",
    hero_summary_text: "Tłumaczenia, lekcje i korekta: prosto, jasno, skutecznie.",
    hero_list_1: "Tłumaczenia: dokumenty prywatne i zawodowe",
    hero_list_2: "Lekcje: polski / francuski (według wyboru)",
    hero_list_3: "Wsparcie: online + ćwiczenia praktyczne",
    hero_contact_btn_html: "Kontakt →",

    services_title: "Usługi",
    services_subtitle: "Prosta strona, jasna oferta",

    svc1_title: "Tłumaczenia PL ↔ FR",
    svc1_text:
      "CV, listy, dokumenty urzędowe, maile biznesowe, strony WWW… Dbam o terminologię i styl.",
    svc1_b1: "Szybka wycena",
    svc1_b2: "Korekta",
    svc1_b3: "Dostawa PDF/Word",

    svc2_title: "Lekcje indywidualne",
    svc2_text:
      "Cele: konwersacje, gramatyka, przydatne słownictwo. Metoda progresywna i konkretna.",
    svc2_b1: "Online / stacjonarnie (zależnie od odległości)",
    svc2_b2: "Ćwiczenia + wsparcie",
    svc2_b3: "Elastyczne tempo",

    svc3_title: "Korekta tekstu",
    svc3_text:
      "Masz już tekst? Poprawiam, wygładzam styl i proponuję reformulacje.",
    svc3_b1: "Ortografia i styl",
    svc3_b2: "Jasność",
    svc3_b3: "Finalna wersja",

    how_title: "Jak to działa",
    how_1_html: "<strong>Wysyłasz</strong> potrzebę + plik",
    how_2_html: "<strong>Odpowiadam</strong> wyceną + terminem",
    how_3_html: "<strong>Dostarczam</strong> i korygujemy w razie potrzeby",

    pricing_title: "Cennik",
    pricing_subtitle: "Ceny w formie widełek",

    p1_title: "Tłumaczenie",
    p1_value_html: "od <strong>10€</strong>",
    p1_note: "Zależy od objętości, trudności i terminu.",
    p1_b1: "Bezpłatna wycena",
    p1_b2: "1 poprawka w cenie",
    p1_b3: "Formaty Word/PDF",

    p2_title: "Lekcje",
    p2_value_html: "od <strong>20€</strong> / godz.",
    p2_note: "Możliwe pakiety (np. 5 h / 10 h).",
    p2_b1: "Cele ustalamy razem",
    p2_b2: "Ćwiczenia + materiały",
    p2_b3: "Wsparcie między lekcjami",
    p2_b4_html:
      "<strong>Opcja konwersacji (wiadomości):</strong> stała korekta <span class=\"muted\">(+5 €)</span>",

    p3_title: "Korekta",
    p3_value_html: "od <strong>10€</strong>",
    p3_note: "Zależy od długości i zakresu.",
    p3_b1: "Poprawki",
    p3_b2: "Ulepszenie stylu",
    p3_b3: "Jasne sugestie",

    benefit_html: "<strong>-25%</strong> na pierwszą usługę",

    faq_title: "FAQ",
    faq_subtitle: "Najczęstsze pytania",
    faq_q1: "Jakie formaty akceptujesz?",
    faq_a1: "Word, PDF, tekst, Google Docs.",
    faq_q2: "Jakie są terminy?",
    faq_a2: "Zależy od objętości. Zawsze potwierdzam termin przy wycenie.",
    faq_q3: "Jak wyglądają lekcje?",
    faq_a3_html:
      "Lekcje odbywają się online lub stacjonarnie (zależnie od odległości), przez <strong>Discord</strong> lub <strong>WhatsApp</strong>. Ustalamy cel, a potem dostajesz ćwiczenia z dokładną korektą.",
    faq_a3b_html:
      "<strong>Opcja konwersacji:</strong> wiadomości z bieżącą korektą, za <strong>+5 €</strong>.",
    faq_q4: "Jak zapłacić?",
    faq_a4:
      "Płatność przelewem (lub inaczej, zależnie od preferencji). Przy większych zleceniach możliwa zaliczka.",

    contact_title: "Kontakt / Wycena",
    contact_text:
      "Powiedz, czego potrzebujesz (tłumaczenie lub lekcje). Szybko odpowiem z jasną propozycją.",
    chip_location: "📍 Francja (Yvelines) / online",
    chip_reply: "🕒 Odpowiedź do 24h",
    chip_discord_html: "🎧 Discord: <strong>pawelwordbridge</strong>",

    form_name: "Imię i nazwisko",
    form_name_ph: "Twoje imię",
    form_email: "Email",
    form_email_ph: "ty@email.com",
    form_need: "Czego potrzebujesz",
    need_choose: "Wybierz…",
    need_t_pl_fr: "Tłumaczenie PL → FR",
    need_t_fr_pl: "Tłumaczenie FR → PL",
    need_course_pl: "Lekcje polskiego",
    need_course_fr: "Lekcje francuskiego",
    need_proof: "Korekta / redakcja",
    form_msg: "Wiadomość",
    form_msg_ph: "Opisz potrzeby (objętość, termin, cel…)",
    form_send: "Wyślij",

    socials_title: "Social media",
    socials_subtitle: "Śledź moją aktywność i napisz",
    social_discord_desc: "Nick: pawelwordbridge",
    social_tiktok_desc: "Moje wideo",
    social_insta_desc: "Moje wideo",

    footer_copy_html: "© <span id=\"year\"></span> — Tłumaczenia & Lekcje PL ↔ FR",
    footer_top: "Na górę",
    footer_contact: "Kontakt",

    lang_title: "Wybierz język",
    lang_subtitle: "Choose your language • Wybierz język",
    lang_note: "Twój wybór zostanie zapisany na tym urządzeniu.",

    free_session_info:
  "Bezpłatna sesja wstępna (15–30 minut) jest oferowana przed podjęciem zobowiązania, aby określić Twój poziom i zaproponować najbardziej odpowiednią ścieżkę nauki.",

  },
};

function applyTranslations(lang) {
  const dict = I18N[lang] || I18N.fr;

  // <html lang="..">
  document.documentElement.setAttribute("lang", lang);

  // title tag
  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) {
    const key = titleEl.getAttribute("data-i18n");
    if (dict[key]) titleEl.textContent = dict[key];
  }

  // meta description
  const metaDesc = document.querySelector('meta[name="description"][data-i18n-meta="meta_description"]');
  if (metaDesc && dict.meta_description) metaDesc.setAttribute("content", dict.meta_description);

// Text (safe): ne remplace pas un élément qui contient d'autres éléments
document.querySelectorAll("[data-i18n]").forEach((el) => {
  const key = el.getAttribute("data-i18n");
  if (!key || dict[key] == null) return;

  // ⚠️ Si l'élément contient des enfants HTML, on évite textContent
  // (sinon ça supprime les inputs, selects, etc.)
  if (el.children && el.children.length > 0) return;

  el.textContent = dict[key];
});


  // HTML (for <br>, <strong>, etc.)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (key && dict[key] != null) el.innerHTML = dict[key];
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key && dict[key] != null) el.setAttribute("placeholder", dict[key]);
  });

  // aria-label
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (key && dict[key] != null) el.setAttribute("aria-label", dict[key]);
  });

  // alt
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (key && dict[key] != null) el.setAttribute("alt", dict[key]);
  });
}

// Year in footer
const yearEl = $("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Mobile menu
const burger = $("#burger");
const mobileNav = $("#mobileNav");

if (burger && mobileNav) {
  burger.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(isOpen));
    mobileNav.setAttribute("aria-hidden", String(!isOpen));
  });

  // Close mobile menu when clicking a link
  mobileNav.addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      mobileNav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
    }
  });
}

// Formspree submit (stay on page)
const form = $("#leadForm");
const statusEl = $("#formStatus");

if (form && statusEl) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // empêche toute redirection

    // Reset errors
    ["name", "email", "need", "message"].forEach((f) => setError(f, ""));
    statusEl.textContent = "";

    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const need = String(fd.get("need") || "").trim();
    const message = String(fd.get("message") || "").trim();

    let ok = true;

    if (name.length < 2) {
      setError("name", "Ton nom doit faire au moins 2 caractères.");
      ok = false;
    }
    if (!isValidEmail(email)) {
      setError("email", "Entre un email valide (ex: nom@domaine.com).");
      ok = false;
    }
    if (!need) {
      setError("need", "Choisis une option.");
      ok = false;
    }
    if (message.length < 10) {
      setError("message", "Décris un peu plus ton besoin (10 caractères min).");
      ok = false;
    }

    if (!ok) return;

    // UI state
    const submitBtn = form.querySelector('button[type="submit"]');
    const oldBtnText = submitBtn ? submitBtn.textContent : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Envoi…";
    }
    statusEl.textContent = "Envoi en cours…";

    try {
      const endpoint = form.getAttribute("action");
      if (!endpoint) {
        statusEl.textContent = "Erreur : action du formulaire manquante.";
        return;
      }

      // Envoi AJAX vers Formspree (pas de page Formspree)
      const res = await fetch(endpoint, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        statusEl.textContent = "Merci pour votre message. Je reviens vers vous sous 24 h.";
        form.reset();
      } else {
        let data = null;
        try { data = await res.json(); } catch {}
        const msg =
          data?.errors?.[0]?.message ||
          "Erreur lors de l’envoi. Réessaie ou contacte-moi par email.";
        statusEl.textContent = msg;
      }
    } catch (err) {
      statusEl.textContent =
        "Impossible d’envoyer (connexion). Réessaie ou contacte-moi par email.";
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = oldBtnText || "Envoyer";
      }
      statusEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
}

// =========================
// Language Gate + Header indicator + i18n apply
// =========================
const langGate = $("#langGate");
const langButtons = document.querySelectorAll(".lang-btn");
const langIndicator = $("#langIndicator");
const LANG_KEY = "site_lang";

function updateLangIndicator(lang) {
  if (!langIndicator) return;
  const up = String(lang || "fr").toUpperCase();
  langIndicator.textContent = up;
  langIndicator.setAttribute("aria-label", `Langue du site : ${up}`);
}

function openLangGate() {
  if (!langGate) return;
  langGate.classList.add("is-visible");
  langGate.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLangGate() {
  if (!langGate) return;
  langGate.classList.remove("is-visible");
  langGate.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = (localStorage.getItem(LANG_KEY) || "fr").toLowerCase();

  updateLangIndicator(savedLang);
  applyTranslations(savedLang); // ✅ applique la langue mémorisée

  // Popup à chaque chargement
  openLangGate();

  // Clic sur indicateur pour rouvrir
  if (langIndicator) {
    langIndicator.style.cursor = "pointer";
    langIndicator.addEventListener("click", openLangGate);
  }
});

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = (btn.dataset.lang || "fr").toLowerCase();

    localStorage.setItem(LANG_KEY, lang);
    updateLangIndicator(lang);
    applyTranslations(lang); // ✅ applique immédiatement la traduction

    closeLangGate();
  });
});
