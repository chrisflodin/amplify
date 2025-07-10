import * as markdownLib from "@/lib/markdown";
import type { Project } from "@/types/project";

export function getProjectBySlug(slug: string): Project | undefined {
  return markdownLib.getProjectBySlug(slug);
}

export function getAllProjects(): Project[] {
  return markdownLib.getAllProjects();
}

export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  return markdownLib.getRelatedProjects(currentSlug, limit);
}
