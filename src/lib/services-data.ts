import {
  Database, Users, Code, Smartphone, Palette, Brush, Cloud, Megaphone,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  path: string;
  title: string;
  short: string;
  hero: string;
  description: string;
  icon: LucideIcon;
  benefits: { title: string; desc: string }[];
  features: string[];
  tech: string[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

const baseProcess = [
  { title: "Discovery", desc: "Workshops to map goals, users, and constraints." },
  { title: "Strategy", desc: "Architecture, roadmap and success metrics." },
  { title: "Build", desc: "Iterative delivery with weekly demos." },
  { title: "Launch & Grow", desc: "Go-live, monitoring, and continuous improvement." },
];

export const services: Service[] = [
  {
    slug: "erp", path: "/services/erp", title: "ERP Solutions",
    short: "Unified operations from finance to inventory.",
    hero: "Run your entire business on one intelligent platform.",
    description: "We design and implement ERP systems that consolidate finance, inventory, HR, procurement and reporting — replacing fragmented tools with one source of truth.",
    icon: Database,
    benefits: [
      { title: "Single source of truth", desc: "Eliminate silos across departments." },
      { title: "Faster decisions", desc: "Real-time dashboards and forecasts." },
      { title: "Process automation", desc: "Codify approvals and workflows." },
      { title: "Scales with you", desc: "Modular architecture adds capabilities on demand." },
    ],
    features: ["Inventory Management", "HR Management", "Accounting & Finance", "Procurement", "Reporting & BI", "Workflow Automation"],
    tech: ["Odoo", "SAP B1", "Microsoft Dynamics", "Custom .NET", "PostgreSQL", "Power BI"],
    process: baseProcess,
    faqs: [
      { q: "How long does an ERP rollout take?", a: "Typical phased rollouts run 8–16 weeks depending on modules and integrations." },
      { q: "Can you migrate from our existing tools?", a: "Yes — we run a structured data migration with reconciliation and parallel runs." },
    ],
  },
  {
    slug: "crm", path: "/services/crm", title: "CRM Systems",
    short: "Close more revenue with intelligent pipelines.",
    hero: "Turn every customer touchpoint into measurable growth.",
    description: "CRM platforms tailored to your sales motion — capturing leads, automating follow-ups, and delivering pipeline visibility that drives revenue.",
    icon: Users,
    benefits: [
      { title: "Higher win rates", desc: "Structured pipelines and playbooks." },
      { title: "Zero leakage", desc: "Every lead tracked, scored, and nurtured." },
      { title: "Marketing alignment", desc: "Closed-loop attribution end-to-end." },
      { title: "Customer 360", desc: "Unified profile across sales, support, and marketing." },
    ],
    features: ["Lead Management", "Sales Automation", "Customer Support", "Reporting & Forecasting", "Marketing Automation"],
    tech: ["Salesforce", "HubSpot", "Zoho", "Custom CRM", "Twilio", "SendGrid"],
    process: baseProcess,
    faqs: [
      { q: "Off-the-shelf or custom CRM?", a: "We recommend whichever fits — many clients start on HubSpot/Zoho and graduate to custom modules." },
    ],
  },
  {
    slug: "web", path: "/services/web", title: "Web Development",
    short: "Performant web products engineered to scale.",
    hero: "Web platforms built for speed, scale, and conversion.",
    description: "From corporate sites to complex SaaS dashboards, we ship fast, accessible, secure web products with modern architecture.",
    icon: Code,
    benefits: [
      { title: "Sub-second loads", desc: "Edge rendering and aggressive caching." },
      { title: "Conversion-first", desc: "Tested funnels and analytics built-in." },
      { title: "Enterprise-grade", desc: "SOC-ready patterns and SSO support." },
      { title: "Maintainable", desc: "Type-safe codebases your team can extend." },
    ],
    features: ["Corporate Websites", "Customer Portals", "SaaS Products", "Ecommerce", "Custom Applications"],
    tech: ["React", "Next.js", "ASP.NET", "Node.js", "SQL Server", "PostgreSQL"],
    process: baseProcess,
    faqs: [{ q: "Do you handle hosting?", a: "Yes — we deploy on Vercel, Azure, AWS or your preferred cloud." }],
  },
  {
    slug: "mobile", path: "/services/mobile", title: "Mobile App Development",
    short: "Native-feeling apps for iOS and Android.",
    hero: "Mobile experiences your customers actually open every day.",
    description: "We design and build mobile apps with native performance, polished interactions, and analytics-driven iteration.",
    icon: Smartphone,
    benefits: [
      { title: "Cross-platform reach", desc: "One codebase, two stores." },
      { title: "Offline-first", desc: "Reliable in any network condition." },
      { title: "Push & in-app", desc: "Engagement loops that retain users." },
      { title: "Store-ready", desc: "We handle review, screenshots, and rollout." },
    ],
    features: ["Android", "iOS", "Flutter", "React Native", "Push Notifications", "App Store Submission"],
    tech: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "OneSignal"],
    process: baseProcess,
    faqs: [{ q: "Native or cross-platform?", a: "We recommend based on your performance and platform needs — both are first-class." }],
  },
  {
    slug: "uiux", path: "/services/uiux", title: "UI/UX Design",
    short: "Research-led design that moves business metrics.",
    hero: "Design that earns trust and drives action.",
    description: "We design products users love — research, wireframes, polished UI, and scalable design systems.",
    icon: Palette,
    benefits: [
      { title: "User research", desc: "Decisions backed by real evidence." },
      { title: "Design systems", desc: "Consistency at scale across teams." },
      { title: "Prototype fast", desc: "Validate before you build." },
      { title: "Accessibility", desc: "WCAG-compliant by default." },
    ],
    features: ["User Research", "Wireframes", "Interactive Prototypes", "Design Systems", "Usability Testing"],
    tech: ["Figma", "Framer", "Maze", "Hotjar", "Lottie"],
    process: baseProcess,
    faqs: [{ q: "Can you work with our engineers?", a: "Yes — we deliver tokens, components, and developer handoff in Figma." }],
  },
  {
    slug: "graphics", path: "/services/graphics", title: "Graphics Design",
    short: "Visual identity that makes your brand unmistakable.",
    hero: "Brand systems that look as bold as your ambition.",
    description: "Identity, social, and marketing creative built around a strong visual system.",
    icon: Brush,
    benefits: [
      { title: "Distinct identity", desc: "Stand out in a sea of sameness." },
      { title: "Consistent system", desc: "Templates your team can reuse." },
      { title: "Campaign ready", desc: "Assets sized for every channel." },
      { title: "On-brand always", desc: "Guidelines that scale across vendors." },
    ],
    features: ["Branding", "Logo Design", "Social Media Creatives", "Marketing Materials", "Pitch Decks"],
    tech: ["Illustrator", "Photoshop", "Figma", "After Effects"],
    process: baseProcess,
    faqs: [{ q: "Do you provide source files?", a: "Always — full editable source plus brand guidelines." }],
  },
  {
    slug: "cloud", path: "/services/cloud", title: "Cloud Solutions",
    short: "Cloud architecture engineered for scale and resilience.",
    hero: "Run faster, safer, and cheaper on modern cloud.",
    description: "Cloud architecture, DevOps and SRE — from greenfield deployment to migration and 24/7 monitoring.",
    icon: Cloud,
    benefits: [
      { title: "Elastic scale", desc: "Pay for what you use, scale to demand." },
      { title: "Cost optimized", desc: "Right-sized infra with FinOps practices." },
      { title: "Always on", desc: "Multi-AZ high availability by design." },
      { title: "Compliance-ready", desc: "SOC2, ISO, HIPAA-aligned patterns." },
    ],
    features: ["Azure", "AWS", "Google Cloud", "CI/CD & DevOps", "Containerized Deployment", "24/7 Monitoring"],
    tech: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Datadog"],
    process: baseProcess,
    faqs: [{ q: "Can you migrate us from on-prem?", a: "Yes — lift-and-shift, replatform, or refactor, with zero-downtime cutovers." }],
  },
  {
    slug: "marketing", path: "/services/marketing", title: "Digital Marketing",
    short: "Performance marketing that compounds month over month.",
    hero: "Predictable, profitable customer acquisition at scale.",
    description: "Search, paid, social and content programs engineered around CAC, LTV and conversion math.",
    icon: Megaphone,
    benefits: [
      { title: "ROI-first", desc: "Every channel measured to revenue." },
      { title: "Full-funnel", desc: "Awareness through retention." },
      { title: "Creative + media", desc: "In-house creative iteration loop." },
      { title: "Transparent reporting", desc: "Live dashboards, no black boxes." },
    ],
    features: ["SEO", "Google Ads", "Social Media Marketing", "Performance Marketing", "Content Marketing", "Email & Lifecycle"],
    tech: ["GA4", "GTM", "Search Console", "Meta Ads", "LinkedIn Ads", "Ahrefs"],
    process: baseProcess,
    faqs: [{ q: "What's a typical engagement?", a: "3-month sprint to establish baseline, then ongoing optimization." }],
  },
];

export const findService = (slug: string) => services.find((s) => s.slug === slug)!;