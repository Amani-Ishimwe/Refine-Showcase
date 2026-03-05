import { Project, Article, Philosophy, ServicePackage } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'nexus-analytics',
    title: 'Nexus Supply Chain',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    problem: 'Fragmented logistics data causing operational waste.',
    constraints: ['Offline capability', 'SQL Integration', 'Accessibility'],
    role: 'Lead Product Engineer',
    process: {
      design: 'Iterative prototyping for high information density.',
      development: 'React + Node.js with custom local-first sync.',
      documentation: 'Built technical wiki reducing support load.'
    },
    outcome: 'Increased visibility by 65%, $2.4M saved.',
    lesson: 'Documentation is the product\'s skeleton.'
  },
  {
    id: 'clarity-design-system',
    title: 'Clarity Design System',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200',
    problem: 'Visual inconsistency across web and mobile products.',
    constraints: ['React/React Native', 'Brand adherence', 'Performance'],
    role: 'Design Technologist',
    process: {
      design: 'Token-based system for color and scale.',
      development: 'Headless component library (Radix + Tailwind).',
      documentation: 'Live documentation site with sandbox env.'
    },
    outcome: '30% increase in developer velocity.',
    lesson: 'Engineering discipline scales design quality.'
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
