import {
  ProfileConfig,
  Project,
  ProductItem,
  BusinessVenture,
  VentureInitiativeItem,
  StudioAgencyItem,
  SystemContributionItem,
  DesignGalleryItem,
  SelectedWorkItem,
  ServiceCategory,
  ServicePackage,
  FlexibleEngagementModel,
  ToolItem,
  ExperienceEntry,
  InitiativeItem,
  LeadershipClubItem,
  Philosophy,
  Article,
} from './types';

export const PROFILE_CONFIG: ProfileConfig = {
  fullName: 'ISHIMWE AMANI SAMUEL',
  shortName: 'Amani Samuel',
  brandTitle: 'Product Designer & Software Engineer',
  personalIdentity: 'The Builder',
  motto: 'Build with purpose. Live with discipline. Serve with humility.',
  philosophyHeadline: 'Building digital systems with intentionality.',
  location: {
    city: 'Kigali',
    country: 'Rwanda',
    timezone: 'CAT (UTC+2)',
  },
  availability: {
    isAvailable: true,
    statusText: 'Available for Select Projects',
    detailText: 'Open for product design, full-stack builds, and advisory.',
    responseWindow: 'Replies within 24h',
  },
  hero: {
    eyebrow: 'PRODUCT DESIGNER · SOFTWARE ENGINEER · BUILDER',
    mainHeadline: 'Designing digital products with intentionality.',
    supportingHeadline: 'Turning complex ideas into clear experiences and functional software.',
    description:
      'Bridging design thinking and software engineering for startups, founders, and organizations.',
    primaryCta: 'Explore Work',
    secondaryCta: 'Book a Call',
  },
  portraitUrl: '/about_profile_photo_placeholder.png',
  contact: {
    email: 'amani.samuel10@gmail.com',
    bookingUrl: 'https://cal.com/ishimwe-amani-samuel-odxmcv/15min?user=ishimwe-amani-samuel-odxmcv&overlayCalendar=true',
    websiteUrl: 'https://www.amanisamuel.online/',
  },
  socials: [
    {
      name: 'LinkedIn',
      label: 'Connect on LinkedIn',
      url: 'https://www.linkedin.com/in/amani-ishimwe-409825331/',
      handle: 'amani-ishimwe',
      verified: true,
    },
    {
      name: 'GitHub',
      label: 'Inspect Code on GitHub',
      url: 'https://github.com/Amani-Ishimwe',
      handle: '@Amani-Ishimwe',
      verified: true,
    },
    {
      name: 'Peerlist',
      label: 'View Peerlist Profile',
      url: 'https://peerlist.io/amaniishimwe36',
      handle: '@amaniishimwe36',
      verified: true,
    },
    {
      name: 'X',
      label: 'Follow on X (formerly Twitter)',
      url: 'https://x.com/AmaniIshimwe',
      handle: '@AmaniIshimwe',
      verified: true,
    },
    {
      name: 'Email',
      label: 'Send Direct Email',
      url: 'mailto:amani.samuel10@gmail.com',
      handle: 'amani.samuel10@gmail.com',
      verified: true,
    },
  ],
  missingInfoChecklist: [
    {
      item: 'Verified X / Twitter Profile URL',
      configLocation: 'src/constants.tsx -> PROFILE_CONFIG.socials',
      status: 'Awaiting Verification',
    },
  ],
};

/**
 * Centralized call-booking destination used by every "Discover More" and "Book a Call" CTA across the portfolio.
 * Change this single URL to update all booking buttons site-wide.
 */
export const BOOKING_URL: string = PROFILE_CONFIG.contact.bookingUrl;

export const CURRENCY_CONFIG = {
  default: 'USD' as const,
  rates: {
    USD: { symbol: '$', rate: 1, label: 'USD ($)' },
    EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
    RWF: { symbol: 'RWF ', rate: 1380, label: 'RWF' },
  },
};

export const CREDIBILITY_HIGHLIGHTS = [
  {
    id: 'discipline',
    label: '01 · Discipline',
    title: 'Design + Engineering',
    description: 'UI/UX design and full-stack software built as one unified system.',
  },
  {
    id: 'products',
    label: '02 · Products',
    title: 'SaaS & Platforms',
    description: 'Building Backlos AI, Leads, Sage, and PASSE.',
  },
  {
    id: 'clarity',
    label: '03 · Standards',
    title: 'Clean Architecture',
    description: 'Structured codebases, clear APIs, and thorough documentation.',
  },
  {
    id: 'community',
    label: '04 · Base',
    title: 'Kigali, Rwanda',
    description: 'Rwanda Coding Academy scholar & product builder.',
  },
];

