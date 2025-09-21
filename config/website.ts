import { WebsiteConfig } from "@/types/config";
import { defaultConfig as defaultConfigData } from "./default.config";
import { geoConfig } from "./geo.config";

export const defaultConfig: WebsiteConfig = defaultConfigData;

export const variantConfig: WebsiteConfig = geoConfig;
