import React from 'react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={props.width || 18} height={props.height || 18} {...props}>
    <rect width="448" height="448" rx="96" fill="#fff" />
    <path d="M224 128a96 96 0 1 0 0 192 96 96 0 0 0 0-192zm0 160a64 64 0 1 1 0-128 64 64 0 0 1 0 128zm112-160a32 32 0 1 1-64 0 32 32 0 0 1 64 0z" fill="#E4405F" />
  </svg>
);

export default InstagramIcon;
