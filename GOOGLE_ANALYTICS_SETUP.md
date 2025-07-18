# Google Analytics Setup Documentation

## 🚀 Overview

This project includes a complete Google Analytics 4 (GA4) setup that's optimized for Next.js App Router with server-side rendering. The implementation is SEO-friendly and provides automatic page view tracking plus custom event tracking.

## 📁 File Structure

```
components/
├── analytics.tsx              # Core GA4 component with tracking functions
├── page-analytics.tsx         # Optional page-specific tracking component

hooks/
├── useAnalytics.ts           # Custom hook for manual page tracking

lib/
├── analytics.ts              # Utility functions for common tracking events
```

## 🔧 Initial Setup

### Step 1: Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or select an existing one
3. Navigate to **Admin** → **Data Streams** → **Web**
4. Copy your **Measurement ID** (starts with `G-`)

### Step 2: Add Environment Variables

Create a `.env.local` file in your project root:

```bash
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Google Analytics Measurement ID.

### Step 3: The Setup is Already Complete! 

The following components are already integrated:
- ✅ `GoogleAnalytics` component in `app/layout.tsx`
- ✅ Analytics utilities in `lib/analytics.ts`
- ✅ SEO-friendly implementation (no client-side app wrapper)

## 📊 What's Automatically Tracked

The setup automatically tracks:
- **Page views** (when you add `PageAnalytics` to pages)
- **User sessions** and **bounce rate**
- **Traffic sources** (organic, direct, referral, social)
- **Device information** (mobile, desktop, tablet)
- **Geographic data** (country, city)
- **Custom events** (using utility functions)

## 🎯 How to Use Analytics

### 1. Track Button Clicks

```typescript
import { trackButtonClick } from "@/lib/analytics";

export default function MyButton() {
  const handleClick = () => {
    trackButtonClick("Sign Up", "Hero Section");
    // Your button logic here
  };

  return <button onClick={handleClick}>Sign Up</button>;
}
```

### 2. Track Form Submissions

```typescript
import { trackFormSubmission } from "@/lib/analytics";

export default function ContactForm() {
  const handleSubmit = async (data) => {
    try {
      await submitForm(data);
      trackFormSubmission("Contact Form", true);
    } catch (error) {
      trackFormSubmission("Contact Form", false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

### 3. Track Service Page Views

```typescript
import { trackServicePageView } from "@/lib/analytics";
import { useEffect } from "react";

export default function ServicePage() {
  useEffect(() => {
    trackServicePageView("Web Development");
  }, []);

  return <div>Service content</div>;
}
```

### 4. Track Link Clicks

```typescript
import { trackLinkClick } from "@/lib/analytics";

export default function MyLink() {
  return (
    <a 
      href="https://example.com" 
      onClick={() => trackLinkClick("https://example.com", "External Link")}
    >
      Visit Example
    </a>
  );
}
```

### 5. Track Downloads

```typescript
import { trackDownload } from "@/lib/analytics";

export default function DownloadButton() {
  const handleDownload = () => {
    trackDownload("brochure.pdf", "PDF");
    // Trigger download
  };

  return <button onClick={handleDownload}>Download Brochure</button>;
}
```

### 6. Optional: Track Specific Page Views

If you want to track page views for specific pages (in addition to automatic tracking):

```typescript
import PageAnalytics from "@/components/page-analytics";

export default function AboutPage() {
  return (
    <div>
      <PageAnalytics pageName="About Us" />
      {/* Your page content */}
    </div>
  );
}
```

## 🛠️ Available Tracking Functions

### Button Tracking
```typescript
trackButtonClick(buttonName: string, location?: string)
```

### Form Tracking
```typescript
trackFormSubmission(formName: string, success: boolean = true)
```

### Link Tracking
```typescript
trackLinkClick(linkUrl: string, linkText?: string)
```

### Download Tracking
```typescript
trackDownload(fileName: string, fileType?: string)
```

### Contact Form Tracking
```typescript
trackContactFormInteraction(action: 'start' | 'complete' | 'error')
```

### Service Page Tracking
```typescript
trackServicePageView(serviceName: string)
```

### Engagement Tracking
```typescript
trackScrollDepth(depth: number)
trackTimeOnPage(seconds: number, pageName: string)
```

## 🧪 Testing Your Setup

### 1. Real-time Reports
- Go to Google Analytics → **Reports** → **Realtime**
- Navigate your site in another tab
- You should see live traffic data

### 2. Browser DevTools
- Open DevTools → **Network** tab
- Filter by `google-analytics.com`
- Navigate your site and look for GA requests

### 3. Google Analytics Debugger
- Install the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) Chrome extension
- Enable it and check the console for GA debug info

## 📈 Best Practices

### 1. Consistent Naming
Use consistent naming conventions for your events:
- **Button names**: "Sign Up", "Contact Us", "Download"
- **Locations**: "Hero Section", "Footer", "Sidebar"
- **Forms**: "Contact Form", "Newsletter Signup"

### 2. Don't Over-Track
Only track meaningful interactions:
- ✅ Button clicks that indicate user intent
- ✅ Form submissions and completions
- ✅ Important link clicks
- ❌ Every hover or scroll event

### 3. Test in Development
Always test your tracking in development:
```typescript
// Add console logs for debugging
trackButtonClick("Test Button", "Dev Environment");
console.log("Analytics event sent");
```

## 🔒 Privacy Considerations

The setup follows privacy best practices:
- Only loads when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
- Uses Google's recommended implementation
- Respects user privacy settings
- Consider adding cookie consent if required by your region

## 🚀 Advanced Usage

### Custom Events
For more complex tracking needs:

```typescript
import { event } from "@/components/analytics";

// Custom event tracking
event({
  action: "video_play",
  category: "Media",
  label: "Hero Video",
  value: 1
});
```

### Conditional Tracking
Only track in production:

```typescript
import { trackButtonClick } from "@/lib/analytics";

const handleClick = () => {
  if (process.env.NODE_ENV === "production") {
    trackButtonClick("Production Button", "Header");
  }
  // Your logic here
};
```

## 📝 Environment Variables

```bash
# Required for Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Optional: Enable/disable analytics
NEXT_PUBLIC_ANALYTICS_ENABLED=true
```

## 🎯 SEO-Friendly Implementation

This setup is specifically designed to be SEO-friendly:

- ✅ **Server-side rendering preserved** - No client component wrapping
- ✅ **Fast page loads** - Scripts load after interactive
- ✅ **No hydration issues** - Proper client/server boundary
- ✅ **Google-friendly** - Uses official GA4 implementation

## 📞 Support

If you need to modify or extend the analytics setup:

1. **Check the components** in `components/analytics.tsx`
2. **Add new tracking functions** in `lib/analytics.ts`
3. **Test thoroughly** using the testing methods above
4. **Update this documentation** when adding new features

## 🔄 Migration Notes

If migrating from Universal Analytics (GA3):
- This setup uses GA4 (Google Analytics 4)
- Event structure is different from GA3
- Real-time data may take 24-48 hours to appear initially
- Consider running both during transition period 