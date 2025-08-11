import React from 'react';

const MessageCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={props.width || 18} height={props.height || 18} {...props}>
    <circle cx="24" cy="24" r="20" fill="#25D366" fillOpacity="0.15" />
    <circle cx="24" cy="24" r="12" fill="#25D366" fillOpacity="0.3" />
    <ellipse cx="24" cy="24" rx="8" ry="6" fill="#fff" />
    <ellipse cx="24" cy="24" rx="4" ry="2.5" fill="#25D366" />
  </svg>
);

export default MessageCircleIcon;