export const PHILOSOPHIES: Philosophy[] = [
  {
    id: 'ownership',
    number: '01',
    title: 'Ownership',
    shortSummary: 'Owning problems from concept to production.',
    description: 'Full responsibility for outcomes, not just isolated tasks.',
    practicalApplication: 'End-to-end product accountability.',
  },
  {
    id: 'clarity',
    number: '02',
    title: 'Clarity',
    shortSummary: 'Structured systems and clear documentation.',
    description: 'Well-documented architecture ensures teams move fast without confusion.',
    practicalApplication: 'Clean UI hierarchy & developer wikis.',
  },
  {
    id: 'hybridity',
    number: '03',
    title: 'Hybridity',
    shortSummary: 'Aesthetic precision meets technical rigor.',
    description: 'Designing interfaces with real database and engineering constraints in mind.',
    practicalApplication: 'Zero design-to-dev friction.',
  },
  {
    id: 'standards',
    number: '04',
    title: 'Standards',
    shortSummary: 'Clean code, testing, and continuous refinement.',
    description: 'Disciplined execution that keeps software reliable as it scales.',
    practicalApplication: 'Reusable components & strict typing.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'acc-website',
    aliases: ['acc-website'],
    title: 'Africa CyberSecurity Consortium Redesign',
    category: 'Web Platform · Product Design',
    filterCategories: ['Product Design', 'UI/UX Design', 'Full-Stack Development'],
    year: '2025',
    role: 'Product Designer',
    ownershipNote: 'Client Engagement',
    status: 'Completed',
    imageUrl: '/ACC.png',
    schematicType: 'cybersecurity-grid',
    shortDescription:
      'Modernized the digital presence of a pan-African cybersecurity consortium for clarity and trust.',
    problem:
      'Outdated, inconsistent web presence made finding programs and resources difficult.',
    contribution:
      'Led UX architecture, visual redesign, frontend implementation, and technical wiki.',
    constraints: ['Multi-audience navigation', 'Brand guidelines'],
    technologies: ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'Django'],
    plainLanguageSystemSummary:
      'Restructured navigation and content so partners and researchers find resources effortlessly.',
    process: {
      design: 'Editorial typography and clear multi-level navigation.',
      development: 'React, TypeScript, Tailwind CSS, and Django with local-first sync.',
      documentation: 'Technical wiki reducing ongoing support overhead.',
    },
    outcome: '80% fewer support requests · 25% higher visitor engagement.',
    lesson:
      'Clear documentation is just as critical as visual design for long-term platform stability.',
    caseStudy: {
      overview:
        'Redesigned the Africa CyberSecurity Consortium platform to replace fragmented pages with a clear, authoritative digital hub.',
      background:
        'Pan-African partners and researchers needed a reliable portal for programs and publications.',
      targetUsers: [
        'Cybersecurity leaders & institutional partners',
        'Policy stakeholders & researchers',
      ],
      researchAndDiscovery:
        'Audited legacy navigation and identified high cognitive load from inconsistent layouts.',
      productStrategy:
        'Prioritize scannable hierarchy, fast navigation, and maintainable documentation.',
      designProcess:
        'Mapped information architecture, wireframes, and a high-contrast typographic system.',
      technicalImplementation:
        'Built with modular React + TypeScript + Tailwind components backed by Django.',
      architectureDecisions: [
        'Reusable page blocks for new initiatives.',
        'Embedded technical wiki for internal maintainers.',
      ],
      challenges: ['Organizing dense institutional content without clutter.'],
      solutions: ['Progressive disclosure and documented UI patterns.'],
      outcomes: '80% reduction in support inquiries and 25% engagement lift.',
      lessons: 'Well-structured code and documentation sustain great design.',
    },
  },
  {
    id: 'menya-bot redesign',
    aliases: ['menya-bot-redesign', 'menya-bot redesign'],
    title: 'Menya Bot Clarity Redesign',
    category: 'AI Platform · Design System',
    filterCategories: ['Product Design', 'UI/UX Design', 'Software Engineering'],
    year: '2026',
    role: 'Product Engineer',
    ownershipNote: 'Product Engineering',
    status: 'Completed',
    imageUrl: '/MENYA.png',
    schematicType: 'conversational-ai',
    shortDescription:
      'Unified design system and React Native component library for an AI chatbot platform.',
    problem:
      'Fragmented UI patterns confused users and slowed developer onboarding.',
    contribution:
      'Overhauled the design system, built a reusable React Native library, and wrote onboarding docs.',
    constraints: ['Conversational state clarity', 'Developer velocity'],
    technologies: ['Figma', 'React Native', 'TypeScript', 'Design Systems'],
    plainLanguageSystemSummary:
      'Created shared visual building blocks and developer guides so the AI app stays consistent.',
    process: {
      design: 'Standardized tokens, chat states, and typography in Figma.',
      development: 'Modular React Native component library with strict typing.',
      documentation: 'Step-by-step developer onboarding and component specs.',
    },
    outcome: 'Unified platform UX · 40% faster developer onboarding.',
    lesson:
      'Aligning Figma tokens directly with code components accelerates the entire team.',
    caseStudy: {
      overview:
        'Brought visual and architectural clarity to Menya Bot by unifying its interface system and mobile codebase.',
      targetUsers: ['Mobile AI chatbot users', 'Frontend & mobile engineers'],
      researchAndDiscovery:
        'Cataloged duplicated components and onboarding bottlenecks across the mobile repo.',
      productStrategy:
        'Mirror Figma design tokens directly into reusable React Native components.',
      designProcess:
        'Refined message states, spacing rules, and interactive feedback patterns.',
      technicalImplementation:
        'Engineered self-documenting React Native primitives with TypeScript.',
      architectureDecisions: [
        'Single source of truth for UI primitives.',
        'Onboarding guides paired with every core module.',
      ],
      challenges: ['Upgrading the UI system without slowing feature releases.'],
      solutions: ['Composable components and clear migration docs.'],
      outcomes: '40% reduction in new developer onboarding time.',
      lessons: 'A documented design system improves both UX and developer experience.',
    },
  },
  {
    id: 'backlos-ai',
    aliases: ['backlos'],
    title: 'Backlos AI',
    category: 'B2B SaaS · Feedback Infrastructure',
    filterCategories: ['Product Design', 'UI/UX Design', 'Software Engineering', 'Full-Stack Development', 'SaaS Products'],
    year: '2025–2026',
    role: 'Product Designer & Frontend Dev',
    ownershipNote: 'Co-Built Product',
    status: 'In Development',
    schematicType: 'feedback-pipeline',
    shortDescription:
      'Intelligent feedback infrastructure helping organizations deliver structured feedback to applicants.',
    problem:
      'Organizations reviewing high application volumes struggle to give structured candidate feedback.',
    contribution:
      'Leading product design in Figma and Next.js frontend engineering with NestJS & PostgreSQL.',
    constraints: ['Rubric standardization', 'Multi-tenant scalability'],
    technologies: ['Figma', 'Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'REST APIs'],
    plainLanguageSystemSummary:
      'Turns reviewer scores into clear, constructive applicant feedback reports automatically.',
    process: {
      design: 'Rubric builders, review pipelines, and clean SaaS dashboards.',
      development: 'Next.js frontend integrated with NestJS, Prisma, and PostgreSQL.',
      documentation: 'API contracts and component specifications.',
    },
    outcome: 'In active development — core rubric & feedback workflows built.',
    lesson:
      'AI feedback works best when anchored in structured human evaluation criteria.',
    caseStudy: {
      overview:
        'Backlos AI enables fellowships, accelerators, and hiring teams to deliver structured, meaningful feedback at scale.',
      targetUsers: ['Program managers & talent teams', 'Application reviewers'],
      productStrategy:
        'Capture structured rubric signals during review and synthesize actionable candidate reports.',
      designProcess:
        'Designed end-to-end rubric creation, scoring, and delivery workspaces in Figma.',
      technicalImplementation:
        'Next.js frontend communicating via REST APIs with NestJS, Prisma, and PostgreSQL.',
      architectureDecisions: [
        'Relational schema separating rubrics, evaluations, and feedback states.',
        'Fast split-view review ergonomics.',
      ],
      lessons: 'Clean frontend data capture makes the entire backend pipeline reliable.',
    },
  },
  {
    id: 'leads',
    aliases: ['leads-platform'],
    title: 'Leads',
    category: 'B2B SaaS · Lead Management',
    filterCategories: ['Product Design', 'Full-Stack Development', 'Software Engineering', 'SaaS Products'],
    year: '2025–2026',
    role: 'Product Designer & Full-Stack Dev',
    ownershipNote: 'Engineered & Designed',
    status: 'In Development',
    schematicType: 'lead-recovery',
    shortDescription:
      'Lead management and revenue recovery platform for service businesses to track inquiries and follow-ups.',
    problem:
      'Service businesses lose revenue when inquiries scatter across channels and follow-ups are missed.',
    contribution:
      'Designed the pipeline UX and engineered the full-stack app with Laravel, Vue.js, Inertia, and PostgreSQL.',
    constraints: ['Zero-bloat CRM workflow', 'Fast daily follow-up tracking'],
    technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'PostgreSQL'],
    plainLanguageSystemSummary:
      'Organizes every customer inquiry and follow-up reminder in one fast workspace so no deal is lost.',
    process: {
      design: 'High-visibility pipeline stages and rapid inquiry intake.',
      development: 'Full-stack monolith with Laravel, Inertia.js, Vue.js, and PostgreSQL.',
      documentation: 'Database schema and pipeline state documentation.',
    },
    outcome: 'In active development — pipeline and follow-up modules engineered.',
    lesson:
      'Service teams need fast visibility into today’s follow-ups, not bloated enterprise menus.',
    caseStudy: {
      overview:
        'Leads helps service businesses capture inquiries, manage sales stages, and recover missed revenue through disciplined follow-ups.',
      targetUsers: ['Service businesses & agencies', 'Sales & operations teams'],
      productStrategy:
        'Focus on response speed and follow-up clarity over complex CRM bloat.',
      technicalImplementation:
        'Built with Laravel, Vue.js, Inertia.js, Tailwind CSS, and PostgreSQL.',
      lessons: 'A unified stack lets you iterate directly on customer value.',
    },
  },
  {
    id: 'sage',
    aliases: ['sage-platform'],
    title: 'Sage',
    category: 'Community SaaS · Governance',
    filterCategories: ['Product Design', 'UI/UX Design', 'SaaS Products', 'Experiments and Concepts'],
    year: '2025',
    role: 'Product & Systems Designer',
    ownershipNote: 'Product Design',
    status: 'In Development',
    schematicType: 'community-consensus',
    shortDescription:
      'Structured community platform for proposing ideas, deliberating, voting, and archiving decisions.',
    problem:
      'Valuable community ideas get lost in noisy chat streams without clear consensus or archives.',
    contribution:
      'Designed the 4-step decision lifecycle (Propose → Discuss → Vote → Archive) and UI system.',
    constraints: ['High signal-to-noise ratio', 'Searchable decision memory'],
    technologies: ['Figma', 'Product Strategy', 'UI/UX Design', 'System Modeling'],
    plainLanguageSystemSummary:
      'Replaces chaotic group chats with a step-by-step workspace to propose, vote on, and archive decisions.',
    process: {
      design: 'Four-stage proposal state machine and clean reading layouts.',
      development: 'Interactive UX prototypes and data model specs.',
      documentation: 'Governance workflow and permission rules.',
    },
    outcome: 'Product architecture & interactive design specifications in development.',
    lesson:
      'Thoughtful interface constraints help communities reach clearer decisions.',
    caseStudy: {
      overview:
        'Sage gives communities and clubs a structured workflow to move from raw ideas to permanent, searchable decisions.',
      targetUsers: ['Student clubs & organizations', 'Distributed product teams'],
      productStrategy:
        'Separate ideation, debate, voting, and archiving into distinct interface states.',
      lessons: 'Good community software creates institutional memory, not just more messages.',
    },
  },
  {
    id: 'passe',
    aliases: ['passe-security'],
    title: 'PASSE',
    category: 'AI / Access Control / Security',
    filterCategories: ['Product Design', 'UI/UX Design', 'Experiments and Concepts'],
    year: '2025',
    role: 'Product & UI/UX Designer',
    ownershipNote: 'Venture Initiative',
    status: 'In Development',
    schematicType: 'access-control',
    shortDescription:
      'An AI-powered smart access and security management platform designed to modernize visitor management, identity verification, vehicle access control, and institutional security.',
    problem:
      'Paper visitor logs and disconnected badges slow down building entry and weaken institutional security.',
    contribution:
      'Designed operator consoles, fast OCR/RFID verification flows, vehicle access control, and live audit dashboards.',
    constraints: ['Sub-second gate ergonomics', 'High-contrast status visibility'],
    technologies: ['Figma', 'AI / OCR', 'RFID Systems', 'UI/UX Design', 'System Architecture'],
    plainLanguageSystemSummary:
      'Connects AI identity scanning, vehicle access, and smart credentials in one unified security platform.',
    process: {
      design: 'High-contrast operator screens and instant verification states.',
      development: 'Interactive hardware-to-software UX prototypes and access workflows.',
      documentation: 'Visitor check-in, vehicle gate, and security audit journey maps.',
    },
    outcome: 'Unified AI smart access & institutional security architecture.',
    lesson:
      'Physical check-in interfaces demand instant visual confirmation with zero clutter.',
    caseStudy: {
      overview:
        'PASSE modernizes institutional security by unifying visitor management, identity verification, and vehicle access control into one intelligent platform.',
      targetUsers: ['Campus & institutional security teams', 'Facility & gate operators'],
      productStrategy:
        'Combine AI-assisted OCR identity verification for visitors with seamless RFID and vehicle access for recurring members.',
      lessons: 'Software for physical gates must prioritize speed and unmistakable status cues.',
    },
  },
  {
    id: 'gurarwanda',
    aliases: ['gura-rwanda'],
    title: 'GuraRwanda',
    category: 'E-commerce / Digital Marketplace',
    filterCategories: ['Product Design', 'UI/UX Design', 'Full-Stack Development', 'SaaS Products'],
    year: '2025–2026',
    role: 'Founder · Product Designer & Engineer',
    ownershipNote: 'Founded Venture',
    status: 'In Development',
    schematicType: 'marketplace-rwanda',
    shortDescription:
      'A digital marketplace dedicated to Made in Rwanda products, connecting local producers, artisans, and businesses with customers locally and internationally.',
    problem:
      'Rwandan producers and artisans lack a unified, high-trust digital storefront to reach both domestic and international buyers.',
    contribution:
      'Leading product strategy, merchant & buyer UX in Figma, and full-stack marketplace architecture.',
    constraints: ['Multi-vendor inventory', 'Local & cross-border checkout clarity'],
    technologies: ['Figma', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    plainLanguageSystemSummary:
      'Gives local Rwandan makers and businesses a modern online marketplace to sell locally and globally.',
    process: {
      design: 'Editorial product discovery, artisan storefronts, and frictionless checkout flows.',
      development: 'Scalable multi-vendor catalog, order routing, and merchant dashboards.',
      documentation: 'Merchant onboarding guides and marketplace operations playbooks.',
    },
    outcome: 'End-to-end Made in Rwanda digital commerce architecture.',
    lesson:
      'Empowering local producers requires merchant tools that are as simple as the buyer experience.',
    caseStudy: {
      overview:
        'GuraRwanda is a digital marketplace built to showcase Made in Rwanda products and connect local producers, artisans, and businesses with customers locally and internationally.',
      targetUsers: ['Rwandan artisans, producers & SMEs', 'Local & international buyers'],
      productStrategy:
        'Elevate local craftsmanship through trustworthy storytelling, clean merchant tools, and reliable fulfillment tracking.',
      lessons: 'Marketplace trust is built through clear product provenance and effortless merchant onboarding.',
    },
  },
  {
    id: 'mwizerwa',
    aliases: ['mwizerwa-ai'],
    title: 'Mwizerwa',
    category: 'AI / Wellbeing Technology',
    filterCategories: ['Product Design', 'UI/UX Design', 'Software Engineering', 'SaaS Products'],
    year: '2025–2026',
    role: 'Founder · Product Designer & Engineer',
    ownershipNote: 'Founded Initiative',
    status: 'In Development',
    schematicType: 'wellbeing-ai',
    shortDescription:
      'An intelligent wellbeing companion designed to provide emotional support and help people navigate everyday challenges through practical problem-solving.',
    problem:
      'Many people facing daily emotional stress lack accessible, stigma-free support to process thoughts and take practical next steps.',
    contribution:
      'Designed the calm conversational UX, guided reflection flows, and AI companion architecture.',
    constraints: ['Empathetic, calm interface tone', 'Privacy-first interaction design'],
    technologies: ['Figma', 'React', 'TypeScript', 'AI / LLM Workflows', 'Product Strategy'],
    plainLanguageSystemSummary:
      'Provides a calm, private AI space for emotional support and structured everyday problem-solving.',
    process: {
      design: 'Distraction-free conversational workspace and guided reflection prompts.',
      development: 'Context-aware AI dialogue flows anchored in practical problem-solving.',
      documentation: 'Safety guardrails and empathetic conversation design principles.',
    },
    outcome: 'Human-centered AI wellbeing companion architecture.',
    lesson:
      'Wellbeing technology must feel calm, grounded, and respectful of human agency.',
    caseStudy: {
      overview:
        'Mwizerwa is an intelligent wellbeing companion designed to provide emotional support and help people navigate everyday challenges through practical problem-solving.',
      targetUsers: ['Individuals navigating daily stress & life decisions', 'Students & young professionals'],
      productStrategy:
        'Pair empathetic listening with structured, actionable problem-solving steps rather than endless chat loops.',
      lessons: 'Calm typography and unhurried pacing directly shape how safe a digital companion feels.',
    },
  },
  {
    id: 'sift',
    aliases: ['sift-ai'],
    title: 'Sift',
    category: 'AI Agent / Productivity',
    filterCategories: ['Product Design', 'Software Engineering', 'SaaS Products'],
    year: '2025–2026',
    role: 'Product Designer & Engineer',
    ownershipNote: 'Independent Product',
    status: 'In Development',
    schematicType: 'inbox-agent',
    shortDescription:
      'An AI-powered email assistant that helps clean up inboxes by identifying low-priority messages and organizing or archiving what no longer matters.',
    problem:
      'Important communications get buried under newsletters, automated alerts, and low-priority email noise.',
    contribution:
      'Designed the priority triage UX and engineered the automated inbox classification workflows.',
    constraints: ['Zero false-positive archiving', 'One-glance triage control'],
    technologies: ['TypeScript', 'Next.js', 'AI / LLM Agents', 'REST APIs'],
    plainLanguageSystemSummary:
      'Automatically separates high-priority emails from clutter so your inbox stays clean and focused.',
    process: {
      design: 'High-speed triage queues and transparent AI classification badges.',
      development: 'Automated email parsing, priority scoring, and batch archive rules.',
      documentation: 'Agent permission controls and user review rules.',
    },
    outcome: 'Intelligent inbox triage engine & focused productivity UI.',
    lesson:
      'AI productivity agents earn trust when every automated action is transparent and reversible.',
    caseStudy: {
      overview:
        'Sift is an AI-powered email assistant that cleans up cluttered inboxes by identifying low-priority messages and organizing or archiving what no longer matters.',
      targetUsers: ['Founders, executives & busy operators', 'High-volume email users'],
      productStrategy:
        'Surface only what requires human attention today while quietly organizing the rest.',
      lessons: 'Great automation reduces decisions instead of adding new settings panels.',
    },
  },
  {
    id: 'kiln',
    aliases: ['kiln-cms'],
    title: 'Kiln',
    category: 'Visual CMS / Developer Tools',
    filterCategories: ['Product Design', 'Full-Stack Development', 'Software Engineering', 'SaaS Products'],
    year: '2025–2026',
    role: 'Product Designer & Engineer',
    ownershipNote: 'Independent Product',
    status: 'In Development',
    schematicType: 'visual-cms',
    shortDescription:
      'A visual content management platform designed to make existing websites easier to manage, regardless of the technology stack used to build them.',
    problem:
      'Non-technical teams struggle to update copy and media on custom-coded websites without waiting on developers.',
    contribution:
      'Designed the visual DOM inspector, live inline editor, and stack-agnostic content adapter.',
    constraints: ['Stack-agnostic integration', 'Clean code output'],
    technologies: ['TypeScript', 'React', 'Node.js', 'Visual DOM Engine', 'REST APIs'],
    plainLanguageSystemSummary:
      'Lets teams visually click and edit content on any existing website without rewriting their codebase.',
    process: {
      design: 'Precision visual canvas, property inspector, and instant publish controls.',
      development: 'Lightweight SDK and visual content layer compatible with any web stack.',
      documentation: '5-minute developer integration and editor onboarding guides.',
    },
    outcome: 'Stack-agnostic visual CMS architecture & live editing studio.',
    lesson:
      'Developer tools succeed when they respect the existing codebase while empowering non-technical editors.',
    caseStudy: {
      overview:
        'Kiln is a visual content management platform designed to make existing websites easier to manage, regardless of the technology stack used to build them.',
      targetUsers: ['Engineering & marketing teams', 'Agencies managing client websites'],
      productStrategy:
        'Decouple visual content editing from the underlying frontend framework.',
      lessons: 'Bridging visual design tools and code repositories unlocks speed for the whole team.',
    },
  },
];

