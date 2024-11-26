import { useEffect } from 'react';

export const useGoogleAnalytics = () => {
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-6GV30S2MHM', {
        page_path: window.location.pathname,
      });
    } else {
      console.warn('Google Analytics not loaded');
    }
  }, []);
};