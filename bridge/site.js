// Shared header, sidebar and footer for all PANIIT Bridge pages.
// Each page only contains its own <main class="content"> and loads this script at the end of <body>.
//
// ── How site managers' Google Docs get onto the site ──
// 1. In the Google Doc: File → Share → Publish to web → Publish. Copy the link (ends in /pub).
// 2. Paste it into DOCS below, next to the matching key.
// The page (or home-page box) then shows the Doc instead of its built-in text.
// Edits to the Doc appear on the site automatically (Google refreshes published Docs every few minutes).

const DOCS = {
  // Home page boxes
  announcements: "",
  newsletter: "",
  anecdotes: "",
  // 1. Administrative
  sponsors: "",
  volunteers: "",
  ethics: "",
  "rules-committee": "",
  "appeals-committee": "",
  // 2. Player Resources
  "club-rules": "",
  "schedule-results": "",
  technical: "",
  "point-leaders": "",
  "appeals-process": "",
};

// Google Calendar "embed" URL (Calendar settings → Integrate calendar → Embed code → the src="..." link).
const CALENDAR_URL = "";

// Shared Google Drive folder for the volunteer-only Onboarding area.
const ONBOARDING_FOLDER_URL = "";

const NAV = [
  { area: "Administrative", items: [
    { id: "sponsors", title: "Sponsors", href: "admin/sponsors.html" },
    { id: "volunteers", title: "Volunteers", href: "admin/volunteers.html" },
    { id: "ethics", title: "Ethics Committee", href: "admin/ethics.html" },
    { id: "rules-committee", title: "Rules Committee", href: "admin/rules-committee.html" },
    { id: "appeals-committee", title: "Appeals Committee", href: "admin/appeals-committee.html" },
    { id: "report-issue", title: "Report Site Issues", href: "admin/report-issue.html" },
  ]},
  { area: "Player Resources", items: [
    { id: "club-rules", title: "Club Rules", href: "players/club-rules.html" },
    { id: "schedule-results", title: "Schedule & Results", href: "players/schedule-results.html" },
    { id: "technical", title: "Technical Resources", href: "players/technical.html" },
    { id: "point-leaders", title: "Point Leaders", href: "players/point-leaders.html" },
    { id: "appeals-process", title: "Appeals Process", href: "players/appeals-process.html" },
    // Public for now; move to Onboarding (volunteer Drive folder) later.
    { id: "eligible-players", title: "Eligible Players List", href: "players/eligible-players.html" },
  ]},
  { area: "Onboarding", locked: true, items: [
    { id: "td-resources", title: "TD Resources", href: "onboarding/td-resources.html" },
    { id: "conflict-resolution", title: "Conflict Resolution", href: "onboarding/conflict-resolution.html" },
    { id: "site-managers-guide", title: "Site Managers' Guide", href: "onboarding/site-managers-guide.html" },
  ]},
];

(function () {
  const ROOT = new URL(".", document.currentScript.src).href; // .../bridge/
  const here = location.href.split(/[?#]/)[0];
  const main = document.querySelector("main.content");

  const header = document.createElement("header");
  header.innerHTML = `
    <a class="logo" href="${ROOT}"><img src="${ROOT}../assets/public/logo.jpg" alt="PANIIT USA logo" /></a>
    <div>
      <div class="org-name">PANIIT USA</div>
      <a class="site-title" href="${ROOT}">PANIIT Bridge</a>
      <div><a class="back" href="${ROOT}../">← PANIIT USA home</a></div>
    </div>
    <button class="menu-btn" type="button">☰ Menu</button>`;
  header.querySelector(".menu-btn").onclick = () => document.body.classList.toggle("nav-open");

  const link = (href, text, cls = "") => {
    const url = ROOT + href;
    const active = url === here || (href === "" && here === ROOT + "index.html");
    return `<a class="${cls}${active ? " active" : ""}" href="${url}">${text}</a>`;
  };
  const aside = document.createElement("aside");
  aside.className = "sidebar";
  aside.innerHTML = `<nav>${link("", "🏠 Bridge Home", "home-link")}${NAV.map(group => {
    const open = group.items.some(i => ROOT + i.href === here);
    return `<details${open ? " open" : ""}>
      <summary><span>${group.area}${group.locked ? '<span class="lock" title="Volunteers only">🔒</span>' : ""}</span></summary>
      <ul>${group.items.map(i => `<li>${link(i.href, i.title)}</li>`).join("")}</ul>
    </details>`;
  }).join("")}</nav>`;

  const layout = document.createElement("div");
  layout.className = "layout";
  main.before(header);
  main.before(layout);
  layout.append(aside, main);

  const footer = document.createElement("footer");
  footer.innerHTML = `PANIIT USA &nbsp;·&nbsp; <a href="${ROOT}admin/report-issue.html">Report a site issue</a>`;
  layout.after(footer);

  // Swap built-in text for a published Google Doc when one is configured.
  document.querySelectorAll("[data-doc]").forEach(el => {
    const url = DOCS[el.dataset.doc];
    if (!url) return;
    const src = url + (url.includes("?") ? "&" : "?") + "embedded=true";
    el.querySelectorAll(".doc-body").forEach(b => b.remove());
    (el.querySelector(".doc-slot") || el).insertAdjacentHTML("beforeend", `<iframe class="gdoc" src="${src}"></iframe>`);
  });

  document.querySelectorAll("[data-calendar]").forEach(el => {
    if (CALENDAR_URL) el.innerHTML = `<iframe class="gdoc" src="${CALENDAR_URL}"></iframe>`;
  });

  document.querySelectorAll("[data-onboarding-folder]").forEach(el => {
    if (ONBOARDING_FOLDER_URL) el.href = ONBOARDING_FOLDER_URL;
    else el.replaceWith(Object.assign(document.createElement("span"), { className: "placeholder", textContent: "Volunteer folder link coming soon." }));
  });
})();