/**
 * SECTION 01 — Ventures & Initiatives
 * "Building things that move ideas into reality."
 */
export const VENTURES_INITIATIVES: VentureInitiativeItem[] = [
  {
    id: 'gurarwanda',
    number: '01',
    name: 'GuraRwanda',
    category: 'E-commerce / Digital Marketplace',
    tagline: 'Connecting Made in Rwanda producers with local and global markets.',
    description:
      'A digital marketplace dedicated to Made in Rwanda products, connecting local producers, artisans, and businesses with customers locally and internationally.',
    role: 'Founder · Product Design & Engineering',
    status: 'In Development',
    highlights: [
      'Dedicated storefront infrastructure for Rwandan producers, artisans, and brands.',
      'Unified local and international discovery, ordering, and fulfillment workflows.',
      'Designed to elevate Made in Rwanda craftsmanship to a global audience.',
    ],
    technologies: ['Product Strategy', 'UI/UX Design', 'Next.js', 'TypeScript', 'PostgreSQL'],
    schematicType: 'marketplace-rwanda',
    caseStudyPath: '/project/gurarwanda',
  },
  {
    id: 'mwizerwa',
    number: '02',
    name: 'Mwizerwa',
    category: 'AI / Wellbeing Technology',
    tagline: 'Empathetic emotional support and practical everyday problem-solving.',
    description:
      'An intelligent wellbeing companion designed to provide emotional support and help people navigate everyday challenges through practical problem-solving.',
    role: 'Founder · Product Design & AI Systems',
    status: 'In Development',
    highlights: [
      'Calm, human-centered conversational interface built for emotional clarity.',
      'Guided reflection workflows that turn overwhelming situations into actionable steps.',
      'Privacy-first architecture tailored for accessible everyday wellbeing.',
    ],
    technologies: ['Product Design', 'Conversational AI', 'React', 'TypeScript', 'System Design'],
    schematicType: 'wellbeing-ai',
    caseStudyPath: '/project/mwizerwa',
  },
  {
    id: 'passe',
    number: '03',
    name: 'PASSE',
    category: 'AI / Access Control / Security',
    tagline: 'Modernizing visitor management, identity verification, and institutional security.',
    description:
      'An AI-powered smart access and security management platform designed to modernize visitor management, identity verification, vehicle access control, and institutional security.',
    role: 'Founder · Product & Systems Architect',
    status: 'In Development',
    highlights: [
      'AI-powered OCR identity verification paired with instant RFID credential scanning.',
      'Unified operator console for visitor check-ins, vehicle access control, and gate logs.',
      'Real-time security audit trails built for campuses, enterprises, and institutions.',
    ],
    technologies: ['AI / OCR', 'RFID Integration', 'UI/UX Systems', 'Figma', 'Security Architecture'],
    schematicType: 'access-control',
    caseStudyPath: '/project/passe',
  },
];

/**
 * SECTION 02 — Products & Experiments
 * "Small ideas. Useful products. Real problems."
 */
