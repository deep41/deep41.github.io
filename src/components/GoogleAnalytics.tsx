import { useEffect } from 'react';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
    dataLayer: unknown[];
    GA_TRACKING_ID?: string;
  }
}

interface GoogleAnalyticsProps {
  trackingId?: string;
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ trackingId }) => {
  useEffect(() => {
    // Only run in production and if tracking ID is provided
    if (typeof window !== 'undefined' && trackingId && trackingId !== 'G-XXXXXXXXXX') {
      // Track page view when component mounts
      window.gtag?.('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [trackingId]);

  return null; // This component doesn't render anything
};

// Utility functions for tracking events
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', window.GA_TRACKING_ID || '', {
      page_title: title || document.title,
      page_location: url,
    });
  }
};

// Specific tracking functions for common actions
export const trackProjectView = (projectName: string) => {
  trackEvent('view_project', {
    project_name: projectName,
    event_category: 'engagement',
  });
};

export const trackBlogView = (blogTitle: string) => {
  trackEvent('view_blog_post', {
    blog_title: blogTitle,
    event_category: 'engagement',
  });
};

export const trackDownloadResume = () => {
  trackEvent('download_resume', {
    event_category: 'engagement',
    event_label: 'resume_download',
  });
};

export const trackContactForm = (method: string) => {
  trackEvent('contact_form_submit', {
    contact_method: method,
    event_category: 'lead_generation',
  });
};

export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('click_external_link', {
    link_url: url,
    link_text: linkText,
    event_category: 'engagement',
  });
};

export default GoogleAnalytics; 