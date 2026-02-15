import React from 'react';
import { Icon } from './Icon';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-earth-dark text-earth-light border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-b border-white/5 pb-16">
          <div className="flex items-center gap-4 group cursor-pointer">
            <span className="text-xl font-medium uppercase tracking-tight text-white group-hover:text-accent transition-colors">Ride'n'Rest</span>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-[10px] font-semibold uppercase tracking-[0.2em]">
            <a className="hover:text-accent transition-colors hover:underline decoration-accent underline-offset-4" href="/contact">Contact</a>
            <a className="hover:text-accent transition-colors hover:underline decoration-accent underline-offset-4" href="/mentions-legales">Mentions légales</a>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] font-medium text-earth-light/30 uppercase tracking-[0.2em]">Ride'n'Rest © 2026</span>
          <span className="text-[10px] font-medium text-earth-light/30 uppercase tracking-[0.2em]">Fabriqué pour l'aventure</span>
        </div>
      </div>
    </footer>
  );
};