export const PRODUCTS: ProductItem[] = [
  {
    id: 'backlos-ai',
    name: 'Backlos AI',
    monogram: 'BK',
    tagline: 'Structured applicant feedback engine for cohorts, hiring, and grants.',
    category: 'Feedback Infrastructure / SaaS',
    description:
      'A feedback engine that helps hackathon organizers, hiring teams, grant programs, and other application-based organizations provide structured, meaningful feedback to applicants.',
    problemSolved:
      'Eliminates silent rejections and manual writing bottlenecks for high-volume application programs.',
    intendedUsers: ['Hackathon organizers', 'Hiring & talent teams', 'Grant & fellowship programs'],
    myRole: 'Product Design & Frontend Dev',
    ownershipCategory: 'Products I Co-Built',
    ownershipClarification: 'Co-built — leading Figma UI/UX and Next.js frontend.',
    status: 'In Development',
    featuredSpan: 'half',
    mainFeatures: [
      { title: 'Evaluation Rubrics', description: 'Standardized scoring criteria for reviewers.' },
      { title: 'Feedback Synthesis', description: 'Automated, structured candidate feedback reports.' },
      { title: 'Cohort Workspaces', description: 'Unified dashboard for managing evaluators and applicants.' },
    ],
    technologyStack: [
      { name: 'Figma', practicalPurpose: 'UI/UX design & rubric workflows.' },
      { name: 'Next.js', practicalPurpose: 'Fast, responsive web dashboard.' },
      { name: 'NestJS & REST APIs', practicalPurpose: 'Modular backend logic & API layer.' },
      { name: 'Prisma & PostgreSQL', practicalPurpose: 'Reliable relational data storage.' },
    ],
    plainLanguageArchitecture:
      'Connects the review dashboard to a structured database so teams evaluate and send feedback effortlessly.',
    schematicType: 'feedback-pipeline',
    caseStudyPath: '/project/backlos-ai',
  },
  {
    id: 'leads',
    name: 'Leads',
    monogram: 'LD',
    tagline: 'Inquiry organization, sales pipeline tracking, and follow-up discipline.',
    category: 'CRM / Business SaaS',
    description:
      'A platform that helps service businesses organize customer inquiries, track sales pipelines, manage follow-ups, and prevent potential opportunities from being forgotten.',
    problemSolved:
      'Prevents lost revenue from forgotten inquiries across scattered messages and spreadsheets.',
    intendedUsers: ['Service businesses', 'Consulting agencies', 'Sales operators'],
    myRole: 'Product Designer & Full-Stack Dev',
    ownershipCategory: 'Products I Engineered',
    ownershipClarification: 'Designed the UX and engineered the full-stack platform.',
    status: 'In Development',
    featuredSpan: 'half',
    mainFeatures: [
      { title: 'Inquiry Capture', description: 'Centralized log for every inbound prospect.' },
      { title: 'Visual Pipeline', description: 'Clear stages from first contact to closed deal.' },
      { title: 'Follow-Up Queue', description: 'Highlights overdue conversations automatically.' },
    ],
    technologyStack: [
      { name: 'Laravel', practicalPurpose: 'Backend rules, auth & pipeline logic.' },
      { name: 'Vue.js & Inertia.js', practicalPurpose: 'Reactive single-page interface.' },
      { name: 'Tailwind CSS', practicalPurpose: 'Clean, fast operational UI.' },
      { name: 'PostgreSQL', practicalPurpose: 'Relational storage for leads & history.' },
    ],
    plainLanguageArchitecture:
      'Unified full-stack app where pipeline updates happen instantly without slow page reloads.',
    schematicType: 'lead-recovery',
    caseStudyPath: '/project/leads',
  },
  {
    id: 'sage',
    name: 'Sage',
    monogram: 'SG',
    tagline: 'Structured topic proposals, voting, and searchable conversation archives.',
    category: 'Community / Collaboration SaaS',
    description:
      'A structured discussion platform where people can propose topics, vote, discuss ideas, and easily revisit important conversations instead of losing them in endless chat messages.',
    problemSolved:
      'Stops important proposals and decisions from disappearing inside noisy chat streams.',
    intendedUsers: ['Communities & organizations', 'Engineering & product teams'],
    myRole: 'Product & UI/UX Designer',
    ownershipCategory: 'Products I Designed',
    ownershipClarification: 'Product concept, state architecture & UI/UX design.',
    status: 'In Development',
    featuredSpan: 'third',
    mainFeatures: [
      { title: '4-Step Lifecycle', description: 'Propose → Discuss → Vote → Archive.' },
      { title: 'Focused Threads', description: 'Structured pros, cons, and context.' },
      { title: 'Decision Registry', description: 'Searchable archive of past outcomes.' },
    ],
    technologyStack: [
      { name: 'Figma', practicalPurpose: 'State modeling & interactive prototypes.' },
      { name: 'System Architecture', practicalPurpose: 'Proposal lifecycle & permission rules.' },
    ],
    plainLanguageArchitecture:
      'Separates brainstorming from final voting so groups make and remember decisions clearly.',
    schematicType: 'community-consensus',
    caseStudyPath: '/project/sage',
  },
  {
    id: 'sift',
    name: 'Sift',
    monogram: 'SF',
    tagline: 'Intelligent inbox cleanup and automated low-priority email archiving.',
    category: 'AI Agent / Productivity',
    description:
      'An AI-powered email assistant that helps clean up inboxes by identifying low-priority messages and organizing or archiving what no longer matters.',
    problemSolved:
      'Reclaims focus by automatically filtering out inbox noise and surfacing only messages that matter.',
    intendedUsers: ['Founders & operators', 'Busy professionals'],
    myRole: 'Product Designer & Engineer',
    ownershipCategory: 'Products I Founded',
    ownershipClarification: 'Designed the triage UX and AI agent workflow.',
    status: 'In Development',
    featuredSpan: 'third',
    mainFeatures: [
      { title: 'Smart Priority Detection', description: 'Identifies low-value noise vs. urgent threads.' },
      { title: 'Auto-Archive Rules', description: 'Quietly organizes clutter without losing history.' },
      { title: 'Daily Digest Control', description: 'One-glance review of archived items.' },
    ],
    technologyStack: [
      { name: 'TypeScript', practicalPurpose: 'Type-safe agent rules & UI.' },
      { name: 'Next.js', practicalPurpose: 'Fast triage dashboard.' },
      { name: 'AI / LLM Agents', practicalPurpose: 'Context-aware email classification.' },
    ],
    plainLanguageArchitecture:
      'Analyzes incoming email patterns to archive clutter while keeping urgent messages front and center.',
    schematicType: 'inbox-agent',
    caseStudyPath: '/project/sift',
  },
  {
    id: 'kiln',
    name: 'Kiln',
    monogram: 'KL',
    tagline: 'Stack-agnostic visual content management for any existing website.',
    category: 'Visual CMS / Developer Tools',
    description:
      'A visual content management platform designed to make existing websites easier to manage, regardless of the technology stack used to build them.',
    problemSolved:
      'Lets teams visually update website content without rewriting code or locked-in CMS templates.',
    intendedUsers: ['Developers & agencies', 'Marketing & content teams'],
    myRole: 'Product Designer & Engineer',
    ownershipCategory: 'Products I Founded',
    ownershipClarification: 'Designed the visual editor and stack-agnostic bridge.',
    status: 'In Development',
    featuredSpan: 'third',
    mainFeatures: [
      { title: 'Visual DOM Inspector', description: 'Click any element on an existing site to edit.' },
      { title: 'Stack-Agnostic Bridge', description: 'Works across React, Vue, Laravel, or static sites.' },
      { title: 'Instant Publishing', description: 'Push verified content updates safely to production.' },
    ],
    technologyStack: [
      { name: 'TypeScript', practicalPurpose: 'Visual editor SDK & bridge.' },
      { name: 'React', practicalPurpose: 'Interactive studio canvas.' },
      { name: 'REST APIs', practicalPurpose: 'Content sync across any stack.' },
    ],
    plainLanguageArchitecture:
      'Connects a visual point-and-click editor to any existing website without changing how it was built.',
    schematicType: 'visual-cms',
    caseStudyPath: '/project/kiln',
  },
];

/**
 * SECTION 03 — Studios & Agencies
 * "Building teams and creating opportunities."
 */
export const STUDIOS_AGENCIES: StudioAgencyItem[] = [
  {
    id: 'lintel',
    number: '01',
    name: 'Lintel',
    monogram: 'LN',
    category: 'Product Development Studio',
    tagline: 'Designing and developing MVPs, SaaS platforms, and software solutions.',
    description:
      'A digital product studio focused on designing and developing MVPs, SaaS platforms, and software solutions that help ideas become real products.',
    role: 'Founder & Product Lead',
    focusAreas: ['MVP Design & Engineering', 'B2B & B2C SaaS Platforms', 'Product Strategy & Roadmapping'],
    capabilities: ['Product Discovery', 'UI/UX Systems', 'Full-Stack Engineering', 'Launch Execution'],
    schematicType: 'studio-lintel',
  },
  {
    id: 'rapix',
    number: '02',
    name: 'Rapix',
    monogram: 'RX',
    category: 'Software Development Agency',
    tagline: 'Transforming business opportunities into functional digital solutions.',
    description:
      'An agency focused on building MVPs and SaaS products, helping businesses transform opportunities into functional digital solutions.',
    role: 'Founder & Lead Engineer',
    focusAreas: ['Rapid MVP Delivery', 'Custom SaaS Development', 'API & Backend Architecture'],
    capabilities: ['Web & Mobile Apps', 'Cloud & Database Systems', 'Third-Party Integrations', 'Iterative Delivery'],
    schematicType: 'studio-rapix',
  },
  {
    id: 'wattfor',
    number: '03',
    name: 'Wattfor',
    monogram: 'WF',
    category: 'Industry-focused Digital Solutions',
    tagline: 'Tailored websites and specialized digital products for distinct industries.',
    description:
      'A digital studio that creates websites for different industries and develops specialized digital products tailored to the needs of businesses in those fields.',
    role: 'Founder & Creative Director',
    focusAreas: ['Industry-Specific Websites', 'Bespoke Business Platforms', 'Conversion & Brand Systems'],
    capabilities: ['Sector Research', 'Custom Web Design', 'Responsive Engineering', 'CMS & Operations Tools'],
    schematicType: 'studio-wattfor',
  },
];

