/* ── Rethinking PANIIT content ──
   Edit this file to update the site; the pages render from it.
   Status values: "proposed", "conceptual", "discussion".
   CONTACT: any link left "" uses `fallback` instead.
   PLACEHOLDER: the @iit.org addresses below are made up — replace with real ones. */

const CONTACT = {
  shareIdeas: "rethinking@iit.org",     // e.g. a Google Form for ideas & feedback
  volunteer: "rethinking@iit.org",      // e.g. a Google Form for volunteers
  workshop: "youngiitians@iit.org",       // Young IITians Workshop interest form
  email: "rethinking@iit.org",          // e.g. "rethinking@iit.org" (shown as a mailto link)
  fallback: "rethinking@iit.org"        // used by every button above that has no link of its own
};

const PILLARS = [
  {
    id: "brand", icon: "✦", title: "Brand Reinvention",
    short: "A modern, recognizable, and compelling PANIIT identity.",
    objective: "Establish a modern, recognizable, and compelling PANIIT identity.",
    challenges: [
      "Inconsistent visual branding across chapters and activities.",
      "An outdated or fragmented web presence.",
      "No compelling narrative explaining the relevance and value of PANIIT."
    ],
    initiatives: [
      "Develop a consistent PANIIT brand identity.",
      "Redesign the central website.",
      "Establish common visual standards, colors, typography, and design guidelines.",
      "Create a compelling institutional narrative.",
      "Improve LinkedIn and social media presence.",
      "Develop a PANIIT Wiki documenting history, achievements, chapters, events, and alumni contributions."
    ],
    outcomes: "A recognizable global brand that reflects the collective strength and accomplishments of the IIT alumni community."
  },
  {
    id: "engagement", icon: "◎", title: "Member Engagement",
    short: "A compelling reason to participate, for every generation of IIT alumni.",
    objective: "Create a compelling value proposition for every generation of IIT alumni.",
    challenges: [
      "Mentorship, scholarships, social and networking programs struggle to attract participation.",
      "Some activities may be perceived as catering primarily to older generations.",
      "Younger IIT alumni do not appear strongly connected to the PANIIT ecosystem."
    ],
    initiatives: [
      "Young IITians Workshop: rethink PANIIT from first principles with graduates from 2017 onward.",
      "Explore technology and AI communities, startup networks, and industry groups.",
      "Explore investor and founder connections and global networking opportunities.",
      "Explore social impact, volunteering, and larger philanthropic initiatives."
    ],
    outcomes: "A clear answer to: why should a recent IIT graduate become an active participant in PANIIT?"
  },
  {
    id: "platform", icon: "⬡", title: "Digital Engagement Platform",
    short: "One connected home for people, events, chapters, and communities.",
    objective: "Connect people, events, chapters, and activities into a unified ecosystem.",
    challenges: [
      "Activities are spread across websites, social media, email, and event platforms.",
      "After an event ends, there is rarely a place to continue the conversation."
    ],
    initiatives: [
      "Member directory: profiles, IIT affiliation, interests, location, expertise.",
      "Events: one calendar, registration, recordings, summaries, follow-up.",
      "Communities: technology, professional, entrepreneurship, regional, special-interest.",
      "Knowledge repository: presentations, webinars, videos, articles.",
      "Opportunities: mentorship, volunteering, philanthropy, collaboration, startups."
    ],
    outcomes: "Sustained engagement rather than isolated attendance."
  },
  {
    id: "chapters", icon: "◈", title: "Chapter Revitalization",
    short: "One global network, many locally empowered chapters.",
    objective: "Transform individual chapters into a coordinated global network.",
    challenges: [
      "Some chapters have outdated websites; some are minimally active.",
      "Branding and communication are inconsistent.",
      "Successful initiatives are not systematically shared."
    ],
    initiatives: [
      "Conduct a chapter audit: active, inactive, and dormant.",
      "Create a centralized chapter directory.",
      "Establish common branding and website templates.",
      "Define minimum expectations for active chapters.",
      "Establish regular communication among chapter leadership.",
      "Encourage collaboration across geographic boundaries."
    ],
    outcomes: "One global network, many locally empowered chapters."
  },
  {
    id: "events", icon: "◷", title: "Events Reinvention",
    short: "From occasional large gatherings to a year-round calendar.",
    objective: "Move from occasional large gatherings to continuous engagement.",
    challenges: [
      "The flagship gathering takes place once every two years.",
      "Events are fragmented, with limited continuity and follow-up."
    ],
    initiatives: [
      "Flagship: the PANIIT USA biennial gathering, with Dallas 2028 as the next.",
      "Regional: conferences, city gatherings, industry meetups, Young IITians gatherings.",
      "Virtual & special-interest: AI Show & Tell, tech seminars, entrepreneurship forums, distinguished alumni talks."
    ],
    outcomes: "An active calendar throughout the year."
  }
];

