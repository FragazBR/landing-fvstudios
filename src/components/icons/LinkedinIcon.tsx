import React from 'react';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={props.width || 18} height={props.height || 18} {...props}>
    <rect width="48" height="48" rx="8" fill="#fff" />
    <path d="M12 19h4v14h-4V19zm2-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 6h4v2h.1c.6-1.1 2.1-2.2 4.3-2.2 4.6 0 5.5 3 5.5 6.9V33h-4v-7c0-1.7-.1-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.8v7.1h-4V19z" fill="#0A66C2" />
  </svg>
);

export default LinkedinIcon;
