import React from 'react';

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={props.width || 18} height={props.height || 18} {...props}>
    <circle cx="24" cy="24" r="20" fill="#25D366" fillOpacity="0.15" />
    <circle cx="24" cy="24" r="12" fill="#25D366" fillOpacity="0.3" />
    <circle cx="24" cy="24" r="7" fill="#25D366" />
    <path d="M28 27c-1.5-1-2.5-2-3.5-3.5-1-1.5-2-2.5-3.5-3.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 28c2-1 6-1 8 0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export default WhatsappIcon;
