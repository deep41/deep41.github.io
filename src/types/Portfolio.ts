export interface Education {
  title: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Certification {
  title: string;
  issued: string;
}

export interface WorkExperience {
  position: string;
  company: string;
  period: string;
  achievements: string[];
  link?: {
    url: string;
    text: string;
  };
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  progress: number;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  slug: string;
} 