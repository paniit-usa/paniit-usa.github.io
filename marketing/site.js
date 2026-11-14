/* ── Marketing section shared behaviour ──
   Contact buttons (<a data-contact="key">), scroll reveal, and the
   Dallas countdown (shown only once DALLAS.date is set in data.js). */

function wireContacts() {
  document.querySelectorAll("[data-contact]").forEach(a => {
    const v = (CONTACT[a.dataset.contact] || "").trim();
    if (v) {
      a.href = v.includes("@") && !v.startsWith("http") ? `mailto:${v}` : v;
      if (v.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
    } else {
      a.removeAttribute("href");
      a.setAttribute("aria-disabled", "true");
      a.title = "Coming soon";
      a.insertAdjacentHTML("beforeend", ` <span class="soon">· soon</span>`);
    }
  });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach(e => io.observe(e));
}

function initCountdown() {
  const el = document.getElementById("countdown");
  if (!el || typeof DALLAS === "undefined" || !DALLAS.date) return;
  const target = new Date(DALLAS.date + "T00:00:00");
  const days = Math.ceil((target - new Date()) / 86400000);
  if (days > 0) { el.querySelector(".days").textContent = days; el.hidden = false; }
}

if (typeof onPageReady === "function") onPageReady();
wireContacts();
initReveal();
initCountdown();