/**
 * SECTION 04 — Selected Work & Design Gallery (Unified, Single Section)
 * "Work built through collaboration, craft, and systems."
 * Curated production platforms, design systems, and interface explorations with zero duplication.
 */
export const SELECTED_WORK_ITEMS: SelectedWorkItem[] = [
  {
    id: 'acc-website',
    title: 'Africa CyberSecurity Consortium — Institutional Platform',
    category: 'Client Systems',
    secondaryCategory: 'Website Design',
    organization: 'Africa CyberSecurity Consortium (ACC)',
    year: '2025',
    roleOrContribution: 'Product Designer & Frontend Architect — Led UX architecture, brand portal, and high-performance frontend.',
    description:
      'Engineered an authoritative digital platform for a pan-African cybersecurity consortium, establishing high-trust program directories and security event repositories.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'System Architecture'],
    imageUrl: '/ACC.png',
    schematicType: 'cybersecurity-grid',
    caseStudyPath: '/project/acc-website',
    externalUrl: 'https://cybersecurityconsortium.africa',
    accessLevel: 'Public Case Study',
  },
  {
    id: 'menya-bot-redesign',
    title: 'Menya Bot — Conversational AI & Token System',
    category: 'Design Systems',
    secondaryCategory: 'UI/UX Design',
    organization: 'Menya Bot Platform',
    year: '2026',
    roleOrContribution: 'Product Engineer — Standardized component tokens, mobile interaction primitives, and developer onboarding.',
    description:
      'Transformed a complex, multi-agent AI chatbot interface into a modular component library with cross-platform React Native primitives and clear token hierarchy.',
    technologies: ['Figma', 'React Native', 'TypeScript', 'Design Systems', 'Developer Experience'],
    imageUrl: '/MENYA.png',
    schematicType: 'conversational-ai',
    caseStudyPath: '/project/menya-bot%20redesign',
    accessLevel: 'Public Case Study',
  },
  {
    id: 'apex-capital-fintech',
    title: 'Apex Capital — Institutional Fintech Dashboard',
    category: 'UI/UX Design',
    organization: 'Fintech Exploration',
    year: '2026',
    roleOrContribution: 'Lead Product Designer — Designed high-density financial data tables, risk matrices, and order routing flows.',
    description:
      'A precision trading and treasury terminal designed for institutional liquidity managers, balancing maximum information density with zero cognitive strain.',
    technologies: ['Figma', 'Fintech UX', 'Design Tokens', 'Information Architecture'],
    schematicType: 'gallery-fintech',
  },
  {
    id: 'kigali-chronicle-editorial',
    title: 'Kigali Chronicle — Minimalist Editorial & Archive',
    category: 'Website Design',
    organization: 'Publishing & Culture',
    year: '2026',
    roleOrContribution: 'Creative Director & Designer — Created typographic scale, reading surfaces, and accessible archives.',
    description:
      'A typography-first cultural and technology publication exploring Rwanda’s creative economy through distraction-free reading environments.',
    technologies: ['Figma', 'Typography Systems', 'Editorial Layout', 'Responsive Web'],
    schematicType: 'gallery-editorial',
  },
  {
    id: 'vanguard-os-command',
    title: 'Vanguard OS — Developer Command Palette & Console',
    category: 'Interface Concepts',
    organization: 'Developer Tools',
    year: '2026',
    roleOrContribution: 'Interface Designer & Prototyper — Engineered keyboard-first navigation patterns and workspace triggers.',
    description:
      'A sub-millisecond keyboard launcher for engineering teams featuring fuzzy command routing, contextual shortcut triggers, and deployment controls.',
    technologies: ['Figma', 'Developer Experience', 'Keyboard-First UX', 'Interaction Design'],
    schematicType: 'gallery-command',
  },
  {
    id: 'soma-studio-edtech',
    title: 'Soma Studio — Adaptive Learning & Assessment Interface',
    category: 'UI/UX Design',
    secondaryCategory: 'Interface Concepts',
    organization: 'EdTech Platform',
    year: '2026',
    roleOrContribution: 'Product Designer — Designed interactive code sandbox, quiz creator, and student progress telemetry.',
    description:
      'An interactive learning interface combining split-view code exercises, real-time feedback loops, and curriculum progress tracking.',
    technologies: ['Figma', 'EdTech UX', 'Interactive Prototyping', 'Design Systems'],
    schematicType: 'community-consensus',
  },
];

/**
 * Backward compatibility exports
 */
export const SYSTEMS_CONTRIBUTIONS: SystemContributionItem[] = [
  {
    id: 'acc-website',
    name: 'Africa CyberSecurity Consortium Website Redesign',
    organization: 'Africa CyberSecurity Consortium (ACC)',
    category: 'Institutional Web Platform · Cybersecurity',
    year: '2025',
    myContribution: 'Product Designer — Led UX architecture, interface redesign, frontend implementation, and technical wiki.',
    description:
      'Modernized an outdated and inconsistent online presence for a pan-African cybersecurity organization into a clear, authoritative digital hub.',
    technologies: ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'Django', 'Technical Documentation'],
    outcome: '80% reduction in support requests · 25% increase in visitor engagement.',
    imageUrl: '/ACC.png',
    schematicType: 'cybersecurity-grid',
    caseStudyPath: '/project/acc-website',
    accessLevel: 'Public Case Study',
  },
  {
    id: 'menya-bot redesign',
    name: 'Menya Bot Clarity Redesign',
    organization: 'Menya Bot Platform',
    category: 'AI Chatbot Platform · Design System',
    year: '2026',
    myContribution: 'Product Engineer — Overhauled the design system, engineered reusable React Native components, and wrote onboarding guides.',
    description:
      'Transformed a complex, fragmented AI chatbot interface into a systematic component library with comprehensive developer onboarding documentation.',
    technologies: ['Figma', 'React Native', 'TypeScript', 'Design Systems', 'Developer Experience'],
    outcome: '40% reduction in new developer onboarding time.',
    imageUrl: '/MENYA.png',
    schematicType: 'conversational-ai',
    caseStudyPath: '/project/menya-bot%20redesign',
    accessLevel: 'Public Case Study',
  },
];

export const DESIGN_GALLERY: DesignGalleryItem[] = [
  {
    id: 'gallery-apex-fintech',
    title: 'Apex Capital — Institutional Fintech Dashboard',
    category: 'UI/UX Design',
    subtitle: 'Fintech Treasury & Trading Terminal',
    description: 'High-density portfolio risk matrices, liquidity telemetry, and institutional order execution routing.',
    aspectRatio: 'wide',
    colSpan: 'large',
    tools: ['Figma', 'Fintech UX', 'Design Tokens'],
    year: '2026',
    schematicType: 'gallery-fintech',
  },
  {
    id: 'gallery-kigali-chronicle',
    title: 'Kigali Chronicle — Minimalist Editorial & Archive',
    category: 'Website Design',
    subtitle: 'Typography-Led Publishing Surface',
    description: 'Clean typography-led reading surfaces, responsive type scale, and accessible article archives.',
    aspectRatio: 'standard',
    colSpan: 'medium',
    tools: ['Figma', 'Typography Systems', 'Editorial Layout'],
    year: '2026',
    schematicType: 'gallery-editorial',
  },
  {
    id: 'gallery-vanguard-command',
    title: 'Vanguard OS — Developer Command Palette & Console',
    category: 'Interface Concepts',
    subtitle: 'Keyboard-First Developer Console',
    description: 'Fuzzy command routing, contextual shortcut triggers, and sub-millisecond workspace actions.',
    aspectRatio: 'standard',
    colSpan: 'medium',
    tools: ['Figma', 'Developer Experience', 'Interaction Design'],
    year: '2026',
    schematicType: 'gallery-command',
  },
  {
    id: 'gallery-soma-studio',
    title: 'Soma Studio — Adaptive Learning & Assessment Interface',
    category: 'UI/UX Design',
    subtitle: 'Interactive Education Experience',
    description: 'Interactive code sandboxes, quiz creators, and real-time student mastery telemetry.',
    aspectRatio: 'standard',
    colSpan: 'medium',
    tools: ['Figma', 'EdTech UX', 'Prototyping'],
    year: '2026',
    schematicType: 'community-consensus',
  },
];

