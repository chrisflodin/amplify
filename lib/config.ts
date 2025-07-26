import { defaultConfig, variantConfig } from "@/config/website";
import { ConfigVariant, WebsiteConfig } from "@/types/config";

/**
 * Get the current configuration variant from environment variables
 */
export function getConfigVariant(): ConfigVariant {
  const variant =
    process.env.NEXT_PUBLIC_CONFIG_VARIANT ||
    process.env.CONFIG_VARIANT ||
    "default";
  return variant === "geo" ? "geo" : "default";
}

/**
 * Check if we're running the variant configuration
 */
export function isVariantConfig(): boolean {
  return getConfigVariant() === "geo";
}

/**
 * Get configuration
 */
export function getConfig(): WebsiteConfig {
  const variant = getConfigVariant();

  switch (variant) {
    case "geo":
      return variantConfig;
    case "default":
    default:
      return defaultConfig;
  }
}

/**
 * Get configuration for client-side usage
 */
export function getClientConfig(): WebsiteConfig {
  // For client-side, we need to use NEXT_PUBLIC_ prefixed variables
  const variant = process.env.NEXT_PUBLIC_CONFIG_VARIANT || "default";
  return variant === "geo" ? variantConfig : defaultConfig;
}
