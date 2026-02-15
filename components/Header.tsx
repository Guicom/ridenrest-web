import React, { useState } from 'react';

const navLinkClass =
  'text-[10px] font-semibold tracking-[0.2em] uppercase hover:text-primary transition-colors relative after:content-[\'\'] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left block py-2 md:py-0';

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-earth-light/95 backdrop-blur-md border-b border-earth-dark/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <a href="/" className="flex items-center h-10 sm:h-12 max-w-[200px] sm:max-w-none cursor-pointer group transition-transform duration-300 group-hover:scale-105 shrink-0">
          <Logo className="h-full w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          <a className={navLinkClass} href="/#concept">
            Le Concept
          </a>
          <a className={navLinkClass} href="/#pour-qui">
            Pour qui?
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg text-earth-dark hover:bg-earth-dark/5 focus:outline-none focus:ring-2 focus:ring-primary/30"
          aria-expanded={menuOpen}
          aria-label="Menu"
        >
          <span className="sr-only">{menuOpen ? 'Fermer' : 'Ouvrir'} le menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          menuOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <nav className="px-4 sm:px-6 pb-4 pt-2 border-t border-earth-dark/5 bg-earth-light flex flex-col gap-1">
          <a className={navLinkClass} href="/#concept" onClick={() => setMenuOpen(false)}>
            Le Concept
          </a>
          <a className={navLinkClass} href="/#pour-qui" onClick={() => setMenuOpen(false)}>
            Pour qui?
          </a>
        </nav>
      </div>
    </header>
  );
};