export const BUSINESS_VENTURES: BusinessVenture[] = [
  {
    id: 'amani-product-engineering-practice',
    name: 'Amani Samuel — Product Design & Engineering Studio',
    monogram: 'AS',
    industry: 'Digital Product Consulting · UI/UX · Full-Stack Dev',
    description:
      'Independent consulting practice in Kigali partnering with founders and organizations from concept to production.',
    mission:
      'Bridge product design and software engineering without agency handoff friction.',
    problemAddressed:
      'Eliminates misalignment between separate freelance designers and developers.',
    targetMarket: 'Startups, founders, and institutions in Rwanda and globally.',
    positionAndResponsibilities: 'Principal Product Designer & Software Engineer',
    contributions: [
      'End-to-end delivery across discovery, UI/UX, full-stack code, and documentation.',
      'Redesigned Africa CyberSecurity Consortium and Menya Bot platforms.',
    ],
    currentStage: 'Active Practice',
    websiteUrl: 'https://www.amanisamuel.online/',
    relatedLinkLabel: 'View Services',
    relatedLinkPath: '/services',
  },
  {
    id: 'saas-product-ventures',
    name: 'B2B SaaS Venture Incubation (Backlos AI & Leads)',
    monogram: 'BV',
    industry: 'B2B SaaS · Workflow & Revenue Infrastructure',
    description:
      'Software ventures solving applicant feedback (Backlos AI) and service lead recovery (Leads).',
    mission:
      'Build focused software platforms that solve measurable operational bottlenecks.',
    problemAddressed:
      'Helps organizations communicate with applicants and recover missed client revenue.',
    targetMarket: 'High-volume cohort programs and service businesses.',
    positionAndResponsibilities: 'Co-Builder, Product Designer & Engineer',
    contributions: [
      'Architecting UI systems in Figma and full-stack apps in Next.js, NestJS, Laravel, and PostgreSQL.',
    ],
    currentStage: 'Venture Incubation',
    relatedLinkLabel: 'View Products',
    relatedLinkPath: '/products',
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'product-strategy-discovery',
    number: '01',
    title: 'Product Strategy & Discovery',
    shortSummary: 'Validate ideas, map user flows, and define MVP scope before coding.',
    plainEnglishValue:
      'We define exactly what to build, who it serves, and how it works before you spend money on code.',
    whatItMeans:
      'Structured product discovery, user research, wireframing, and technical feasibility planning.',
    problemsSolved: [
      'Unclear MVP scope and feature creep.',
      'Costly mid-project rewrites from missing specs.',
    ],
    whoNeedsIt: ['Founders with a new idea', 'Teams planning a new digital product'],
    subServices: [
      'Product discovery',
      'Idea validation',
      'Product requirement definition',
      'User research',
      'Competitor analysis',
      'Product strategy',
      'MVP planning',
      'User journey mapping',
      'Technical feasibility assessment',
      'Product roadmapping',
    ],
    deliverables: [
      'Product Requirements Document (PRD)',
      'User Journey & Flow Maps',
      'Structural Wireframes',
      'Prioritized MVP Roadmap',
    ],
    engagementProcess: [
      { step: '01', title: 'Align', description: 'Unpack goals, users, and constraints.' },
      { step: '02', title: 'Map', description: 'Define journeys and core architecture.' },
      { step: '03', title: 'Specify', description: 'Deliver wireframes and build roadmap.' },
    ],
    estimatedTimeline: '1 – 2 Weeks',
    startingPriceNote: 'From $400 (Foundation)',
    relatedProjectIds: ['backlos-ai', 'sage', 'passe'],
  },
  {
    id: 'ui-ux-product-design',
    number: '02',
    title: 'UI/UX & Product Design',
    shortSummary: 'Intuitive interfaces, interactive prototypes, and scalable Figma design systems.',
    plainEnglishValue:
      'I design clear, modern screens and reusable components your users love and developers can build easily.',
    whatItMeans:
      'End-to-end interface design combining aesthetic craft with real engineering feasibility.',
    problemsSolved: [
      'Confusing user journeys and high drop-off.',
      'Inconsistent UI across web or mobile screens.',
    ],
    whoNeedsIt: ['Startups designing web/mobile apps', 'Teams needing a design system'],
    subServices: [
      'User interface design',
      'User experience design',
      'Website design',
      'Mobile application design',
      'SaaS dashboard design',
      'Design systems',
      'Wireframing',
      'Interactive prototyping',
      'Usability improvements',
      'Design audits',
      'Developer handoff',
    ],
    deliverables: [
      'High-Fidelity Figma UI',
      'Interactive Prototypes',
      'Component Library & Tokens',
      'Developer Handoff Specs',
    ],
    engagementProcess: [
      { step: '01', title: 'Wireframe', description: 'Lock in information hierarchy.' },
      { step: '02', title: 'Systemize', description: 'Create tokens and UI components.' },
      { step: '03', title: 'Prototype', description: 'Deliver interactive screens & handoff.' },
    ],
    estimatedTimeline: '2 – 4 Weeks',
    startingPriceNote: 'From $1,000 (Experience)',
    relatedProjectIds: ['acc-website', 'menya-bot redesign', 'backlos-ai', 'passe'],
  },
  {
    id: 'website-design-development',
    number: '03',
    title: 'Website Design & Development',
    shortSummary: 'Fast, responsive websites for startups, businesses, and institutions.',
    plainEnglishValue:
      'Custom websites that explain your value clearly and work seamlessly on every phone and desktop.',
    whatItMeans:
      'Bespoke design, responsive frontend engineering, and technical SEO ready for launch.',
    problemsSolved: [
      'Outdated sites that hurt brand trust.',
      'Poor mobile responsiveness and slow load times.',
    ],
    whoNeedsIt: ['Businesses & institutions', 'Startups launching marketing sites'],
    subServices: [
      'Business websites',
      'Personal portfolio websites',
      'Corporate websites',
      'Landing pages',
      'Startup websites',
      'CMS-powered websites',
      'Website redesign',
      'Responsive development',
      'Website optimization',
    ],
    deliverables: [
      'Custom Responsive Website',
      'Mobile & Speed Optimization',
      'SEO & Open Graph Setup',
      'Live Deployment',
    ],
    engagementProcess: [
      { step: '01', title: 'Structure', description: 'Architecture & messaging clarity.' },
      { step: '02', title: 'Design & Code', description: 'Responsive build & interactions.' },
      { step: '03', title: 'Launch', description: 'QA, SEO, and live deployment.' },
    ],
    estimatedTimeline: '2 – 4 Weeks',
    startingPriceNote: 'Custom Quote / Build Package',
    relatedProjectIds: ['acc-website'],
  },
  {
    id: 'software-engineering',
    number: '04',
    title: 'Software Engineering',
    shortSummary: 'Full-stack web apps, REST APIs, database design, and integrations.',
    plainEnglishValue:
      'I build reliable connections between user interfaces and databases so your software runs smoothly.',
    whatItMeans:
      'Production frontend and backend engineering using React, Next.js, Vue.js, NestJS, Laravel, and PostgreSQL.',
    problemsSolved: [
      'Completed designs waiting to be built into working software.',
      'Fragile backend data models and slow APIs.',
    ],
    whoNeedsIt: ['Founders building MVPs', 'Teams needing full-stack capacity'],
    subServices: [
      'Frontend development',
      'Backend development',
      'Full-stack application development',
      'REST API development',
      'Database design',
      'Authentication systems',
      'Third-party integrations',
      'SaaS development',
      'MVP development',
      'Application maintenance',
    ],
    deliverables: [
      'Clean Frontend & Backend Codebase',
      'PostgreSQL Schema & REST APIs',
      'Authentication & Permissions',
      'Production Deployment',
    ],
    engagementProcess: [
      { step: '01', title: 'Architect', description: 'Data models & API specification.' },
      { step: '02', title: 'Engineer', description: 'Iterative full-stack milestones.' },
      { step: '03', title: 'Deploy', description: 'Testing, docs, and live launch.' },
    ],
    estimatedTimeline: '4 – 8 Weeks',
    startingPriceNote: 'From $2,500 (Build)',
    relatedProjectIds: ['backlos-ai', 'leads', 'menya-bot redesign'],
  },
  {
    id: 'saas-product-development',
    number: '05',
    title: 'SaaS & Product Development',
    shortSummary: 'Complete B2B SaaS platforms from strategy and UI/UX to multi-tenant code.',
    plainEnglishValue:
      'One accountable builder to take your subscription software from concept to live platform.',
    whatItMeans:
      'Unified product strategy, dashboard UX, multi-tenant data architecture, and deployment.',
    problemsSolved: [
      'Disconnect between separate designers and backend devs.',
      'Rushed MVPs that cannot scale after launch.',
    ],
    whoNeedsIt: ['SaaS founders', 'Organizations building internal/external platforms'],
    subServices: [
      'SaaS product development',
      'MVP architecture',
      'Multi-tenant application development',
      'Dashboard development',
      'Subscription and billing integrations',
      'Admin panels',
      'Product iteration',
      'Technical planning',
    ],
    deliverables: [
      'Product Strategy & Full UI/UX',
      'Multi-Tenant Web Application',
      'Dashboards, Auth & Billing Setup',
      'Full System Documentation',
    ],
    engagementProcess: [
      { step: '01', title: 'Scope', description: 'Define core loop & tenant model.' },
      { step: '02', title: 'Design & Build', description: 'Unified UI/UX + full-stack code.' },
      { step: '03', title: 'Scale', description: 'Launch, document, and iterate.' },
    ],
    estimatedTimeline: '6 – 10 Weeks',
    startingPriceNote: 'From $5,000 (End-to-End)',
    relatedProjectIds: ['backlos-ai', 'leads', 'sage'],
  },
  {
    id: 'technical-documentation-architecture',
    number: '06',
    title: 'Technical Documentation & Architecture',
    shortSummary: 'Codebase audits, architecture guides, API docs, and onboarding playbooks.',
    plainEnglishValue:
      'Makes existing software easy to understand, maintain, and onboard new developers into.',
    whatItMeans:
      'Eliminating technical knowledge silos through structured documentation and architecture reviews.',
    problemsSolved: [
      'Slow developer onboarding on undocumented repos.',
      'Risk when key knowledge lives in one person’s head.',
    ],
    whoNeedsIt: ['Scaling engineering teams', 'Founders auditing existing codebases'],
    subServices: [
      'Codebase audits',
      'Software architecture documentation',
      'API documentation',
      'Technical specifications',
      'README documentation',
      'Developer onboarding documentation',
      'System flow documentation',
      'Database documentation',
      'Code quality reviews',
    ],
    deliverables: [
      'Codebase & Architecture Audit',
      'System & Database Diagrams',
      'README & Setup Guides',
      'Developer Onboarding Playbook',
    ],
    engagementProcess: [
      { step: '01', title: 'Audit', description: 'Inspect repo, schema, and setup.' },
      { step: '02', title: 'Document', description: 'Write guides, diagrams, and API specs.' },
      { step: '03', title: 'Verify', description: 'Test onboarding from a clean clone.' },
    ],
    estimatedTimeline: '1 – 2 Weeks',
    startingPriceNote: 'From $700 (System Clarity)',
    relatedProjectIds: ['menya-bot redesign', 'acc-website'],
  },
  {
    id: 'product-technical-advisory',
    number: '07',
    title: 'Product & Technical Advisory',
    shortSummary: 'Ongoing design critiques, code reviews, and architecture guidance.',
    plainEnglishValue:
      'Continuous expert guidance every month to review work, plan roadmaps, and avoid technical mistakes.',
    whatItMeans:
      'Flexible monthly partnership providing product direction, UX reviews, and technical oversight.',
    problemsSolved: [
      'Founders needing objective technical oversight.',
      'Teams needing regular design system & code critiques.',
    ],
    whoNeedsIt: ['Founders managing dev teams', 'Growing startups'],
    subServices: [
      'Product advisory',
      'Technical consulting',
      'Architecture guidance',
      'Design reviews',
      'Code reviews',
      'MVP planning',
      'Technology selection',
      'Development planning',
      'Ongoing technical support',
    ],
    deliverables: [
      'Advisory Strategy Sessions',
      'Figma UX & Design Reviews',
      'Codebase & Architecture Feedback',
      'Roadmap Prioritization',
    ],
    engagementProcess: [
      { step: '01', title: 'Review', description: 'Assess product, stack, and goals.' },
      { step: '02', title: 'Guide', description: 'Weekly/async design & code critiques.' },
      { step: '03', title: 'Calibrate', description: 'Keep monthly execution on track.' },
    ],
    estimatedTimeline: 'Monthly Retainer',
    startingPriceNote: '$400 / month',
    relatedProjectIds: ['acc-website', 'menya-bot redesign', 'backlos-ai'],
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'foundation',
    number: '01',
    name: 'Foundation',
    tagline: 'Clarity First',
    positioning: 'Validated product direction for startups and solo founders.',
    bestFor: 'Startups & solo founders',
    priceUSD: 400,
    pricingDisplay: '$400',
    includes: [
      'Strategy session',
      'User analysis',
      'UI wireframes',
      'Feasibility review',
    ],
    excluded: ['High-fidelity design system', 'Production coding'],
    outcome: 'Validated direction and wireframes.',
    estimatedDuration: '1 – 2 Weeks',
  },
  {
    id: 'experience',
    number: '02',
    name: 'Experience',
    tagline: 'Design with Purpose',
    positioning: 'Scalable user experience and interface system for teams.',
    bestFor: 'Teams needing UI/UX expertise',
    priceUSD: 1000,
    pricingDisplay: '$1,000',
    includes: [
      'User research',
      'High-fidelity UI design',
      'Design system',
      'Handoff documentation',
    ],
    excluded: ['Backend API coding', 'Server deployment'],
    outcome: 'Developer-ready Figma UI & design system.',
    estimatedDuration: '2 – 4 Weeks',
  },
  {
    id: 'build',
    number: '03',
    name: 'Build',
    tagline: 'Idea to Reality',
    positioning: 'Working digital product turning specs into production code.',
    bestFor: 'MVPs & production web apps',
    priceUSD: 2500,
    pricingDisplay: '$2,500',
    includes: [
      'Full-stack development',
      'Clean code',
      'API integration',
      'Deployment',
    ],
    excluded: ['Multi-month retainer'],
    outcome: 'Deployed, working software application.',
    estimatedDuration: '4 – 6 Weeks',
  },
  {
    id: 'end-to-end',
    number: '04',
    name: 'End-to-End',
    tagline: 'Idea to Impact',
    positioning: 'Complete product engagement from strategy to production.',
    bestFor: 'Founders & scaling startups',
    priceUSD: 5000,
    pricingDisplay: '$5,000',
    includes: [
      'Strategy and planning',
      'Full UI/UX design',
      'Software development',
      'Project management',
      'Iterations',
      'Ongoing support',
    ],
    excluded: ['Third-party hosting fees'],
    outcome: 'Complete designed, built & launched product.',
    estimatedDuration: '6 – 10 Weeks',
    isFlagship: true,
  },
  {
    id: 'documentation-system-clarity',
    number: '05',
    name: 'Documentation & Clarity',
    tagline: 'Make It Last',
    positioning: 'Make existing software easy to understand, maintain, and scale.',
    bestFor: 'Teams with existing codebases',
    priceUSD: 700,
    pricingDisplay: '$700',
    includes: [
      'Codebase and system review',
      'Architecture documentation',
      'README and setup guides',
      'API documentation',
      'Developer onboarding documentation',
    ],
    excluded: ['New feature builds'],
    outcome: 'Clear architecture & fast developer onboarding.',
    estimatedDuration: '1 – 2 Weeks',
  },
  {
    id: 'advisory-support',
    number: '06',
    name: 'Advisory & Support',
    tagline: 'Ongoing Guidance',
    positioning: 'Continuous product and technical guidance for founders.',
    bestFor: 'Founders & product teams',
    priceUSD: 400,
    billingPeriod: '/mo',
    pricingDisplay: '$400/month',
    includes: [
      'Product and technical advisory',
      'Design and code reviews',
      'Architecture guidance',
      'Planning and prioritization',
      'Ongoing expert feedback',
    ],
    excluded: ['Full-time daily coding'],
    outcome: 'Better decisions and steady momentum.',
    estimatedDuration: 'Monthly',
  },
];

