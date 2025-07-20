import { getAllJobs } from "@/lib/jobs";
import { getAllProjects } from "@/lib/projects";
import { getAllServices } from "@/lib/services";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://weareamplify.se";

  // Get all dynamic content
  const projects = getAllProjects();
  const services = getAllServices();
  const jobs = getAllJobs();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/artiklar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/uppdrag`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tjanster`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jobb`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
  ];

  // Project pages
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/uppdrag/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/tjanster/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Job pages (only active ones)
  const jobPages: MetadataRoute.Sitemap = jobs
    .filter((job) => job.isActive)
    .map((job) => ({
      url: `${baseUrl}/jobb/${job.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  return [...staticPages, ...projectPages, ...servicePages, ...jobPages];
}
