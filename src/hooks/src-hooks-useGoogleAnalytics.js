// src/hooks/useGoogleAnalytics.js
import { useEffect } from 'react';

export const useGoogleAnalytics = () => {
  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'YOUR_MEASUREMENT_ID', {
        page_path: window.location.pathname,
      });
    }
  }, []);
};