export const FLEXIBLE_ENGAGEMENT_MODELS: FlexibleEngagementModel[] = [
  {
    id: 'hourly-consulting',
    title: 'Hourly / Daily Consulting',
    category: 'Consulting & Retainers',
    description: 'Focused working sessions for architecture, UX audits, or unblocking.',
    idealFor: 'Targeted reviews',
    pricingLabel: 'Request a Quote',
  },
  {
    id: 'weekly-monthly-retainers',
    title: 'Weekly & Monthly Retainers',
    category: 'Consulting & Retainers',
    description: 'Reserved design and engineering sprints for continuous product delivery.',
    idealFor: 'Growing startups',
    pricingLabel: 'Custom Pricing',
  },
  {
    id: 'website-landing-pkg',
    title: 'Website & Landing Page Packages',
    category: 'Specialized Project Packages',
    description: 'High-craft responsive websites and conversion landing pages.',
    idealFor: 'Launches & rebrands',
    pricingLabel: 'Request a Quote',
  },
  {
    id: 'mvp-api-pkg',
    title: 'MVP, API & Backend Packages',
    category: 'Specialized Project Packages',
    description: 'Custom database schemas, REST APIs, and lean MVP engineering.',
    idealFor: 'New builds',
    pricingLabel: 'Custom Pricing',
  },
  {
    id: 'enterprise-maintenance',
    title: 'Enterprise & Maintenance Contracts',
    category: 'Consulting & Retainers',
    description: 'Institutional platform builds, SLA updates, and system upkeep.',
    idealFor: 'Organizations',
    pricingLabel: 'Request a Quote',
  },
  {
    id: 'ui-docs-pkg',
    title: 'UI/UX & Documentation Sprints',
    category: 'Specialized Project Packages',
    description: 'Dedicated Figma design systems or codebase documentation overhauls.',
    idealFor: 'Product teams',
    pricingLabel: 'Request a Quote',
  },
];

export const PRICING_FAQS = [
  {
    question: 'Foundation vs. Experience vs. Build vs. End-to-End?',
    answer:
      'Foundation ($400) = Strategy & wireframes. Experience ($1,000) = Full Figma UI & design system. Build ($2,500) = Full-stack coding & deployment. End-to-End ($5,000) = Everything from initial strategy to launched product.',
  },
  {
    question: 'How is final pricing confirmed?',
    answer:
      'Package prices are transparent baselines. Final scope, timeline, and exact pricing are confirmed after a brief discovery discussion.',
  },
  {
    question: 'Can we start with Foundation and upgrade later?',
    answer:
      'Yes. Starting with Foundation ($400) is the fastest way to validate scope before full design or development.',
  },
  {
    question: 'Do I need a technical background to work with you?',
    answer:
      'No. Tell me the business problem you want to solve, and I will guide the technical and design architecture in plain English.',
  },
];

