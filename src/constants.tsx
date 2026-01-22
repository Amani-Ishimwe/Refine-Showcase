
import { Project, Article, Philosophy, ServicePackage } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'nexus-analytics',
    title: 'Nexus: Enterprise Supply Chain Dashboard',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    problem: 'Large logistics firms struggled with fragmented data silos, leading to high operational waste and poor forecasting accuracy.',
    constraints: [
      'Must work offline for remote port operations',
      'Integration with legacy SQL databases',
      'Accessibility compliance for visual impairment'
    ],
    role: 'Lead Product Engineer (Design + Fullstack Dev)',
    process: {
      design: 'Conducted user interviews with 12 site managers. Created high-fidelity prototypes focusing on information density without cognitive overload.',
      development: 'Architected a React + Node.js system with a custom local-first data sync engine using IndexedDB.',
      documentation: 'Built a comprehensive technical wiki and user onboarding guide that reduced support tickets by 40%.'
    },
    outcome: 'Increased operational visibility by 65%, saving an estimated $2.4M in annual logistical overhead.',
    lesson: 'Documentation isn\'t an afterthought; it is the product\'s skeleton. Clear docs during dev led to seamless handover.'
  },
  {
    id: 'clarity-design-system',
    title: 'Clarity: Multi-platform Design System',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200',
    problem: 'A scaling fintech startup faced severe visual inconsistency across their web and mobile products, slowing down development cycles.',
    constraints: [
      'Support for React and React Native',
      'Strict brand adherence',
      'High-performance animations'
    ],
    role: 'Design Technologist & PM',
    process: {
      design: 'Audited 400+ unique UI components. Established a token-based system for color, spacing, and typography.',
      development: 'Developed a headless component library using Tailwind and Radix UI to ensure semantic HTML and accessibility.',
      documentation: 'Authored "The Clarity Manifesto"—a live documentation site with playground environments and governance rules.'
    },
    outcome: 'Developer velocity increased by 30%. Visual debt was reduced from 22% to <1% within two quarters.',
    lesson: 'Engineering discipline applied to design (versioning, linting, testing) is the only way to scale quality.'
  }
];

export const PHILOSOPHIES: Philosophy[] = [
  {
    title: 'Extreme Ownership',
    description: 'I manage products from the first brainstorm to the final production release. I don\'t just "code to spec"—I challenge assumptions to ensure the spec solves the right problem.'
  },
  {
    title: 'Documentation as a Tool',
    description: 'If it isn\'t documented, it doesn\'t exist. I write for my future self, my team, and our users. Clarity in writing leads to clarity in code.'
  },
  {
    title: 'Design-Engineering Hybridity',
    description: 'Designing without technical knowledge is fantasy. Engineering without design empathy is utility without soul. I operate at the intersection of both.'
  },
  {
    title: 'Disciplined Habits',
    description: 'Consistency beats intensity. Clean commits, daily stand-ups (even with oneself), and rigorous testing are non-negotiable standards of professionalism.'
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'foundation',
    name: 'Foundation Package',
    tagline: 'Clarity First',
    bestFor: 'Early ideas, startups, solo founders',
    includes: [
      'Product understanding session',
      'User & problem analysis',
      'Basic UI/UX wireframes',
      'Technical feasibility review',
      'Clear project roadmap',
      'Lightweight documentation'
    ],
    outcome: 'A clear, validated product direction.',
    pricing: '$400'
  },
  {
    id: 'design-exp',
    name: 'Design & Experience',
    tagline: 'Design with Purpose',
    bestFor: 'Teams needing strong UX/UI',
    includes: [
      'User research & flows',
      'High-fidelity UI design',
      'Design system',
      'Responsive layouts',
      'Developer handoff notes'
    ],
    outcome: 'A usable, scalable, and professional product design.',
    pricing: '$1,000'
  },
  {
    id: 'build',
    name: 'Build Package',
    tagline: 'From Design to Reality',
    bestFor: 'MVPs, internal tools, production apps',
    includes: [
      'Frontend & backend development',
      'Clean, maintainable code',
      'API integration',
      'Authentication & core features',
      'Deployment setup',
      'Technical documentation'
    ],
    outcome: 'A working, deployable product.',
    pricing: '$2,500'
  },
  {
    id: 'end-to-end',
    name: 'End-to-End Product',
    tagline: 'Idea to Impact',
    bestFor: 'Founders & scaling startups',
    includes: [
      'Product strategy & planning',
      'UI/UX design',
      'Full development',
      'Documentation (code, design, system)',
      'Project management',
      'Iterations based on feedback',
      'Launch support'
    ],
    outcome: 'A complete, well-designed, well-built product with long-term clarity.',
    pricing: '$5,000',
    isFlagship: true
  },
  {
    id: 'doc-system',
    name: 'Documentation & System Clarity',
    tagline: 'Make It Last',
    bestFor: 'Teams with existing products',
    includes: [
      'Codebase review',
      'README & architecture docs',
      'API documentation',
      'Design rationale docs',
      'Onboarding documentation'
    ],
    outcome: 'A product that others can understand, maintain, and scale.',
    pricing: '$700'
  },
  {
    id: 'advisory',
    name: 'Advisory / Ongoing Support',
    tagline: 'Professional Presence',
    bestFor: 'Founders & technical teams',
    includes: [
      'Weekly or bi-weekly check-ins',
      'Product & UX advice',
      'Code & design reviews',
      'Planning & prioritization',
      'Technical guidance'
    ],
    outcome: 'Better decisions, fewer mistakes, faster progress.',
    pricing: '$400 / month'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'doc-skill',
    title: 'Documentation as a Professional Skill',
    date: 'Jan 2024',
    readTime: '6 min read',
    excerpt: 'Why technical writing is the most undervalued skill in modern software engineering and how to master it.'
  },
  {
    id: 'design-thinking',
    title: 'Design Thinking for Engineers',
    date: 'Nov 2023',
    readTime: '8 min read',
    excerpt: 'Bridge the gap between "how it works" and "how it feels" through structural empathy and user-centric logic.'
  },
  {
    id: 'product-empathy',
    title: 'Building Products with Empathy',
    date: 'Aug 2023',
    readTime: '5 min read',
    excerpt: 'Beyond personas: how to build software that respects user time, attention, and cognitive load.'
  }
];
