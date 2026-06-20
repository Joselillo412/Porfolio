export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
  features?: string[];
  category: 'frontend' | 'fullstack' | 'tool';
  difficulty?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  relationship: string;
  text: string;
  avatarUrl?: string;
}
