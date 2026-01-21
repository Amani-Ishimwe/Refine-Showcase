
export interface Project {
  id: string;
  title: string;
  year: string;
  problem: string;
  constraints: string[];
  role: string;
  process: {
    design: string;
    development: string;
    documentation: string;
  };
  outcome: string;
  lesson: string;
  imageUrl: string;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
}

export interface Philosophy {
  title: string;
  description: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  bestFor: string;
  includes: string[];
  outcome: string;
  pricing: string;
  isFlagship?: boolean;
}
