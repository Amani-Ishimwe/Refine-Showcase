import { Project, Article, Philosophy, ServicePackage } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'acc-website',
    title: 'Africa CyberSecurity Consortium Website Redesign',
    year: '2025',
    imageUrl: '/ACC.png',
    problem: 'Outdated, inconsistent web presence for pan-African cybersecurity org.',
    constraints: ['User experience', 'Brand guidelines'],
    role: 'Product Designer',
    process: {
      design: 'Clean typography and intuitive navigation.',
      development: 'React + TypeScript + Django + Tailwind with custom local-first sync.',
      documentation: 'Built technical wiki reducing support load.'
    },
    outcome: '80% reduction in support requests and 25% increase in engagement.',
    lesson: 'A well-structured codebase and clear documentation are as important as the design itself for long-term success.'
  },
  {
    id: 'menya-bot redesign',
    title: 'Menya Bot Clarity Redesign',
    year: '2026',
    imageUrl: '/MENYA.png',
    problem: 'Complex, inconsistent design system for AI chatbot platform.',
    constraints: ['Design consistency', 'Developer onboarding'],
    role: 'Product Engineer',
    process: {
      design: 'Systematic design overhaul with a focus on clarity and consistency.',
      development: 'ReactNative with a custom component library and strict code standards.',
      documentation: 'Comprehensive design system documentation and developer onboarding guides.'
    },
    outcome: 'Significant improvement in design consistency and a 40% reduction in onboarding time for new developers.',
    lesson: 'Investing in a clear design system and thorough documentation can dramatically improve both the user experience and the developer experience, leading to a more maintainable product.'
  }
];

export const PHILOSOPHIES: Philosophy[] = [
  {
    title: 'Ownership',
    description: 'Managing products from brainstorm to production. I own the problem, not just the code.'
  },
  {
    title: 'Clarity',
    description: 'If it isn\'t documented, it doesn\'t exist. Clear writing ensures clear systems.'
  },
  {
    title: 'Hybridity',
    description: 'Operating at the intersection of aesthetic precision and technical rigor.'
  },
  {
    title: 'Standards',
    description: 'Clean commits, rigorous testing, and daily discipline are non-negotiable.'
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'foundation',
    name: 'Foundation',
    tagline: 'Clarity First',
    bestFor: 'Startups & solo founders',
    includes: ['Strategy session', 'User analysis', 'UI Wireframes', 'Feasibility review'],
    outcome: 'A validated product direction.',
    pricing: '$400'
  },
  {
    id: 'design',
    name: 'Experience',
    tagline: 'Design with Purpose',
    bestFor: 'Teams needing UX/UI expertise',
    includes: ['User research', 'Hi-fi UI Design', 'Design System', 'Handoff notes'],
    outcome: 'A professional, scalable design.',
    pricing: '$1,000'
  },
  {
    id: 'build',
    name: 'Build',
    tagline: 'Idea to Reality',
    bestFor: 'MVPs & production apps',
    includes: ['Full-stack dev', 'Clean code', 'API Integration', 'Deployment'],
    outcome: 'A working, scalable product.',
    pricing: '$2,500'
  },
  {
    id: 'end-to-end',
    name: 'End-to-End',
    tagline: 'Idea to Impact',
    bestFor: 'Founders & scaling startups',
    includes: ['Strategy & Planning', 'Full UI/UX + Dev', 'PM & Iterations', 'Ongoing support'],
    outcome: 'A complete, well-built product.',
    pricing: '$5,000'
  },
  {
  id: 'documentation-system-clarity',
  name: 'Documentation & System Clarity',
  tagline: 'Make It Last',
  bestFor: 'Teams with existing products that need structure',
  includes: [
    'Codebase & system review',
    'Architecture documentation',
    'README & setup guides',
    'API documentation',
    'Developer onboarding docs'
  ],
  outcome: 'A product that is easy to understand, maintain, and scale.',
  pricing: '$700'
},
{
  id: 'advisory-support',
  name: 'Advisory / Ongoing Support',
  tagline: 'Professional Presence',
  bestFor: 'Founders & teams needing continuous guidance',
  includes: [
    'Product & technical advisory',
    'Design and code reviews',
    'Architecture guidance',
    'Planning & prioritization support',
    'Ongoing expert feedback'
  ],
  outcome: 'Better decisions, fewer mistakes, and steady progress.',
  pricing: '$400 / month'
}
];

export const ARTICLES: Article[] = [
  {
    id: 'doc-skill',
    title: 'Documentation as a Skill',
    date: 'Jan 2024',
    readTime: '6 min',
    excerpt: 'The undervalued power of technical writing.'
  }
];
