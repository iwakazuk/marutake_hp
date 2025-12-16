import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = decodeURIComponent(hash.replace('#', ''));
      let attempts = 0;
      const maxAttempts = 20; // try for ~1s total

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          // Use native scrolling; offset handled by CSS (scroll-mt-*)
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts < maxAttempts) {
          attempts += 1;
          setTimeout(tryScroll, 50);
        }
      };

      // defer to allow lazy-loaded content to mount
      setTimeout(tryScroll, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

