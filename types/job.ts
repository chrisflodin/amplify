export interface Job {
  id: string;
  title: string;
  location: string;
  description: string;
  requirements: string[];
  benefits: string[];
  slug: string;
  isActive: boolean;
}

export interface JobApplication {
  jobId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverLetter: string;
  resumeUrl?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
}
