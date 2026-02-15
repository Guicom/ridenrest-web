import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 950 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Ride'n'Rest"
  >
    <g transform="translate(20, 0)">
      <path
        d="M 48 112 C 48 56, 80 48, 96 48 S 144 48, 160 48 C 184 48, 184 88, 160 88 S 104 88, 96 88 C 80 88, 80 128, 104 128 C 132 128, 160 128, 188 128"
        stroke="#4A7C44"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="144" cy="48" r="11" fill="#b4c9b1" />
      <circle cx="196" cy="128" r="13" fill="#b4c9b1" />
    </g>
    <text
      x="250"
      y="130"
      fill="#4A7C44"
      fontSize="130"
      fontFamily="Inter, system-ui, -apple-system, sans-serif"
      fontWeight="100"
      letterSpacing="0.05em"
    >
      Ride'n'Rest
    </text>
  </svg>
);

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-earth-light/95 backdrop-blur-md border-b border-earth-dark/5">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center h-12 cursor-pointer group transition-transform duration-300 group-hover:scale-105">
          <Logo className="h-full w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          <a className="text-[10px] font-semibold tracking-[0.2em] uppercase hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" href="#concept">
            Le Concept
          </a>
          <a className="text-[10px] font-semibold tracking-[0.2em] uppercase hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" href="#pour-qui">
            Pour qui?
          </a>
        </nav>
      </div>
    </header>
  );
};