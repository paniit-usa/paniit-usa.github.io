/* ── Rethinking PANIIT shared behaviour ──
   Injects nav + footer, wires contact buttons, scroll reveal,
   hero network animation, count-up stats, and renders data.js content. */

const NAV = [
  ["index.html", "Home"],
  ["challenge.html", "The Challenge"],
  ["pillars.html", "Pillars"],
  ["initiatives.html", "Initiatives"],
  ["get-involved.html", "Get Involved"],
  ["about.html", "About"]
];
const STATUS_LABEL = { proposed: "Proposed", conceptual: "Conceptual", discussion: "Under discussion" };
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (sel, root = document) => root.querySelector(sel);

/* ── Nav & footer ── */
function renderChrome() {
  const here = location.pathname.split("/").pop() || "index.html";
  const nav = document.createElement("nav");
  nav.className = "nav";
  nav.innerHTML = `
    <div class="nav-inner">
      <a class="brand" href="index.html"><img src="../assets/public/logo.jpg" alt="" />Rethinking <span class="v2">PANIIT</span></a>
      <button class="nav-toggle" aria-label="Menu">☰</button>
      <ul class="nav-links">
        ${NAV.map(([href, label]) => `<li><a href="${href}" class="${href === here ? "active" : ""}">${label}</a></li>`).join("")}
      </ul>
    </div>`;
  document.body.prepend(nav);
  $(".nav-toggle", nav).addEventListener("click", () => nav.classList.toggle("open"));

  const footer = document.createElement("footer");
  footer.className = "site";
  footer.innerHTML = `
    <div class="wrap">
      <div class="cols">
        <div>
          <div class="name">Rethinking <span class="grad-text">PANIIT</span></div>
          <p style="margin:0.3rem 0 0.8rem;color:white">Reimagining the Global IIT Alumni Network</p>
          <p style="max-width:440px">A collective initiative to build a more connected, relevant, and impactful PANIIT community.</p>
        </div>
        <ul>
          <li><a href="index.html#vision">Vision</a></li>
          <li><a href="pillars.html">Strategic Pillars</a></li>
          <li><a href="initiatives.html">Initiatives</a></li>
          <li><a href="get-involved.html">Get Involved</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="../">Existing PANIIT USA site</a></li>
        </ul>
      </div>
      <div class="base">This is a strategic discussion site. Initiatives shown are proposals under discussion, not approved programs.</div>
    </div>`;
  document.body.appendChild(footer);
}

/* ── Contact buttons: <a data-contact="volunteer"> ── */
function contactHref(key) {
  const v = (typeof CONTACT !== "undefined" && (CONTACT[key] || CONTACT.fallback)) || "";
  if (!v) return "";
  return v.includes("@") && !v.startsWith("http") ? `mailto:${v}` : v;
}
function wireContacts(root = document) {
  root.querySelectorAll("[data-contact]").forEach(a => {
    const href = contactHref(a.dataset.contact);
    if (href) {
      a.href = href;
      if (href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
    } else {
      a.removeAttribute("href");
    }
  });
}

/* ── Scroll reveal ── */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach(e => io.observe(e));
}

/* ── Count-up: <span data-count="100000" data-suffix="+"> ── */
function initCounters() {
  const fmt = n => n >= 1000 ? Math.round(n / 1000) + "K" : String(n);
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = +el.dataset.count, suffix = el.dataset.suffix || "";
    const done = () => { el.textContent = fmt(target) + suffix; };
    if (reduceMotion || !("IntersectionObserver" in window)) return done();
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), dur = 1600;
      const tick = t => {
        const p = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(Math.round(target * eased)) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
  });
}

