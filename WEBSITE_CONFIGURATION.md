# Website Configuration System

This system allows you to easily switch between different website configurations for your landing page text and featured services.

## Quick Setup

### Environment Variables

Set the configuration variant using environment variables:

```bash
# For development (.env.local)
NEXT_PUBLIC_CONFIG_VARIANT=default

# For production deployment
NEXT_PUBLIC_CONFIG_VARIANT=variant
```

### Available Configurations

#### Default Configuration
- **Hero Title**: "Vi bygger din digitala framgång"
- **Hero Subtitle**: "En digital byrå som har hjälpt några av Sveriges mest framgångsrika entreprenörer..."
- **Services Order**: geo, seo, webbutveckling, apputveckling, e-handel, ux-ui-design, growth, branding, content
- **Services Section**: "Våra tjänster"

#### Variant Configuration  
- **Hero Title**: "Transformera ditt företag digitalt"
- **Hero Subtitle**: "Vi skapar digitala lösningar som driver tillväxt och förbättrar kundupplevelsen..."
- **Services Order**: growth, seo, branding, ux-ui-design, webbutveckling, e-handel, apputveckling
- **Services Section**: "Expertområden"

## How to Switch Configurations

### Method 1: Environment Variable (Recommended)
```bash
# Switch to variant configuration
NEXT_PUBLIC_CONFIG_VARIANT=variant npm run dev

# Switch to default configuration  
NEXT_PUBLIC_CONFIG_VARIANT=default npm run dev
```

### Method 2: Create .env.local file
```bash
# .env.local
NEXT_PUBLIC_CONFIG_VARIANT=variant
```

### Method 3: Build-time Configuration
```bash
# For production builds
NEXT_PUBLIC_CONFIG_VARIANT=variant npm run build
```

## Configuration Files

- `config/website.ts` - Contains both configuration objects
- `lib/config.ts` - Configuration loading logic
- `types/config.ts` - TypeScript interfaces

## Adding New Configurations

To add a new configuration variant:

1. **Update the ConfigVariant type** in `types/config.ts`:
```typescript
export type ConfigVariant = 'default' | 'variant' | 'new-variant';
```

2. **Create the configuration** in `config/website.ts`:
```typescript
export const newVariantConfig: WebsiteConfig = {
  id: "new-variant",
  name: "New Variant",
  hero: {
    title: "Your New Title",
    subtitle: "Your new subtitle...",
    ctaText: "Your CTA"
  },
  services: {
    featured: ["service1", "service2"], // Array of service slugs
    sectionsTitle: "Your Services Title",
    sectionsSubtitle: "Your services description"
  },
  meta: {
    title: "Your Meta Title",
    description: "Your meta description"
  }
};
```

3. **Update the switch statement** in `lib/config.ts`:
```typescript
switch (variant) {
  case 'new-variant':
    return newVariantConfig;
  case 'variant':
    return variantConfig;
  case 'default':
  default:
    return defaultConfig;
}
```

## Affected Components

The following components automatically use the configuration:
- `HeroSection` - Hero title, subtitle, and CTA text
- `ServicesGridSection` - Section title, subtitle, and service order
- `app/layout.tsx` - Page metadata (title & description)

## Testing Different Configurations

1. **Local Development**:
```bash
# Test default
NEXT_PUBLIC_CONFIG_VARIANT=default npm run dev

# Test variant  
NEXT_PUBLIC_CONFIG_VARIANT=variant npm run dev
```

2. **Check Current Configuration**:
The configuration system includes helper functions:
```typescript
import { getConfigVariant, isVariantConfig } from '@/lib/config';

console.log('Current variant:', getConfigVariant());
console.log('Is variant config:', isVariantConfig());
```

## Deployment

For different environments, set the environment variable in your deployment platform:

- **Vercel**: Set `NEXT_PUBLIC_CONFIG_VARIANT` in project settings
- **Netlify**: Set in site settings under Environment variables  
- **Docker**: Use `ENV NEXT_PUBLIC_CONFIG_VARIANT=variant`

The configuration is determined at build time, so you'll need to redeploy to switch configurations in production. 