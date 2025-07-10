import type { Project } from "@/types/project";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

// Cache to avoid reading files multiple times during build
let projectsCache: Project[] | null = null;

const contentDirectory = path.join(process.cwd(), "content");
const projectsDirectory = path.join(contentDirectory, "projects");

function getProjectSlugs(): string[] {
  if (typeof window !== "undefined") {
    throw new Error("getProjectSlugs can only be called on the server side");
  }

  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getProjectBySlug(slug: string): Project | undefined {
  if (typeof window !== "undefined") {
    throw new Error("getProjectBySlug can only be called on the server side");
  }

  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return undefined;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Parse the markdown content into sections
    const sections = parseProjectContent(content);

    return {
      ...data,
      slug,
      background: sections.background || [],
      role: sections.role || [],
      resultsDescription: sections.resultat || [],
    } as Project;
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return undefined;
  }
}

export function getAllProjects(): Project[] {
  if (typeof window !== "undefined") {
    throw new Error("getAllProjects can only be called on the server side");
  }

  // Use cache if available
  if (projectsCache) {
    return projectsCache;
  }

  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== undefined)
    .sort((a, b) => parseInt(a.id) - parseInt(b.id));

  // Cache the results
  projectsCache = projects;
  return projects;
}

export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  if (typeof window !== "undefined") {
    throw new Error("getRelatedProjects can only be called on the server side");
  }

  const allProjects = getAllProjects();
  return allProjects
    .filter((project) => project.slug !== currentSlug)
    .slice(0, limit);
}

function parseProjectContent(content: string): {
  background?: string[];
  role?: string[];
  resultat?: string[];
} {
  const sections: { [key: string]: string[] } = {};
  const lines = content.split("\n");
  let currentSection: string | null = null;
  let currentContent: string[] = [];

  for (const line of lines) {
    // Check if line is a heading
    if (line.startsWith("## ")) {
      // Save previous section
      if (currentSection && currentContent.length > 0) {
        sections[currentSection] = currentContent.filter(
          (l) => l.trim().length > 0
        );
      }

      // Start new section
      currentSection = line.replace("## ", "").toLowerCase().trim();
      currentContent = [];
    } else if (currentSection && line.trim().length > 0) {
      currentContent.push(line.trim());
    }
  }

  // Save last section
  if (currentSection && currentContent.length > 0) {
    sections[currentSection] = currentContent.filter(
      (l) => l.trim().length > 0
    );
  }

  return {
    background: sections["bakgrund"],
    role: sections["vår roll"],
    resultat: sections["resultat"],
  };
}
