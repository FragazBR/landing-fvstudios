import React from 'react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={props.width || 18} height={props.height || 18} {...props}>
    <circle cx="24" cy="24" r="20" fill="#fff" fillOpacity="0.15" />
    <circle cx="24" cy="24" r="12" fill="#fff" fillOpacity="0.3" />
    <path d="M24 14c-5.5 0-10 4.5-10 10 0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7-.8.7-.8-.8-.1-1.6-.4-1.6-1.7 0-.4.1-.7.3-1-.1-.3-.3-1.1.1-2.2 0 0 .8-.3 2.5 1 .7-.2 1.5-.3 2.3-.3s1.6.1 2.3.3c1.7-1.3 2.5-1 2.5-1 .4 1.1.2 1.9.1 2.2.2.3.3.6.3 1 0 1.3-.8 1.6-1.6 1.7 0 .6-.2.9.7.8 0 0 .6-1 1.7-1.1 0 0 1.1 0 .1.7 0 0-.7.3-1.2 1.5 0 0-.6 1.9-3.4 1.3v2c0 .3.2.6.7.5C31.1 32.1 34 28.4 34 24c0-5.5-4.5-10-10-10z" fill="#000" />
  </svg>
);

export default GithubIcon;