/* ── Hero network animation ── */
function initNetwork() {
  const canvas = $(".hero canvas");
  if (!canvas || reduceMotion) return;
  const ctx = canvas.getContext("2d");
  let w, h, nodes = [];
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(110, (w * h) / 11000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8, hot: Math.random() < 0.12
    }));
  }
  function frame() {
    ctx.clearRect(0, 0, w, h);
    const max = 130;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      a.x += a.vx; a.y += a.vy;
      if (a.x < 0 || a.x > w) a.vx *= -1;
      if (a.y < 0 || a.y > h) a.vy *= -1;
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
        if (d < max) {
          const o = (1 - d / max) * 0.35;
          ctx.strokeStyle = a.hot || b.hot ? `rgba(249,115,22,${o})` : `rgba(148,163,184,${o * 0.7})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    nodes.forEach(n => {
      ctx.beginPath(); ctx.arc(n.x, n.y, n.hot ? n.r + 1 : n.r, 0, Math.PI * 2);
      ctx.fillStyle = n.hot ? "#fbbf24" : "rgba(226,232,240,0.75)";
      ctx.shadowColor = n.hot ? "#f97316" : "transparent";
      ctx.shadowBlur = n.hot ? 12 : 0;
      ctx.fill();
    });
    ctx.shadowBlur = 0;
    requestAnimationFrame(frame);
  }
  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(frame);
}

/* ── Renderers (run only if the container exists on the page) ── */
const pad = n => String(n).padStart(2, "0");
const badge = s => `<span class="badge ${s}">${STATUS_LABEL[s] || s}</span>`;

function renderPillarCards() {
  const el = $("#pillar-cards"); if (!el) return;
  el.innerHTML = PILLARS.map((p, i) => `
    <a class="card pillar-card reveal" href="pillars.html#${p.id}">
      <span class="num grad-text">${pad(i + 1)}</span>
      <h3>${p.title}</h3>
      <p>${p.short}</p>
      <div class="more">Explore →</div>
    </a>`).join("");
}

function renderPillarDetails() {
  const el = $("#pillar-details"); if (!el) return;
  el.innerHTML = PILLARS.map((p, i) => `
    <article class="pillar-detail reveal" id="${p.id}">
      <span class="num grad-text">PILLAR ${pad(i + 1)}</span>
      <h2>${p.title}</h2>
      <p class="objective">${p.objective}</p>
      <h3>Where we are today</h3>
      <ul class="ticks">${p.challenges.map(c => `<li>${c}</li>`).join("")}</ul>
      <h3>Proposed initiatives</h3>
      <ul class="ticks">${p.initiatives.map(c => `<li>${c}</li>`).join("")}</ul>
      <div class="pillar-extra" data-pillar="${p.id}"></div>
      <h3>Expected outcome</h3>
      <p style="color:white">${p.outcomes}</p>
    </article>`).join("");
  const nav = $("#side-nav");
  if (nav) nav.innerHTML = PILLARS.map((p, i) => `<li><a href="#${p.id}">${pad(i + 1)} · ${p.title}</a></li>`).join("");
}

function renderInitiatives(limit) {
  const el = $("#initiatives"); if (!el) return;
  const list = limit ? INITIATIVES.slice(0, limit) : INITIATIVES;
  el.innerHTML = list.map((it, i) => `
    <div class="card init hover reveal">
      <div class="top"><span class="idx">${pad(i + 1)}</span>${badge(it.status)}</div>
      <h3>${it.title}</h3>
      <p>${it.tagline}</p>
      ${limit ? `<a class="more" href="initiatives.html" style="text-decoration:none">Details →</a>` : `
      <details>
        <summary>Objectives &amp; deliverables</summary>
        <h4>Objectives</h4><ul>${it.objectives.map(o => `<li>${o}</li>`).join("")}</ul>
        <h4>Deliverables</h4><ul>${it.deliverables.map(o => `<li>${o}</li>`).join("")}</ul>
        <h4>Pillar</h4><p><a href="pillars.html#${it.pillar}" style="color:var(--orange)">${(PILLARS.find(p => p.id === it.pillar) || {}).title || ""}</a></p>
        ${it.page ? `<p style="margin-top:0.8rem"><a href="${it.page}" style="color:var(--orange)">Full initiative page →</a></p>` : ""}
      </details>`}
    </div>`).join("");
}

function renderChallenges() {
  const el = $("#challenges"); if (!el) return;
  el.innerHTML = CHALLENGES.map((c, i) => `
    <div class="card challenge reveal">
      <div class="num grad-text">${pad(i + 1)}</div>
      <div>
        <h3>${c.title}</h3>
        <div class="cols">
          <div><h4>Today</h4><p>${c.today}</p></div>
          <div><h4>Why it matters</h4><p>${c.why}</p></div>
          <div class="opp"><h4>The opportunity</h4><p>${c.opportunity}</p></div>
        </div>
      </div>
    </div>`).join("");
}

function renderRoadmap() {
  const el = $("#roadmap"); if (!el) return;
  el.innerHTML = ROADMAP.map(p => `
    <div class="phase reveal">
      <span class="dot"></span>
      <div class="when">${p.when}</div>
      <h3>${p.title}</h3>
      <ul>${p.items.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>`).join("");
}

function renderPrinciples() {
  const el = $("#principles"); if (!el) return;
  el.innerHTML = PRINCIPLES.map((p, i) => `
    <div class="card reveal">
      <span class="grad-text" style="font-family:var(--display);font-weight:700;font-size:1.8rem;display:block;margin-bottom:0.5rem">${pad(i + 1)}</span>
      <h3>${p.title}</h3>
      <p>${p.text}</p>
    </div>`).join("");
}

function renderWays() {
  const el = $("#ways"); if (!el) return;
  el.innerHTML = WAYS.map(w => `
    <div class="card hover reveal" style="display:flex;flex-direction:column">
      <span class="icon">${w.icon}</span>
      <h3>${w.title}</h3>
      <p style="flex:1">${w.text}</p>
      <a class="btn btn-ghost" data-contact="${w.link}" style="margin-top:1.1rem;align-self:flex-start;padding:0.55rem 1rem;font-size:0.88rem">I'm in →</a>
    </div>`).join("");
}

/* ── Boot ── */
renderChrome();
renderPillarCards();
renderPillarDetails();
renderInitiatives(document.body.dataset.initLimit ? +document.body.dataset.initLimit : 0);
renderChallenges();
renderRoadmap();
renderPrinciples();
renderWays();
if (typeof onPageReady === "function") onPageReady();
wireContacts();
initReveal();
initCounters();
initNetwork();
