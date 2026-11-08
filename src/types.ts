export type ProjectStatus = 'Live' | 'In Development' | 'Completed' | 'Concept' | 'Archived';

export type ProjectFilterCategory =
  | 'All'
  | 'Product Design'
  | 'UI/UX Design'
  | 'Software Engineering'
  | 'Full-Stack Development'
  | 'SaaS Products'
  | 'Experiments and Concepts';

export type OwnershipDistinction =
  | 'Products I Founded'
  | 'Products I Co-Built'
  | 'Products I Designed'
  | 'Products I Engineered'
  | 'Experimental Concepts';

export interface CaseStudyContent {
  overview: string;
  background?: string;
  targetUsers?: string[];
  researchAndDiscovery?: string;
  productStrategy?: string;
  designProcess?: string;
  userFlowsAndWireframes?: string;
  visualDesign?: string;
  technicalImplementation?: string;
  architectureDecisions?: string[];
  challenges?: string[];
  solutions?: string[];
  outcomes?: string;
  lessons: string;
}

export interface Project {
  id: string;
  aliases?: string[];
  title: string;
  category: string;
  filterCategories: ProjectFilterCategory[];
  year: string;
  role: string;
  ownershipNote: string;
  status: ProjectStatus;
  shortDescription: string;
  problem: string;
  contribution: string;
  constraints: string[];
  technologies: string[];
  plainLanguageSystemSummary: string;
  imageUrl?: string;
  schematicType: 'cybersecurity-grid' | 'conversational-ai' | 'feedback-pipeline' | 'access-control' | 'community-consensus' | 'lead-recovery';
  process: {
    design: string;
    development: string;
    documentation: string;
  };
  outcome: string;
  lesson: string;
  caseStudy: CaseStudyContent;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  monogram: string;
  tagline: string;
  category: string;
  description: string;
  problemSolved: string;
  intendedUsers: string[];
  myRole: string;
  ownershipCategory: OwnershipDistinction;
  ownershipClarification: string;
  status: ProjectStatus;
  mainFeatures: {
    title: string;
    description: string;
  }[];
  technologyStack: {
    name: string;
    practicalPurpose: string;
  }[];
  plainLanguageArchitecture: string;
  imageUrl?: string;
  schematicType: Project['schematicType'];
  websiteUrl?: string;
  caseStudyPath: string;
  githubUrl?: string;
}

export interface BusinessVenture {
  id: string;
  name: string;
  monogram: string;
  industry: string;
  description: string;
  mission: string;
  problemAddressed: string;
  targetMarket: string;
  positionAndResponsibilities: string;
  contributions: string[];
  currentStage: 'Active Practice' | 'Venture Incubation' | 'Active Initiative' | 'Exploring';
  websiteUrl?: string;
  relatedLinkLabel?: string;
  relatedLinkPath?: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  shortSummary: string;
  plainEnglishValue: string;
  whatItMeans: string;
  problemsSolved: string[];
  whoNeedsIt: string[];
  subServices: string[];
  deliverables: string[];
  engagementProcess: {
    step: string;
    title: string;
    description: string;
  }[];
  estimatedTimeline: string;
  startingPriceNote: string;
  relatedProjectIds: string[];
}

export interface ServicePackage {
  id: string;
  number: string;
  name: string;
  tagline: string;
  positioning: string;
  bestFor: string;
  priceUSD: number;
  billingPeriod?: string;
  pricingDisplay: string;
  includes: string[];
  excluded: string[];
  outcome: string;
  estimatedDuration: string;
  isFlagship?: boolean;
}

export interface FlexibleEngagementModel {
  id: string;
  title: string;
  category: 'Consulting & Retainers' | 'Specialized Project Packages';
  description: string;
  idealFor: string;
  pricingLabel: 'Request a Quote' | 'Custom Pricing';
}

export type ToolCategory =
  | 'Design & Creative'
  | 'Frontend Development'
  | 'Backend & Engineering'
  | 'Infrastructure & Development'
  | 'AI & Emerging Technology';

export interface ToolItem {
  name: string;
  category: ToolCategory;
  shortExplanation: string;
  practicalValue: string;
  verifiedContext: string;
}

export type ExperienceCategory =
  | 'Education'
  | 'Freelance Work'
  | 'Project-Based Engagements'
  | 'Leadership & Community'
  | 'Employment'
  | 'Internships'
  | 'Volunteer Work';

export interface ExperienceEntry {
  id: string;
  organization: string;
  position: string;
  engagementType: ExperienceCategory;
  period: string;
  location: string;
  context: string;
  responsibilities: string[];
  achievements: string[];
  skillsDeveloped: string[];
  relatedWorkLabel?: string;
  relatedWorkPath?: string;
}

export interface InitiativeItem {
  id: string;
  name: string;
  distinction: 'Initiatives I Founded' | 'Initiatives I Co-Founded' | 'Initiatives I Organized' | 'Initiatives I Contributed To';
  purpose: string;
  problemOrOpportunity: string;
  targetCommunity: string;
  myRole: string;
  activities: string[];
  currentStatus: 'Active' | 'Ongoing' | 'Completed' | 'In Planning';
  achievements: string[];
  links?: { label: string; url: string }[];
}

export interface LeadershipClubItem {
  id: string;
  name: string;
  organization: string;
  position: string;
  category: 'Leadership' | 'Club Membership' | 'Community Participation' | 'Volunteering' | 'Team Leadership';
  period: string;
  responsibilities: string[];
  activitiesOrganized: string[];
  contributions: string[];
  outcomes: string;
  links?: { label: string; url: string }[];
}

export interface Philosophy {
  id: string;
  number: string;
  title: string;
  shortSummary: string;
  description: string;
  practicalApplication: string;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  sections: {
    heading: string;
    body: string[];
  }[];
}

export interface ProfileConfig {
  fullName: string;
  shortName: string;
  brandTitle: string;
  personalIdentity: string;
  motto: string;
  philosophyHeadline: string;
  location: {
    city: string;
    country: string;
    timezone: string;
  };
  availability: {
    isAvailable: boolean;
    statusText: string;
    detailText: string;
    responseWindow: string;
  };
  hero: {
    eyebrow: string;
    mainHeadline: string;
    supportingHeadline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  portraitUrl: string;
  contact: {
    email: string;
    bookingUrl: string;
    websiteUrl: string;
  };
  socials: {
    name: string;
    label: string;
    url: string;
    handle: string;
    verified: boolean;
  }[];
  missingInfoChecklist: {
    item: string;
    configLocation: string;
    status: 'Awaiting Verification' | 'Configured';
  }[];
}
