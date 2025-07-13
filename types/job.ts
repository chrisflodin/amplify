export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Heltid" | "Deltid" | "Konsult" | "Praktik";
  description: string;
  requirements: string[];
  benefits: string[];
  publishedAt: string;
  applicationDeadline?: string;
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
