export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  duration: string;
  technologies: string[];
  results: string;
  image: string;
  description: string;
  heroDescription: string;
  background: string[];
  role: string[];
  resultsDescription: string[];
  keyMetrics: {
    value: string;
    label: string;
    description: string;
    color: string;
  }[];
  relatedProjects?: {
    title: string;
    category: string;
    image: string;
    slug: string;
  }[];
}
