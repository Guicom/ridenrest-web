import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureStepOne } from './components/FeatureStepOne';
import { FeatureStepTwo } from './components/FeatureStepTwo';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { MentionsLegales } from './components/MentionsLegales';
import { Contact } from './components/Contact';

const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

function App() {
  const renderPage = () => {
    if (pathname === '/mentions-legales') return <MentionsLegales />;
    if (pathname === '/contact') return <Contact />;
    return (
      <>
        <Hero />
        <FeatureStepOne />
        <FeatureStepTwo />
        <Testimonials />
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;