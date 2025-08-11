import React from 'react';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 18}
    height={props.height || 18}
    {...props}
  >
        <circle cx="24" cy="24" r="20" fill="#000" fillOpacity="0.15" />
        <circle cx="24" cy="24" r="12" fill="#000" fillOpacity="0.3" />
        <g>
            <path d="M22.5 14.5v14.5a3 3 0 1 1-3-3c.5 0 1 .1 1.5.3V21.5c-4.5.2-8 3.9-8 8.5 0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5V17.5c1 .6 2.1 1 3.2 1v-3.5c-1.1 0-2.2-.4-3.2-1V14.5h-3z" fill="#25F4EE" />
            <path d="M22.5 14.5v14.5a3 3 0 1 1-3-3c.5 0 1 .1 1.5.3V21.5c-4.5.2-8 3.9-8 8.5 0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5V17.5c1 .6 2.1 1 3.2 1v-3.5c-1.1 0-2.2-.4-3.2-1V14.5h-3z" fill="#FE2C55" fillOpacity="0.7" />
            <path d="M22.5 14.5v14.5a3 3 0 1 1-3-3c.5 0 1 .1 1.5.3V21.5c-4.5.2-8 3.9-8 8.5 0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5V17.5c1 .6 2.1 1 3.2 1v-3.5c-1.1 0-2.2-.4-3.2-1V14.5h-3z" fill="#fff" fillOpacity="0.8" />
        </g>
  </svg>
);
    <path d="M34.5 10.5c-2.2-1.2-3.5-3.2-3.5-5.5h-5v28.5c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.7 0 1.3.2 1.9.5V21.5c-6.1.3-11 5.3-11 11.5 0 6.4 5.1 11.5 11.5 11.5s11.5-5.1 11.5-11.5V15.5c1.2.7 2.6 1.1 4 1.1v-6.1c-1.4 0-2.8-.4-4-1.1z" fill="#25F4EE" />
export default TikTokIcon;
