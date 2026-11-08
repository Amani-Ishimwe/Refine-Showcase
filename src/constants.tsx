import {
  ProfileConfig,
  Project,
  ProductItem,
  BusinessVenture,
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
    category: 'Security Tech · Access Management',
    filterCategories: ['Product Design', 'UI/UX Design', 'Experiments and Concepts'],
    year: '2025',
    role: 'Product & UI/UX Designer',
    ownershipNote: 'Product Concept',
    status: 'Concept',
    schematicType: 'access-control',
    shortDescription:
      'Smart physical access concept combining OCR ID scanning, RFID badges, and live security logs.',
    problem:
      'Paper visitor logs and disconnected badges slow down building entry and weaken security.',
    contribution:
      'Designed operator consoles, fast OCR/RFID verification flows, and audit dashboards.',
    constraints: ['Sub-second gate ergonomics', 'High-contrast status visibility'],
    technologies: ['Figma', 'Product Design', 'UI/UX Design', 'Prototyping'],
    plainLanguageSystemSummary:
      'Connects ID scanning (OCR) and smart cards (RFID) in one clean screen for fast gate check-ins.',
    process: {
      design: 'High-contrast operator screens and instant verification states.',
      development: 'Interactive hardware-to-software UX prototypes.',
      documentation: 'Visitor check-in and security audit journey maps.',
    },
    outcome: 'Completed UI/UX concept & interactive prototype.',
    lesson:
      'Physical check-in interfaces demand instant visual confirmation with zero clutter.',
    caseStudy: {
      overview:
        'PASSE explores how OCR document scanning and RFID credentials unify into a fast, modern facility access console.',
      targetUsers: ['Campus & facility security teams', 'Reception operators'],
      productStrategy:
        'Pair automated OCR scanning for guests with instant RFID taps for recurring members.',
      lessons: 'Software for physical gates must prioritize speed and unmistakable status cues.',
    },
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'backlos-ai',
    name: 'Backlos AI',
    monogram: 'BK',
    tagline: 'Structured applicant feedback infrastructure.',
    category: 'B2B SaaS · Feedback Tech',
    description:
      'Helps organizations turn reviewer evaluations into structured, constructive feedback for applicants.',
    problemSolved:
      'Eliminates silent rejections and manual writing bottlenecks for high-volume cohorts.',
    intendedUsers: ['Accelerators & fellowships', 'Hiring & talent teams', 'Grant committees'],
    myRole: 'Product Design & Frontend Dev',
    ownershipCategory: 'Products I Co-Built',
    ownershipClarification: 'Co-built — leading Figma UI/UX and Next.js frontend.',
    status: 'In Development',
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
    tagline: 'Lead management & revenue recovery.',
    category: 'B2B SaaS · Sales Pipeline',
    description:
      'Helps service businesses organize inquiries, track pipelines, and automate follow-up discipline.',
    problemSolved:
      'Prevents lost revenue from forgotten inquiries across scattered messages and spreadsheets.',
    intendedUsers: ['Service businesses', 'Consulting agencies', 'Sales operators'],
    myRole: 'Product Designer & Full-Stack Dev',
    ownershipCategory: 'Products I Engineered',
    ownershipClarification: 'Designed the UX and engineered the full-stack platform.',
    status: 'In Development',
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
    tagline: 'Structured community proposals & decision archives.',
    category: 'Community SaaS · Governance',
    description:
      'Guides communities through proposing ideas, debating, voting, and archiving final decisions.',
    problemSolved:
      'Stops important proposals from disappearing inside noisy group chat streams.',
    intendedUsers: ['Student clubs & communities', 'Engineering & product teams'],
    myRole: 'Product & UI/UX Designer',
    ownershipCategory: 'Products I Designed',
    ownershipClarification: 'Product concept, state architecture & UI/UX design.',
    status: 'In Development',
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
    id: 'passe',
    name: 'PASSE',
    monogram: 'PS',
    tagline: 'Smart OCR & RFID physical access concept.',
    category: 'Security Tech · Access Control',
    description:
      'Explores how OCR ID scanning and RFID badges streamline physical facility check-ins.',
    problemSolved:
      'Replaces slow paper visitor logbooks with real-time digital verification.',
    intendedUsers: ['Campus & corporate security', 'Facility managers'],
    myRole: 'Product & UI/UX Designer',
    ownershipCategory: 'Experimental Concepts',
    ownershipClarification: 'Product exploration & UI/UX system design.',
    status: 'Concept',
    mainFeatures: [
      { title: 'OCR ID Scan', description: 'Fast visitor document verification.' },
      { title: 'RFID Tap Access', description: 'Instant entry for registered members.' },
      { title: 'Live Audit Console', description: 'Real-time gate logs and active passes.' },
    ],
    technologyStack: [
      { name: 'Figma', practicalPurpose: 'Operator console & kiosk UI prototypes.' },
      { name: 'UX Systems', practicalPurpose: 'Hardware-to-software interaction flows.' },
    ],
    plainLanguageArchitecture:
      'Unifies ID scanning and badge taps into one high-contrast screen for gate operators.',
    schematicType: 'access-control',
    caseStudyPath: '/project/passe',
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
