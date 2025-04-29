// Client-side component for live previews
'use client';

import { useEffect } from 'react';

export default function CloudCannonLivePreview() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.CloudCannon) {
      const handleUpdate = () => {
        if (!window?.CloudCannon) return
        window?.CloudCannon.value()
          .then((data) => {
            const titleElement = document.querySelector('h1');
            const subtitleElement = document.querySelector('h2');
            const descriptionElement = document.querySelector('p');
            if (titleElement) titleElement.textContent = data.title;
            if (subtitleElement) subtitleElement.textContent = data.subtitle;
            if (descriptionElement) descriptionElement.textContent = data.description;
          })
          .catch((error) => {
            console.error('Error fetching CloudCannon data:', error);
          });
      };

      document.addEventListener('cloudcannon:update', handleUpdate);

      return () => {
        document.removeEventListener('cloudcannon:update', handleUpdate);
      };
    }
  }, []);

  return null;
}