import React from 'react';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={props.width || 18} height={props.height || 18} {...props}>
    <path d="M24 2C12.95 2 4 10.95 4 22c0 9.95 7.95 18 18 18s18-8.05 18-18c0-11.05-8.95-20-18-20zm0 36c-9.95 0-18-8.05-18-18 0-11.05 8.05-20 18-20s18 8.95 18 20c0 9.95-8.05 18-18 18zm2-14h-2v-4h2v-2c0-1.1.9-2 2-2h2v-2h-2c-2.21 0-4 1.79-4 4v2h-2v4h2v8h4v-8z" fill="#1877F2" />
  </svg>
);

export default FacebookIcon;