const CHALLENGES = [
  {
    title: "Brand & Visibility",
    today: "Branding varies across chapters and activities, and the web presence is fragmented.",
    why: "Without a clear story, the value of PANIIT is hard to see — for alumni and the wider public.",
    opportunity: "Build a recognizable global brand that reflects the collective strength of IIT alumni."
  },
  {
    title: "Member Engagement",
    today: "Programs like mentorship and scholarships are not drawing the participation they deserve.",
    why: "Younger alumni may have very different expectations from the programs on offer.",
    opportunity: "Discover what would make PANIIT genuinely valuable to every generation."
  },
  {
    title: "Fragmented Digital Experience",
    today: "Activities are spread across websites, social media, email, and event platforms.",
    why: "Someone attends a webinar — then what? Slides, recordings, and connections are hard to find.",
    opportunity: "Make every event the beginning of a relationship, not an isolated activity."
  },
  {
    title: "Disconnected Chapters",
    today: "Some chapters are thriving; others have outdated sites or are dormant.",
    why: "Good ideas in one city rarely reach the next, and coordination is limited.",
    opportunity: "A connected chapter ecosystem that shares what works."
  },
  {
    title: "Outdated Events Model",
    today: "The flagship gathering happens once every two years.",
    why: "A biennial event alone cannot sustain year-round engagement.",
    opportunity: "A continuous calendar of regional, virtual, and flagship events."
  }
];

const INITIATIVES = [
  {
    title: "Young IITians Workshop", status: "proposed", pillar: "engagement",
    tagline: "Rethinking PANIIT with graduates from 2017 onward.",
    objectives: [
      "Ask: if you were designing PANIIT today, what would you want it to be?",
      "Explore networking, entrepreneurship, mentorship, technology, social impact, and philanthropy.",
      "Include participants across IITs, industries, and locations."
    ],
    deliverables: ["A report of younger alumni priorities and recommendations."],
    page: ""
  },
  {
    title: "PANIIT Brand Reinvention", status: "proposed", pillar: "brand",
    tagline: "Creating a consistent global identity.",
    objectives: ["Audit the current identity and online presence.", "Define visual standards and a shared narrative."],
    deliverables: ["Brand guidelines.", "A redesigned central website."],
    page: ""
  },
  {
    title: "PANIIT Wiki", status: "proposed", pillar: "brand",
    tagline: "A comprehensive institutional knowledge repository.",
    objectives: [
      "Document the history of the IITs and of PANIIT.",
      "Capture alumni achievements, chapters, events, and milestones."
    ],
    deliverables: ["A continuously growing, community-maintained Wiki."],
    page: ""
  },
  {
    title: "Chapter Revitalization", status: "proposed", pillar: "chapters",
    tagline: "Auditing and strengthening the global chapter network.",
    objectives: ["Inventory active, inactive, and dormant chapters.", "Share templates and successful programs."],
    deliverables: ["A chapter directory.", "Common branding and website templates."],
    page: ""
  },
  {
    title: "PANIIT Engagement Platform", status: "conceptual", pillar: "platform",
    tagline: "Connecting members, activities, events, and communities.",
    objectives: ["Define what a 360-degree engagement platform should do.", "Design a follow-up path for every event."],
    deliverables: ["A platform concept and pilot plan."],
    page: ""
  },
  {
    title: "Events Transformation", status: "proposed", pillar: "events",
    tagline: "A continuous calendar of regional, virtual, and flagship events.",
    objectives: ["Adopt a three-tier event model.", "Add follow-up to every event."],
    deliverables: ["A shared year-round events calendar."],
    page: ""
  }
];

const ROADMAP = [
  { when: "Phase 1", title: "Understand & Assess", items: ["Audit websites and social media", "Assess chapter activity", "Gather alumni feedback", "Young IITians Workshop"] },
  { when: "Phase 2", title: "Define the Future", items: ["Value proposition", "New brand identity", "Strategic priorities", "Engagement model"] },
  { when: "Phase 3", title: "Build", items: ["New digital presence", "PANIIT Wiki", "Chapter templates", "Events calendar"] },
  { when: "Phase 4", title: "Activate & Scale", items: ["Expand what works", "Revitalize chapters", "Build communities", "Measure results"] }
];

const PRINCIPLES = [
  { title: "Start with first principles", text: "Do not assume existing programs and structures must be preserved. Question everything — constructively." },
  { title: "Listen to younger alumni", text: "The future must be shaped by the generations who will take part over the next several decades." },
  { title: "Think globally, act locally", text: "Build a connected global network while empowering individual chapters." },
  { title: "Engagement, not just membership", text: "A name in a database is not the same as an engaged member." },
  { title: "Relationships, not just events", text: "Every activity should create opportunities for continued interaction." },
  { title: "Leverage technology", text: "Use modern tools to make participation, collaboration, and knowledge sharing easier." },
  { title: "Measure outcomes", text: "Success is meaningful participation and impact, not the number of activities." },
  { title: "Make it a collective effort", text: "Rethinking PANIIT invites contributions from the entire IIT alumni ecosystem." }
];

const WAYS = [
  { icon: "💡", title: "Share ideas", text: "Tell us what PANIIT should become.", link: "shareIdeas" },
  { icon: "🧭", title: "Join a workshop", text: "Help rethink PANIIT from first principles.", link: "workshop" },
  { icon: "🙋", title: "Volunteer", text: "Lend your time and skills to an initiative.", link: "volunteer" },
  { icon: "🎨", title: "Branding & communications", text: "Help shape how PANIIT looks and speaks.", link: "volunteer" },
  { icon: "📚", title: "Contribute to the Wiki", text: "Document history, people, and achievements.", link: "volunteer" },
  { icon: "📍", title: "Revitalize a chapter", text: "Bring new energy to your local chapter.", link: "volunteer" },
  { icon: "🚀", title: "Propose an initiative", text: "Have a bold idea? Bring it forward.", link: "shareIdeas" },
  { icon: "💬", title: "Give feedback", text: "Tell us what we're getting right — and wrong.", link: "shareIdeas" }
];
