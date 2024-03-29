import type { SVGProps } from 'react';

export default (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    {...props}
  >
    <path d="M19 4H5a3.003 3.003 0 00-3 3v10a3.003 3.003 0 003 3h14a3.003 3.003 0 003-3V7a3.003 3.003 0 00-3-3zm1 10H4V7a1 1 0 011-1h14a1 1 0 011 1z" />
  </svg>
);
