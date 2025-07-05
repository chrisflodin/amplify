# Landing page creation

_Automatically synced with your [v0.dev](https://v0.dev) deployments_

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/chrisflodins-projects/v0-landing-page-creation)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/U1kDBgGgXGm)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/chrisflodins-projects/v0-landing-page-creation](https://vercel.com/chrisflodins-projects/v0-landing-page-creation)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/U1kDBgGgXGm](https://v0.dev/chat/projects/U1kDBgGgXGm)**

## Content Structure & Field Usage

### Service and Category Content Fields

When working with service and category pages, it's important to understand how different content fields are used:

#### Field Definitions:

- **Title**: Primarily used for the title on the actual service landing page. This is the main heading that visitors see.
- **Subtitle**: Displays underneath the title to provide additional context or description.
- **Service Name**: Contains only the name of the service (used for navigation and listings).

#### Important Notes:

- **Title Variations**: Titles may vary from time to time as we experiment with different versions to optimize search engine results and user engagement.
- **SEO Considerations**: The title field is often adjusted for SEO testing purposes, so don't rely on it being static.
- **Service Name Consistency**: The service name should remain consistent as it's used for navigation and internal references.

### Usage Examples:

```tsx
// In category-hero-section.tsx
<p className="text-sm uppercase tracking-wide mb-4">{data.title}</p>
<h1 className="text-5xl font-macklin font-light mb-8">{data.subtitle}</h1>

// Service navigation
{services.map((service) => (
  <Link href={`/${categorySlug}/${service.slug}`}>
    {service.serviceName}
  </Link>
))}
```

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
