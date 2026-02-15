import React from 'react';
import { Icon } from './Icon';

export const FeatureStepOne: React.FC = () => {
  return (
    <div id="concept" className="grid md:grid-cols-12 h-[60vh] min-h-[500px] border-b border-earth-dark/5 bg-white">
      {/* Visual Side */}
      <div className="md:col-span-7 relative h-96 md:h-auto overflow-hidden bg-[#f7f9f8] flex items-center justify-center group">
        <div className="absolute inset-0 bg-primary/5 z-10 pointer-events-none"></div>
        <div className="w-full h-full flex items-center justify-center p-12 transition-transform duration-700 group-hover:scale-105">
          <div className="w-64 h-[460px] bg-white border-[6px] border-earth-dark rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col">

            {/* Phone Screen Content */}
            <div className="flex-1 flex flex-col relative bg-white overflow-hidden min-h-0">
              <img
                src="/images/feature-step-one-phone.svg"
                alt="Écran app Ride'n'Rest - dépôt GPX"
                className="w-full h-full object-contain object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="md:col-span-5 flex flex-col justify-center p-12 md:p-20 bg-white">
        <div className="inline-flex items-center gap-4 text-accent font-semibold text-[10px] uppercase tracking-[0.4em] mb-8">
          <span className="h-px w-10 bg-accent"></span> Étape 01
        </div>
        <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight tracking-tight text-primary uppercase">
          Créé ton <br /> aventure
        </h2>
        <p className="text-lg text-sage font-light mb-10 leading-relaxed">
          Importe ta trace GPX en un clic, depuis le site internet ou l'application Ride'n'Rest et créé ton aventure.
        </p>
        <div className="space-y-6">
          <div className="flex items-center gap-4 group cursor-default">
            <Icon name="check_circle" className="text-primary/60 group-hover:text-primary transition-colors" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-earth-dark group-hover:translate-x-1 transition-transform">Compatible Strava</p>
          </div>
          <div className="flex items-center gap-4 group cursor-default">
            <Icon name="check_circle" className="text-primary/60 group-hover:text-primary transition-colors" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-earth-dark group-hover:translate-x-1 transition-transform">Analyse de relief instantanée</p>
          </div>
        </div>
      </div>
    </div>
  );
};