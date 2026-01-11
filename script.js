// Helpers
const $ = (sel) => document.querySelector(sel);

function setError(fieldName, message) {
  const el = document.querySelector(`[data-error-for="${fieldName}"]`);
  if (el) el.textContent = message || "";
}

function isValidEmail(email) {
  // Simple but OK for frontend validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Year in footer
$("#year").textContent = String(new Date().getFullYear());

// Mobile menu
const burger = $("#burger");
const mobileNav = $("#mobileNav");

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

// Form validation + fake submit (demo)
const form = $("#leadForm");
const statusEl = $("#formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Reset errors
  ["name", "email", "need", "message"].forEach((f) => setError(f, ""));
  statusEl.textContent = "";

  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const need = String(formData.get("need") || "").trim();
  const message = String(formData.get("message") || "").trim();

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

  // Demo: simulate sending
  statusEl.textContent = "Message prêt à être envoyé ✅ (démo).";
  form.reset();

  // Optional: scroll a bit to show the status
  statusEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
