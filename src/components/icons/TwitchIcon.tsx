import React from 'react';

const TwitchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={props.width || 18} height={props.height || 18} {...props}>
    <circle cx="24" cy="24" r="20" fill="#9146FF" fillOpacity="0.15" />
    <circle cx="24" cy="24" r="12" fill="#9146FF" fillOpacity="0.3" />
    <rect x="18" y="18" width="12" height="8" rx="2" fill="#fff" />
    <rect x="22" y="22" width="4" height="4" rx="2" fill="#9146FF" />
  </svg>
);

export default TwitchIcon;