export const TOOLS: ToolItem[] = [
  {
    name: 'Figma',
    category: 'Design & Creative',
    shortExplanation: 'Interface design, wireframing, interactive prototyping & design systems.',
    practicalValue: 'Visualize and test every screen before coding.',
    verifiedContext: 'All UI/UX & product projects',
  },
  {
    name: 'Affinity Designer',
    category: 'Design & Creative',
    shortExplanation: 'Precision vector graphics, icons & visual identity assets.',
    practicalValue: 'Crisp, scalable geometric assets.',
    verifiedContext: 'Brand & vector schematics',
  },
  {
    name: 'Framer & Webflow',
    category: 'Design & Creative',
    shortExplanation: 'Interactive web design & CMS-driven marketing sites.',
    practicalValue: 'Fast, editable marketing websites.',
    verifiedContext: 'Web & landing page builds',
  },
  {
    name: 'WordPress',
    category: 'Design & Creative',
    shortExplanation: 'Content management for editorial and organizational sites.',
    practicalValue: 'Easy publishing for content teams.',
    verifiedContext: 'CMS websites',
  },
  {
    name: 'TypeScript & JavaScript',
    category: 'Frontend Development',
    shortExplanation: 'Type-safe application logic for web and mobile interfaces.',
    practicalValue: 'Prevents runtime bugs in production.',
    verifiedContext: 'ACC, Menya Bot, Backlos AI',
  },
  {
    name: 'React & React Native',
    category: 'Frontend Development',
    shortExplanation: 'Component-driven web and cross-platform mobile interfaces.',
    practicalValue: 'Reusable, consistent UI building blocks.',
    verifiedContext: 'ACC Website & Menya Bot',
  },
  {
    name: 'Next.js',
    category: 'Frontend Development',
    shortExplanation: 'Production React framework for fast SaaS dashboards and web apps.',
    practicalValue: 'Fast load speeds and scalable routing.',
    verifiedContext: 'Backlos AI frontend',
  },
  {
    name: 'Vue.js & Inertia.js',
    category: 'Frontend Development',
    shortExplanation: 'Reactive single-page frontend workflows paired with Laravel.',
    practicalValue: 'Smooth app experience without API duplication.',
    verifiedContext: 'Leads SaaS platform',
  },
  {
    name: 'Tailwind CSS & HTML/CSS',
    category: 'Frontend Development',
    shortExplanation: 'Semantic markup and utility-first design token styling.',
    practicalValue: 'Responsive layouts across all devices.',
    verifiedContext: 'All web engineering projects',
  },
  {
    name: 'Node.js & NestJS',
    category: 'Backend & Engineering',
    shortExplanation: 'Modular TypeScript backend architecture and REST APIs.',
    practicalValue: 'Clean, maintainable server logic.',
    verifiedContext: 'Backlos AI backend',
  },
  {
    name: 'Laravel',
    category: 'Backend & Engineering',
    shortExplanation: 'Full-featured backend framework for authentication, queues & business logic.',
    practicalValue: 'Rapid, secure business application delivery.',
    verifiedContext: 'Leads platform backend',
  },
  {
    name: 'PostgreSQL & Prisma',
    category: 'Backend & Engineering',
    shortExplanation: 'Relational database design and type-safe ORM migrations.',
    practicalValue: 'Keeps data organized and reliable at scale.',
    verifiedContext: 'Backlos AI & Leads databases',
  },
  {
    name: 'REST APIs',
    category: 'Backend & Engineering',
    shortExplanation: 'Structured data communication between client apps and servers.',
    practicalValue: 'Reliable connections between software systems.',
    verifiedContext: 'Full-stack integrations',
  },
  {
    name: 'Docker, Git, GitHub & Linux',
    category: 'Infrastructure & Development',
    shortExplanation: 'Containerized environments, version control, and Linux server workflows.',
    practicalValue: 'Predictable deployments and clean collaboration.',
    verifiedContext: 'Daily engineering workflow',
  },
  {
    name: 'AI Integration & OpenAI APIs',
    category: 'AI & Emerging Technology',
    shortExplanation: 'Structured LLM workflows, AI UX design, and intelligent automation.',
    practicalValue: 'Practical AI features anchored in human control.',
    verifiedContext: 'Backlos AI & Menya Bot',
  },
];

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    id: 'africa-cybersecurity-consortium',
    organization: 'Africa CyberSecurity Consortium (ACC)',
    position: 'Product Designer',
    engagementType: 'Project-Based Engagements',
    period: '2025',
    location: 'Kigali, Rwanda · Pan-African',
    context: 'Worked with the pan-African cybersecurity consortium to lead product design, information architecture, and technical documentation.',
    responsibilities: [
      'Redesigned the institutional web platform and visual identity system.',
      'Collaborated with engineering on React, TypeScript, and Django implementation.',
      'Authored internal technical wiki and maintainer documentation.',
    ],
    achievements: [
      '80% reduction in support inquiries and 25% increase in platform engagement.',
    ],
    skillsDeveloped: ['Product Design', 'UI/UX Systems', 'React', 'Documentation'],
    relatedWorkLabel: 'Case Study',
    relatedWorkPath: '/project/acc-website',
  },
  {
    id: 'backlos-organization',
    organization: 'Backlos',
    position: 'Product Designer & Frontend Engineer',
    engagementType: 'Employment',
    period: '2025 – Present',
    location: 'Kigali, Rwanda',
    context: 'Working on product design, design systems, and frontend engineering for B2B applicant evaluation and feedback software.',
    responsibilities: [
      'Leading end-to-end UI/UX design and interactive prototyping in Figma.',
      'Building responsive frontend dashboards in Next.js and TypeScript.',
      'Integrating frontend interfaces with NestJS, Prisma, and PostgreSQL APIs.',
    ],
    achievements: ['Designed and engineered the core multi-tenant evaluation workspace.'],
    skillsDeveloped: ['Figma', 'Next.js', 'TypeScript', 'NestJS'],
    relatedWorkLabel: 'Case Study',
    relatedWorkPath: '/project/backlos-ai',
  },
  {
    id: 'independent-studio-practice',
    organization: 'Amani Samuel — Independent Consulting Studio',
    position: 'Product Designer & Full-Stack Software Engineer',
    engagementType: 'Freelance Work',
    period: '2024 – Present',
    location: 'Kigali, Rwanda',
    context: 'Partnering directly with startups, founders, and businesses to design interfaces and build full-stack web and mobile software.',
    responsibilities: [
      'UI/UX design, design systems, and interactive Figma prototypes for client teams.',
      'Full-stack software development using React, React Native, Vue.js, Laravel, and PostgreSQL.',
      'Codebase audits, architecture documentation, and developer onboarding guides.',
    ],
    achievements: [
      'Cut developer onboarding time by 40% through systematic UI component libraries and docs.',
    ],
    skillsDeveloped: ['Product Strategy', 'UI/UX Design', 'Full-Stack Dev', 'System Architecture'],
    relatedWorkLabel: 'View Work',
    relatedWorkPath: '/work',
  },
  {
    id: 'rwanda-coding-academy',
    organization: 'Rwanda Coding Academy (RCA)',
    position: 'Software Engineering & Systems Scholar',
    engagementType: 'Education',
    period: '2024 – Present',
    location: 'Nyabihu, Rwanda',
    context: 'Specialized national academy for software engineering, embedded systems, and cybersecurity.',
    responsibilities: [
      'Full-stack software engineering, data structures, and relational database architecture.',
      'Leading UI/UX design critiques and venture ideation in the RCA Business Club.',
    ],
    achievements: ['Bridged rigorous software engineering with practical product design leadership.'],
    skillsDeveloped: ['Software Engineering', 'System Architecture', 'Cybersecurity', 'Leadership'],
  },
];

export const INITIATIVES: InitiativeItem[] = [
  {
    id: 'open-design-tech-mentorship',
    name: 'Youth Product & UI/UX Mentorship Initiative',
    distinction: 'Initiatives I Founded',
    purpose: 'Equip young Rwandan student builders with practical UI/UX design and problem-validation skills so they build technology that solves real community problems.',
    problemOrOpportunity: 'Many young coders learn syntax without learning how to research human needs or design usable interfaces.',
    targetCommunity: 'Student developers and emerging youth builders in Rwanda.',
    myRole: 'Founder & Lead Mentor',
    activities: [
      'Running hands-on UI/UX design critiques and Figma workshops for student teams.',
      'Guiding young builders from raw community problems to validated prototypes.',
    ],
    currentStatus: 'Ongoing',
    achievements: ['Helped student teams shift from code-first to human-centered problem solving.'],
    links: [{ label: 'Book a Call', url: '/contact' }],
  },
  {
    id: 'dignified-career-feedback',
    name: 'Fair & Constructive Applicant Feedback Movement',
    distinction: 'Initiatives I Co-Founded',
    purpose: 'Eliminate silent job and fellowship rejections by helping organizations give every applicant actionable growth feedback.',
    problemOrOpportunity: 'Thousands of young graduates and applicants get rejected in silence without knowing how to improve their skills.',
    targetCommunity: 'Youth applicants, fellowship candidates, and early-career talent.',
    myRole: 'Co-Founder & Product Architect',
    activities: [
      'Designing structured feedback rubrics that turn rejections into learning roadmaps.',
      'Building software infrastructure so organizations can mentor applicants at scale.',
    ],
    currentStatus: 'Active',
    achievements: ['Created structured feedback workflows that empower rejected candidates to grow.'],
    links: [{ label: 'Explore Backlos AI', url: '/project/backlos-ai' }],
  },
  {
    id: 'transparent-community-governance',
    name: 'Open Community Decision & Civic Memory (Sage)',
    distinction: 'Initiatives I Founded',
    purpose: 'Give youth organizations, cooperatives, and local communities a transparent way to propose ideas, vote fairly, and preserve collective decisions.',
    problemOrOpportunity: 'Important community ideas and youth proposals often get lost in chaotic group chats without fair deliberation.',
    targetCommunity: 'Youth clubs, civic groups, and local community organizations.',
    myRole: 'Founder & Product Designer',
    activities: [
      'Designed an open 4-step civic decision lifecycle (Propose → Discuss → Vote → Archive).',
      'Prototyping accessible governance tools for student and community groups.',
    ],
    currentStatus: 'Active',
    achievements: ['Established a clear blueprint for transparent, inclusive community decision-making.'],
    links: [{ label: 'Explore Sage', url: '/project/sage' }],
  },
];

export const LEADERSHIP_CLUBS: LeadershipClubItem[] = [
  {
    id: 'rca-business-club',
    name: 'Rwanda Coding Academy Business Club',
    organization: 'Rwanda Coding Academy',
    position: 'UI/UX Designer & Club Leadership',
    category: 'Leadership',
    period: '2025 – Present',
    responsibilities: [
      'Leading UI/UX design standards for student ventures.',
      'Organizing product pitch and business innovation workshops.',
    ],
    activitiesOrganized: [
      'UX critique sessions for student-built platforms.',
      'MVP scoping and business model workshops.',
    ],
    contributions: [
      'Established reusable UI workflows for club projects.',
      'Bridged software engineering and business strategy for peers.',
    ],
    outcomes: 'Stronger collaboration between student developers and product builders.',
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'doc-skill',
    title: 'Documentation as a Skill',
    date: 'Jan 2024',
    readTime: '3 min read',
    category: 'Systems Clarity',
    excerpt: 'Why undocumented software is a liability—and how clear writing creates durable systems.',
    sections: [
      {
        heading: 'If It Isn’t Documented, It Only Exists in Memory',
        body: [
          'Undocumented code locks critical architecture decisions inside one person’s head. Treating documentation as part of the product forces clearer thinking and cleaner systems.',
        ],
      },
      {
        heading: 'Measurable Operational Impact',
        body: [
          'Pairing a clean design system with setup guides and technical wikis reduced support inquiries by 80% on the ACC platform and cut developer onboarding time by 40% on Menya Bot.',
        ],
      },
    ],
  },
];
