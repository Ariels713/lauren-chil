import React from "react";

function LcLogo(props) {
  const title = props.title || "lc logo (1)";

  return (
    <svg
      height="56"
      width="56"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g>
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="93"
        >
          <path
            d="M265 260c-1.74 220.136-20.14 326.513 31 406 82.39 128.057 239 88 239 88"
            stroke="#e19c79"
          />
          <path
            d="M709 281c-106.287-58.688-232 21.095-232 131s105.736 215.898 235 147"
            stroke="#d8829a"
          />
        </g>
        <path
          d="M768 760.5c0-31.204-25.296-56.5-56.5-56.5S655 729.296 655 760.5s25.296 56.5 56.5 56.5 56.5-25.296 56.5-56.5z"
          fill="#aed1e1"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LcLogo;
