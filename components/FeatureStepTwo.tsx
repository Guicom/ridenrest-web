import React from 'react';

export const FeatureStepTwo: React.FC = () => {
  return (
    <div className="relative min-h-[70vh] py-16 md:py-20 flex items-center overflow-hidden bg-[#b4c9b1]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="bg-white/95 backdrop-blur-md border border-white/40 shadow-xl p-8 md:p-12 border-l-4 border-accent shrink-0">
            <div className="inline-flex items-center gap-4 text-primary font-semibold text-[10px] uppercase tracking-[0.4em] mb-8">
              <span className="h-px w-10 bg-primary"></span> Étape 02
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight tracking-tight text-earth-dark uppercase">
              Décides en roulant
            </h2>
            <p className="text-lg text-sage font-light mb-10 leading-relaxed">
              Il est 15h, tu es en train de rouler, tu sais que tu peux rouler encore 80km. Visualises en temps réel les hébergements disponibles directement sur ta trace. Filtres par nombre de personnes, chambres, type de lits, etc...<br />
              Choisis ton hébergement préféré, réserve ton lit directement sur Booking et roule tranquille jusqu'à ton arrivée.
            </p>
          </div>
          <div className="flex justify-center md:justify-end items-center min-h-[320px] md:min-h-[450px] lg:min-h-[520px]">
            <img
              src="/images/step2.gif"
              alt="Interface Ride'n'Rest - visualisation des hébergements sur la trace"
              className="max-w-full w-full md:w-auto md:max-w-[min(100%,640px)] h-auto max-h-[55vh] md:max-h-[70vh] lg:max-h-[80vh] rounded-2xl shadow-2xl border border-white/20 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};