import { WebsiteConfig } from "@/types/config";
import fs from "fs";
import yaml from "js-yaml";
import path from "path";

function loadConfigFromYaml(filename: string): WebsiteConfig {
  const configPath = path.join(process.cwd(), "config", filename);
  const fileContents = fs.readFileSync(configPath, "utf8");
  return yaml.load(fileContents) as WebsiteConfig;
}

export const defaultConfig: WebsiteConfig = loadConfigFromYaml("default.yaml");

export const variantConfig: WebsiteConfig = loadConfigFromYaml("geo.yaml");
