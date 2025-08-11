import React from 'react';

const ChromeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={props.width || 18} height={props.height || 18} {...props}>
    <circle cx="24" cy="24" r="20" fill="#4285F4" fillOpacity="0.15" />
    <circle cx="24" cy="24" r="12" fill="#4285F4" fillOpacity="0.3" />
    <circle cx="24" cy="24" r="5" fill="#fff" />
    <circle cx="24" cy="24" r="2" fill="#4285F4" />
  </svg>
);

export default ChromeIcon;
