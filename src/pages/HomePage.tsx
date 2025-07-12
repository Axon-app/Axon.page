import React, { useEffect } from 'react';
import {
  Header,
  HeroSection,
  ClientsSection,
  ServicesSection,
  AboutSection,
  PortfolioSection,
  TechnologiesSection,
  TeamSection,
  BlogSection,
  CTASection,
  ContactSection,
  Footer,
  Preloader
} from '../components';
import { useScrollAnimation, useInteractiveCard } from '../hooks';

export const HomePage: React.FC = () => {
  useScrollAnimation();
  useInteractiveCard();

  useEffect(() => {
    // Inicializar la opacidad del body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
  }, []);

  return (
    <>
      <Preloader />
      <div className="min-h-screen w-full">
        <Header />
        <main>
          <HeroSection />
          <ClientsSection />
          <ServicesSection />
          <AboutSection />
          <PortfolioSection />
          <TechnologiesSection />
          <TeamSection />
          <BlogSection />
          <CTASection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};
