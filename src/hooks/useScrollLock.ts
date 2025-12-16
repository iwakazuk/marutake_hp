import { useEffect } from 'react';

export function useScrollLock(locked: boolean) {
  useEffect(() => {
    const original = document.body.style.overflow;
    if (locked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = original || 'unset';
    };
  }, [locked]);
}

