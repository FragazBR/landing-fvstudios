import React from 'react';

const SpotifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={props.width || 18} height={props.height || 18} {...props}>
    <rect width="48" height="48" rx="8" fill="#fff" />
    <circle cx="24" cy="24" r="16" fill="#1DB954" />
    <path d="M16 28c3-1.2 9-1.2 12 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 24c2-1 6-1 8 0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 20c1.5-.7 5-.7 6.5 0" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

export default SpotifyIcon;
