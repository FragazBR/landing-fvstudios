import React from 'react';

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={props.width || 18} height={props.height || 18} {...props}>
    <rect width="48" height="48" rx="8" fill="#fff" />
    <path d="M44 14.5c0-2.5-2-4.5-4.5-4.5H8.5C6 10 4 12 4 14.5v19c0 2.5 2 4.5 4.5 4.5h31c2.5 0 4.5-2 4.5-4.5v-19zM20 32V16l12 8-12 8z" fill="#FF0000" />
  </svg>
);

export default YoutubeIcon;
