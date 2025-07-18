import { Service, ServiceDetailData } from "@/types/service";
import fs from "fs";
import yaml from "js-yaml";
import path from "path";

// Cache to avoid reading files multiple times during build
let servicesCache: Service[] | null = null;
let serviceDetailsCache: Record<string, ServiceDetailData> | null = null;

const contentDirectory = path.join(process.cwd(), "content");
const servicesDirectory = path.join(contentDirectory, "services");

function getServiceSlugs(): string[] {
  if (typeof window !== "undefined") {
    throw new Error("getServiceSlugs can only be called on the server side");
  }

  if (!fs.existsSync(servicesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(servicesDirectory)
    .filter((file) => file.endsWith(".yaml") || file.endsWith(".yml"))
    .map((file) => file.replace(/\.(yaml|yml)$/, ""));
}

function loadServiceFromYaml(slug: string): any {
  if (typeof window !== "undefined") {
    throw new Error(
      "loadServiceFromYaml can only be called on the server side"
    );
  }

  const yamlPath = path.join(servicesDirectory, `${slug}.yaml`);
  const ymlPath = path.join(servicesDirectory, `${slug}.yml`);

  let fullPath: string;
  if (fs.existsSync(yamlPath)) {
    fullPath = yamlPath;
  } else if (fs.existsSync(ymlPath)) {
    fullPath = ymlPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  return yaml.load(fileContents);
}

export function getServiceBySlug(slug: string): Service | undefined {
  if (typeof window !== "undefined") {
    throw new Error("getServiceBySlug can only be called on the server side");
  }

  try {
    const serviceData = loadServiceFromYaml(slug);
    if (!serviceData) {
      return undefined;
    }

    // Extract only the service properties, excluding sections
    const { sections, ...serviceProps } = serviceData;

    return {
      ...serviceProps,
      slug,
    } as Service;
  } catch (error) {
    console.error(`Error reading service ${slug}:`, error);
    return undefined;
  }
}

export function getServiceDetailsBySlug(
  slug: string
): ServiceDetailData | undefined {
  if (typeof window !== "undefined") {
    throw new Error(
      "getServiceDetailsBySlug can only be called on the server side"
    );
  }

  // Use cache if available
  if (serviceDetailsCache && serviceDetailsCache[slug]) {
    return serviceDetailsCache[slug];
  }

  try {
    const serviceData = loadServiceFromYaml(slug);
    if (!serviceData) {
      return undefined;
    }

    // Extract service properties and sections
    const { sections, ...serviceProps } = serviceData;

    const service = {
      ...serviceProps,
      slug,
    } as Service;

    const serviceDetailData = {
      service,
      sections: sections || [],
    };

    // Cache the result
    if (!serviceDetailsCache) {
      serviceDetailsCache = {};
    }
    serviceDetailsCache[slug] = serviceDetailData;

    return serviceDetailData;
  } catch (error) {
    console.error(`Error reading service details ${slug}:`, error);
    return undefined;
  }
}

export function getAllServices(): Service[] {
  if (typeof window !== "undefined") {
    throw new Error("getAllServices can only be called on the server side");
  }

  // Use cache if available
  if (servicesCache) {
    return servicesCache;
  }

  const slugs = getServiceSlugs();
  const services = slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is Service => service !== undefined)
    .sort((a, b) => a.order - b.order); // Sort by order field

  // Cache the results
  servicesCache = services;
  return services;
}
