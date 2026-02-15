import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-earth-light" id="pour-qui">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-20 text-center">
          <div className="inline-block px-4 py-1 border-y border-sage/30 mb-6">
            <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-sage">La Communauté</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-primary tracking-tight uppercase">Pensé par des cyclistes</h2>
        </div>

        <div className="grid md:grid-cols-1 gap-12">
          {/* Card 2 */}
          <div className="p-10 bg-white border border-earth-dark/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <p className="text-base text-sage font-light leading-relaxed italic">
            Ride'n'Rest est né d’un besoin très simple : en longue distance ou en voyage, trouver un endroit pour dormir ne devrait pas être une source de stress. Au fur et à mesure que la journée progresse, que la fatigue s'intensifie et que le vent prend les rênes, il te faut avant tout de la clarté.
            <br />
            L'application a été conçue dans ce sens. Trouver rapidement un logement le long de ton itinéraire, sans faire de détours inutiles et sans multiplier les recherches. C'est à toi de décider combien de chemin tu peux encore parcourir, d'anticiper les alternatives qui s'offrent à toi, et de faire ton choix en toute tranquillité.
            <br />
            Moins d'incertitude, plus de sérénité. L'essentiel pour continuer à avancer sans souci.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};