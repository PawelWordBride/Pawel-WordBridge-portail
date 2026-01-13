// Helpers
const $ = (sel) => document.querySelector(sel);

function setError(fieldName, message) {
  const el = document.querySelector(`[data-error-for="${fieldName}"]`);
  if (el) el.textContent = message || "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
