import React from 'react';

const PodcastIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 18}
    height={props.height || 18}
    {...props}
  >
    <circle cx="24" cy="24" r="20" fill="#1DB954" fillOpacity="0.15" />
    <circle cx="24" cy="24" r="12" fill="#1DB954" fillOpacity="0.3" />
    <circle cx="24" cy="24" r="5" fill="#1DB954" />
    <rect x="21" y="16" width="6" height="16" rx="3" fill="#fff" />
    <rect x="23" y="20" width="2" height="8" rx="1" fill="#1DB954" />
  </svg>
);

export default PodcastIcon;
