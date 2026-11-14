/* ── Marketing content ──
   CONTACT: any link left "" uses `fallback` instead.
   PLACEHOLDER: the @iit.org addresses below are made up — replace with real ones.
   Links can be a URL (e.g. a Google Form) or an email address. */

const CONTACT = {
  joinTeam: "marketing@iit.org",          // join the marketing team
  dallasInterest: "dallas2028@iit.org",    // Dallas 2028 interest form
  batchCaptain: "dallas2028@iit.org",      // become a batch captain
  sponsor: "sponsorship@iit.org",           // sponsor prospectus / contact
  volunteerRoles: "dallas2028@iit.org",    // Dallas 2028 volunteer roles
  fallback: "marketing@iit.org"           // used by every button above that has no link of its own
};

/* Dallas 2028: set the date (YYYY-MM-DD) once confirmed to show a countdown. */
const DALLAS = { date: "", venue: "" };

const GOALS = [
  { icon: "✦", title: "Elevate brand identity",
    text: "A unified brand narrative across all chapters, events, and digital channels — with a one-line brand mantra." },
  { icon: "🖥️", title: "Modernize the website",
    text: "A mobile-first, user-centric iit.org that highlights alumni stories, chapters, mentorship, and scholarships." },
  { icon: "🤝", title: "Engage every generation",
    text: "Tailored pathways for young, mid-career, and senior alumni — plus an “Alumni Voices” storytelling series." },
  { icon: "📣", title: "Empower chapters",
    text: "A Marketing Playbook, a shared content calendar, and regular training for chapter leaders." },
  { icon: "🌐", title: "Expand our reach",
    text: "Thought leadership, partnerships, media, and innovation forums that reach beyond the alumni community." }
];

const GENERATIONS = [
  { cls: "young", title: "Younger alumni", years: "0–10 years out",
    items: ["Career acceleration programs", "Networking events", "Startup & entrepreneurship forums", "Social impact initiatives", "Peer communities"] },
  { cls: "mid", title: "Mid-career professionals", years: "Building and leading",
    items: ["Leadership development", "Industry forums", "Mentorship opportunities", "Executive networking"] },
  { cls: "senior", title: "Senior alumni", years: "Giving back",
    items: ["Thought leadership", "Philanthropy initiatives", "Advisory roles", "Policy discussions", "Mentoring the next generation"] }
];

const CHANNELS = [
  { name: "LinkedIn", short: "in", color: "#0a66c2", flagship: true, role: "Professional storytelling, thought leadership, alumni spotlights." },
  { name: "Instagram", short: "IG", color: "linear-gradient(45deg,#f59e0b,#db2777,#7c3aed)", role: "Visual stories, young alumni, chapter highlights." },
  { name: "YouTube", short: "▶", color: "#dc2626", role: "Keynotes, fireside chats, alumni journeys." },
  { name: "X", short: "X", color: "#0f172a", role: "Real-time updates, policy and tech trends." },
  { name: "Facebook", short: "f", color: "#1877f2", role: "Community groups and event promotion." }
];

const CONTENT_PRIORITIES = [
  "Alumni achievements & leadership stories", "Chapter events & national initiatives",
  "Career & entrepreneurship resources", "Social impact & community service",
  "IIT heritage & global influence", "Young alumni & startup stories"
];

const SPONSOR_TIERS = [
  { rank: "Top tier", title: "Title / Presenting Sponsor", top: true,
    pitch: "The flagship event partner.",
    benefits: ["Main-stage recognition", "Premium branding", "VIP access", "Sponsor dinner event", "Digital campaign visibility"] },
  { rank: "Focused", title: "Campus / Track Sponsor",
    pitch: "Aligned with a campus reunion or professional theme.",
    benefits: ["Session branding", "Campus lounge visibility", "Curated networking", "Signage", "Attendee passes"] },
  { rank: "Accessible", title: "Community / In-Kind Sponsor",
    pitch: "For alumni businesses and local partners.",
    benefits: ["Logo placement", "Exhibit table", "Website listing", "Appreciation mentions"] }
];

const GIVING_LEVELS = ["Friend", "Supporter", "Champion", "Legacy Donor"];

const ROAD_TO_DALLAS = [
  { when: "2026 Q4 – 2027 Q1", title: "Foundation", text: "Leads, sponsor deck, alumni data, and campus and batch teams come together." },
  { when: "2027 Q2 – Q4", title: "Launch", text: "Themes announced, interest form opens, batch and community campaigns begin." },
  { when: "2028 Q1 – Event", title: "Countdown", text: "Registrations, giving challenges, and leaderboards." },
  { when: "After the event", title: "Impact", text: "An impact report and a thank-you to every donor and sponsor." }
];

const ROLES = [
  { icon: "🎓", title: "Campus Reunion Leads", text: "Drive outreach, batch captain recruitment, and programming for your IIT." },
  { icon: "📞", title: "Batch Captains", text: "Rally your classmates through calls, WhatsApp, LinkedIn, and class challenges." },
  { icon: "🧭", title: "Community & Affinity Coordinators", text: "Bring together smaller IIT groups, regional groups, and professional networks." },
  { icon: "🏢", title: "Corporate Outreach Leads", text: "Connect with companies across technology, finance, healthcare, and more." },
  { icon: "🎁", title: "Sponsor Fulfillment", text: "Make sure every sponsor's benefits are delivered beautifully." }
];
